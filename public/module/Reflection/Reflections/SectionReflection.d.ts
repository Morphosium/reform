import { ISectionField, ValidationErrorMap } from "../../Definitions/index";
import { Subject } from "../../Utils/Reactivity/Base/Subject.class";
import { Reflector } from "../Reflector";
import { IReflection } from "../IReflection";
export declare class SectionReflection implements IReflection {
    initialField: ISectionField;
    reflector: Reflector;
    baseParentalElement: HTMLElement;
    parentSectionReflection: SectionReflection;
    readonly subReflections: IReflection[];
    onValueChange: Subject<void>;
    rawValue: {
        [key: string]: any;
    };
    constructor(initialField: ISectionField, reflector: Reflector, baseParentalElement: HTMLElement, parentSectionReflection: SectionReflection);
    /** @inheritDoc */
    constructReflection(): void;
    /** @inheritDoc */
    valueChanged(): void;
    /**
     * Returns value by compiled from child reflections currently filled
     * @param mode sets returned value according to ready for submit (final) or not (raw)
     */
    getValue(mode: "final" | "raw"): any;
    /**
     * Collects data under that's subsections
     * @param mode Final or Raw mode
     * @param callback callback that triggered with fetched data
     */
    private dataCollection;
    /**
     * Converts raw data into intended value specified in initial field
     * */
    convertDataByMode(data: any, mode: "final" | "raw"): any;
    /**
     * Collects data under this sections and converts depending mode is final or not
     */
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
    findSubReflectionByName(key: string): IReflection;
    /**
     * Sets error message visibilities of the inputs
     * */
    setErrorMessageVisibility(value: boolean): void;
}
