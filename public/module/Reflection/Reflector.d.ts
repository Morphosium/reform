import { IInitialField } from "../Definitions/InitialFields/InitialField/IInitialField";
import { RootSectionField } from "../Definitions/InitialFields/SectionField/index";
import { Subject } from "../Utils/Reactivity/Base/Subject.class";
import { IReflection } from "./IReflection";
import { SectionReflection } from "./Reflections/SectionReflection";
export declare class Reflector {
    rootManifest: RootSectionField;
    baseElement: HTMLElement;
    rootSectionReflection: SectionReflection;
    idMap: {
        [reflectionId: string]: IReflection;
    };
    onValueChange: Subject<void>;
    constructor(rootManifest: RootSectionField);
    /**
     * Constructs form to provided element
     * @param elementOrSelector Provided element or element's query (like ```"#form"```) will be provided
     */
    expandThere(elementOrSelector: HTMLElement | string): void;
    /**
     * Expands stated initial fields into a base element. Returns reflection instances of initial field contents these are expanded now
     * @param baseElement the element where is expanded in
     * @param initialField the initial parent will be expanded
     * @param parentSectionReflection the parent section reflection of that initial field
     */
    expand(baseElement: HTMLElement, initialField: IInitialField, parentSectionReflection?: SectionReflection): IReflection[];
    /**
     * Finds reflection by id that provided in initial field
     * @param id id field of initial field before reflected
     */
    findReflectionById(id: string): IReflection | null;
    /**
     * Returns value of form
     * @param final if final is true and any section has convertToFinalValue method,
     * section value is will be return of convertToFinalValue method
     */
    getValue(final?: boolean): any;
    /**
     * Sets value of root section by corresponding fields
     * @param data incoming data
     * @param isIntegrityImportant (Not stable) when missing fields on all sections, exception will be raised
     */
    patchValue(data: {
        [key: string]: string;
    }, isIntegrityImportant?: boolean): void;
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
        [key: string]: import("../Definitions").ValidationErrorMap;
    };
    /**
     * Sets validation error messages visibility
     * @param visible
     */
    setErrorMessageVisibility(visible: boolean): void;
}
