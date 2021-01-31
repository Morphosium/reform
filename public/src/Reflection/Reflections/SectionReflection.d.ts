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
    private dataCollection;
    convertDataByMode(data: any, mode: "final" | "raw"): any;
    collectSectionData(mode?: "final" | "raw"): any;
    collectValidationErrors(): {
        [key: string]: ValidationErrorMap;
    };
    setValue(data: any): void;
    findSubReflectionByName(key: string): Reflection;
    setErrorMessageVisibility(value: boolean): void;
}
//# sourceMappingURL=SectionReflection.d.ts.map