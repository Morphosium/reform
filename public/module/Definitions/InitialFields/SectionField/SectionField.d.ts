import { InitialFied } from "../InitialField/InitialField";
import { IInitialField } from "../InitialField/IInitialField";
import { ISectionFieldBase } from "./ISectionFieldInitial";
import { ISectionField } from "./ISectionField";
/**
 * Sections are represents object, array. In same time if there is provider, can be returned any specified value.
 * Sections is not fillable directly by user. This is a difference than @class InputField
 */
export declare class SectionField extends InitialFied implements ISectionField {
    readonly isSection = true;
    sectionName: string;
    content: IInitialField[];
    name: string;
    root: boolean;
    convertToFinalValue: (hamObject: {
        [key: string]: any;
    }) => any;
    constructor(base: ISectionFieldBase);
}
