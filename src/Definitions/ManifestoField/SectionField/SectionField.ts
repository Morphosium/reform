import { InitialFied } from "../InitialField/InitialField";
import { IInitialFied } from "../InitialField/IInitialField";
import { ISectionFieldBase } from "./ISectionFieldInitial";
import { ISectionField } from "./ISectionField";
import { ObjectFieldTransfer } from "../../Utils/ObjectFieldTransfer";

/**
 * Sections are represents object, array. In same time if there is provider, can be returned any specified value.
 * Sections is not fillable directly by user. This is a difference than @class InputField
 */
export class SectionField extends InitialFied implements ISectionField {
    readonly isSection = true;
    sectionName: string;
    content: IInitialFied[];
    name: string;
    root = false;

    constructor(base : ISectionFieldBase) {
        super(base);
        ObjectFieldTransfer(base, this);
    }

    
}

