import { InitialFied } from "../InitialField/InitialField";
import { IInitialFied } from "../InitialField/IInitialField";
import { ISectionFieldBase } from "./ISectionFieldInitial";
import { ISectionField } from "./ISectionField";
export declare class SectionField extends InitialFied implements ISectionField {
    readonly isSection = true;
    sectionName: string;
    content: IInitialFied[];
    name: string;
    root: boolean;
    convertToFinalValue: (hamObject: {
        [key: string]: any;
    }) => any;
    constructor(base: ISectionFieldBase);
}
//# sourceMappingURL=SectionField.d.ts.map