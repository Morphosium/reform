import { InitialFied } from "../InitialField/InitialField";
import { IInitialField } from "../InitialField/IInitialField";
import { ISectionFieldBase } from "./ISectionFieldInitial";
import { ISectionField } from "./ISectionField";
import { ObjectFieldTransfer } from "../../../Utils/objectFieldTransfer";

/**
 * Sections are represents object, array. In same time if there is provider, can be returned any specified value.
 * Sections is not fillable directly by user. This is a difference than @class InputField
 */
export class SectionField extends InitialFied implements ISectionField {
    /** @inheritDoc */
    readonly isSection = true;
    /** @inheritDoc */
    sectionName: string;
    /** @inheritDoc */
    content: IInitialField[];
    /** @inheritDoc */
    name: string;
    /** @inheritDoc */
    root = false;
    /** @inheritDoc */
    convertToFinalValue: (hamObject: { [key: string]: any; }) => any;

    constructor(base: ISectionFieldBase) {
        super(base);
        ObjectFieldTransfer(base, this);
        this.convertToFinalValue = base.convertToFinalValue;
    }


}

