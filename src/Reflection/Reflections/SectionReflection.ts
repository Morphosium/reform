import { ISectionField, ISectionFieldBase, ValidationErrorMap } from "../../Definitions/index";
import { Subject } from "../../Utils/Reactivity/Base/Subject.class";
import { Reflector } from "../Reflector";
import { InputReflection } from "./InputReflection";
import { Reflection } from "./Reflection";

export class SectionReflection extends Reflection {


    readonly subReflections: Reflection[] = [];
    initialField: ISectionFieldBase;
    onValueChange: Subject<void>
    rawValue: { [key: string]: any; };

    constructor(
        sectionField: ISectionField,
        reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection
    ) {
        super();
        this.constructReflection(sectionField, reflector, baseElement, parentSectionReflection);
    }

    constructReflection(sectionField: ISectionField, reflector: Reflector, baseElement: HTMLElement, parentSectionReflection: SectionReflection): void {
        this.onValueChange = new Subject();
        this.initialField = sectionField;
        const inheritedSection = sectionField.root ? this : parentSectionReflection;
        reflector.expand(baseElement, sectionField, this);
    }

    valueChanged() {
        this.rawValue = this.collectSectionData();
        if (this.parentSectionReflection) {
            this.parentSectionReflection.valueChanged();
        }
        else {
            this.onValueChange.notify()
        }

    }


    getValue(mode: "final" | "raw", showGhost = false) {
        return this.collectSectionData(mode)
    }

    /**
     * Collects data under that's subsections
     * @param mode Final or Raw mode
     * @param callback callback that triggered with fetched data
     */
    private dataCollection(mode: "final" | "raw", callback: (incomeValue: any, name?: string) => any) {
        const usefulReflections = this.subReflections.filter(a => a.initialField.isInput || a.initialField.isSection);
        for (let reflectionIndex = 0; reflectionIndex < usefulReflections.length; reflectionIndex++) {
            const reflection = usefulReflections[reflectionIndex];
            if (reflection.initialField.isInput) {
                const inputReflection = reflection as InputReflection;
                if (inputReflection.value)
                    callback(inputReflection.value, inputReflection.initialField.name)
            }
            else if (reflection.initialField.isSection) {
                const sectionReflection = reflection as SectionReflection;
                const value = sectionReflection.collectSectionData(mode);
                if (value && ((typeof value != "object") || Object.keys(value).length > 0))
                    callback(value, sectionReflection.initialField.name)
            }
        }
    }

    /**Converts raw data into intended value specified in initial field */
    convertDataByMode(data: any, mode: "final" | "raw") {
        if ((mode === "final") && (this.initialField.convertToFinalValue)) {
            return this.initialField.convertToFinalValue(data)
        }
        else
            return data

    }

    collectSectionData(mode: "final" | "raw" = "final") {
        if (this.initialField.arraySectionRaw) {
            const array: any[] = [];
            this.dataCollection(mode, (value) => {
                array.push(value)
            });
            return this.convertDataByMode(array, mode);
        }
        else {
            const objectMap: { [key: string]: any } = {};
            this.dataCollection(mode, (value, name) => {
                objectMap[name] = value;
            });
            return this.convertDataByMode(objectMap, mode);
        }

    }

    /**
    * Collects all validation error and presents them like:
    * {
    *   'age': {atLeast: ...},
    *   'name': {required: ...},
    *   'email': {required: ...},
    *   'address.city': {required: ...}
    * } 
    * (3 input and 1 section field contains 'city' input)
    */
    collectValidationErrors(): { [key: string]: ValidationErrorMap } {
        const fieldNameHeader = this.initialField.name ? `${this.initialField.name}.` : '';
        const errorList: { [key: string]: ValidationErrorMap } = {};
        for (let subFieldIndex = 0; subFieldIndex < this.subReflections.length; subFieldIndex++) {
            const subReflection = this.subReflections[subFieldIndex];
            if (subReflection.initialField.isInput) {
                const inputReflection = (subReflection as InputReflection);
                inputReflection.validate();
                errorList[fieldNameHeader + subReflection.initialField.name] = inputReflection.validationErrors;
            }
            else if (subReflection.initialField.isSection) {
                const subReflectionValidationErrors = (subReflection as SectionReflection).collectValidationErrors();
                for (const key in subReflectionValidationErrors) {
                    if (Object.prototype.hasOwnProperty.call(subReflectionValidationErrors, key)) {
                        const validationErrorMap = subReflectionValidationErrors[key];
                        if (validationErrorMap != null && (Object.keys(validationErrorMap).length > 0))
                            errorList[fieldNameHeader + key] = validationErrorMap;
                    }
                }
            }
        }
        return errorList;
    }

    /**
     * Sets corresponding values of section 
     * @param data incoming new data
     */
    setValue(data: any) {
        if (data instanceof Object) {
            const dataAsObj = data as { [key: string]: any };
            for (const key in dataAsObj) {
                if (Object.prototype.hasOwnProperty.call(dataAsObj, key)) {
                    const value = dataAsObj[key];
                    if (
                        (typeof value != "function") &&
                        (key != "__proto__")
                    ) {
                        const reflection = this.findSubReflectionByName(key);
                        if (reflection.initialField.isSection) {
                            (reflection as SectionReflection).setValue(value);
                        }
                        else if (reflection.initialField.isInput) {
                            (reflection as InputReflection).setValueExternal(value);
                        }
                    }
                }
            }

        }
        else {

        }
    }

    /**
     * Finds reflection under this' first level sub reflections
     * @param key name of reflection/field
     */
    findSubReflectionByName(key: string) {
        return this.subReflections?.find(
            refl => refl.initialField.name === key
        )
    }

    setErrorMessageVisibility(value: boolean): void {
        for (let reflectionIndex = 0; reflectionIndex < this.subReflections.length; reflectionIndex++) {
            const reflection = this.subReflections[reflectionIndex];
            reflection.setErrorMessageVisibility(value);
        }
    }

}