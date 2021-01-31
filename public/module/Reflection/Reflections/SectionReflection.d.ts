import { ISectionField, ISectionFieldBase, ValidationErrorMap } from "../../Definitions/index";
import { Subject } from "../../Utils/Reactivity/Base/Subject.class";
import { Reflector } from "../Reflector";
import { Reflection } from "./Reflection";
export declare class SectionReflection extends Reflection {
    parentSectionReflection: SectionReflection;
    readonly subReflections: Reflection[];
    initialField: ISectionFieldBase;
    onValueChange: Subject<void>;
    rawValue: {
        [key: string]: any;
    };
    constructor(sectionField: ISectionField, reflector: Reflector, baseElement: HTMLElement, parentSectionReflection: SectionReflection);
    constructReflection(sectionField: ISectionField, reflector: Reflector, baseElement: HTMLElement, parentSectionReflection: SectionReflection): void;
    valueChanged(): void;
    getValue(mode: "final" | "raw", showGhost?: boolean): any;
    /**
     * Collects data under that's subsections
     * @param mode Final or Raw mode
     * @param callback callback that triggered with fetched data
     */
    private dataCollection;
    /**Converts raw data into intended value specified in initial field */
    convertDataByMode(data: any, mode: "final" | "raw"): any;
    collectSectionData(mode?: "final" | "raw"): any;
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
    collectValidationErrors(): {
        [key: string]: ValidationErrorMap;
    };
    /**
     * Sets corresponding values of section
     * @param data incoming new data
     */
    setValue(data: any): void;
    /**
     * Finds reflection under this' first level sub reflections
     * @param key name of reflection/field
     */
    findSubReflectionByName(key: string): Reflection;
    setErrorMessageVisibility(value: boolean): void;
}
