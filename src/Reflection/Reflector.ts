import { IInputField, IInitialFieldBase } from "../Definitions/index";
import { IElementField } from "../Definitions/InitialFields/ElementField/index";
import { IInitialField } from "../Definitions/InitialFields/InitialField/IInitialField";
import { ISectionField, RootSectionField } from "../Definitions/InitialFields/SectionField/index";
import { Subject } from "../Utils/Reactivity/Base/Subject.class";
import { EventObserve } from "../Utils/Reactivity/EventObverser";
import { ElementReflection } from "./Reflections/ElementReflection";
import { InputReflection } from "./Reflections/InputReflection";
import { Reflection } from "./Reflections/Reflection";
import { SectionReflection } from "./Reflections/SectionReflection";

export class Reflector {
    baseElement: HTMLElement;
    rootSectionReflection: SectionReflection;
    idMap: { [reflectionId: string]: Reflection } = {};
    onValueChange: Subject<void>;

    constructor(public rootManifest: RootSectionField) {
        this.onValueChange = new Subject();
    }

    expandThere(elementOrSelector: HTMLElement | string) {

        this.baseElement = null;
        if (typeof elementOrSelector === "string") {
            this.baseElement = document.querySelector(elementOrSelector);
        }
        else {
            this.baseElement = elementOrSelector;
        }
        if (this.baseElement) {
            this.rootSectionReflection = new SectionReflection(this.rootManifest, this, this.baseElement, null)
            this.rootSectionReflection.onValueChange.subscribe(
                new EventObserve(value => {
                    this.onValueChange.notify(value)
                })
            )
        }
        else {
            throw "No provided element. Please make sure element is not null"
        }
    }

    /**
     * Expands stated initial fields into a base element. Returns reflection instances of initial field contents these are expanded now
     * @param baseElement the element where is expanded in
     * @param initialField the initial parent will be expanded
     * @param parentSectionReflection the parent section reflection of that initial field
     */
    expand(baseElement: HTMLElement, initialField: IInitialField, parentSectionReflection?: SectionReflection): Reflection[] {
        /** in section, no element changes, content expanded into same element
         * in element, new element will be created and contents expanded into them
         */
        const fields = initialField.content, reflections : Reflection[] = [];
        if (fields instanceof Array) {
            for (let index = 0; index < fields.length; index++) {
                const field = fields[index] as IInitialField;

                let reflection: Reflection;
                if (field.isSection) {
                    reflection = new SectionReflection(
                        field as ISectionField,
                        this,
                        baseElement, parentSectionReflection);
                }
                if (field.isElement) {
                    const elementField = field as IElementField;
                    reflection = new ElementReflection(elementField, this, baseElement, parentSectionReflection);
                }

                if (field.isInput) {
                    reflection = new InputReflection(field as IInputField, this, baseElement, parentSectionReflection)
                }
                if (parentSectionReflection && reflection && !field.isElement) { 
                    parentSectionReflection.subReflections.push(reflection);
                    reflections.push(reflection);
                }
                if (reflection?.initialField?.id) { 
                    this.idMap[reflection.initialField.id] = reflection;
                 }
            }
            return reflections
        }

    }

    /**
     * Finds reflection by id that provided in initial field
     * @param id id field of initial field before reflected
     */
    findReflectionById(id: string): Reflection | null {
        return this.idMap[id]
    }

    /**
     * Returns value of form
     * @param final if final is true and any section has convertToFinalValue method, 
     * section value is will be return of convertToFinalValue method
     */
    getValue(final = true) {
        return this.rootSectionReflection.getValue(final ? "final" : "raw");
    }

    /**
     * Sets value of root section by corresponding fields
     * @param data incoming data
     * @param isIntegrityImportant (Not stable) when missing fields on all sections, exception will be raised
     */
    patchValue(data : {[key : string] : string}, isIntegrityImportant = false) {
        //TODO: integrity
        this.rootSectionReflection.setValue(data);
    }
   
    collectValidationErrors() {
        return this.rootSectionReflection.collectValidationErrors();
    }

    setErrorMessageVisibility(visible : boolean) {
      this.rootSectionReflection.setErrorMessageVisibility(visible)
    }

}