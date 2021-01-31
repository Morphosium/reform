import { IInitialFied } from "../Definitions/InitialFields/InitialField/IInitialField";
import { RootSectionField } from "../Definitions/InitialFields/SectionField/index";
import { Subject } from "../Utils/Reactivity/Base/Subject.class";
import { Reflection } from "./Reflections/Reflection";
import { SectionReflection } from "./Reflections/SectionReflection";
export declare class Reflector {
    rootManifest: RootSectionField;
    baseElement: HTMLElement;
    rootSectionReflection: SectionReflection;
    idMap: {
        [reflectionId: string]: Reflection;
    };
    onValueChange: Subject<void>;
    constructor(rootManifest: RootSectionField);
    expandThere(elementOrSelector: HTMLElement | string): void;
    expand(baseElement: HTMLElement, initialField: IInitialFied, parentSectionReflection?: SectionReflection): Reflection[];
    findReflectionById(id: string): Reflection | null;
    getValue(final?: boolean): any;
    patchValue(data: {
        [key: string]: string;
    }, isIntegrityImportant?: boolean): void;
    collectValidationErrors(): {
        [key: string]: import("../Definitions").ValidationErrorMap;
    };
    setErrorMessageVisibility(visible: boolean): void;
}
//# sourceMappingURL=Reflector.d.ts.map