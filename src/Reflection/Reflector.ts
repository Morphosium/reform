import { IInputField, IInitialFiedBase } from "../Definitions/index";
import { IElementField } from "../Definitions/ManifestoField/ElementField/index";
import { IInitialFied } from "../Definitions/ManifestoField/InitialField/IInitialField";
import { ISectionField, RootSectionField } from "../Definitions/ManifestoField/SectionField/index";
import { Subject } from "../Definitions/Utils/Reactivity/Base/Subject.class";
import { EventObserve } from "../Definitions/Utils/Reactivity/EventObverser";
import { ElementReflection } from "./Reflections/ElementReflection";
import { InputReflection } from "./Reflections/InputReflection";
import { Reflection } from "./Reflections/Reflection";
import { SectionReflection } from "./Reflections/SectionReflection";

export class Reflector {
    baseElement: HTMLElement;
    rootSectionReflection: SectionReflection;

    onValueChange : Subject;

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
            //TODO: throw exception about no provided element
        }
    }

    expand(baseElement: HTMLElement, parentField: IInitialFied, parentSectionReflection?: SectionReflection) {
        /** in section, no element changes, content expanded into same element
         * in element, new element will be created and contents expanded into them
         */
        const fields = parentField.content;
        if (fields instanceof Array) {
            for (let index = 0; index < fields.length; index++) {
                const field = fields[index] as IInitialFied;

                let reflection: Reflection;
                if (field.isSection) {
                    reflection = new SectionReflection(
                        field as ISectionField, 
                        this, 
                        baseElement, parentSectionReflection);
                }
                if (field.isElement) {
                    const elementField = field as IElementField;
                    new ElementReflection(elementField, this, baseElement, parentSectionReflection);
                }

                if (field.isInput) {
                    reflection = new InputReflection(field as IInputField, this, baseElement, parentSectionReflection)
                }
                if (parentSectionReflection && reflection)
                    parentSectionReflection.subReflections.push(reflection)
            }
        }

    }

}