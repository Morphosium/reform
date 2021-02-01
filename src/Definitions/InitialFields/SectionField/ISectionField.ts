import { IInitialField } from "../InitialField/IInitialField";
import { ISectionFieldBase } from "./index";

/**
 * Sections are represents object. In same time if there is provider, can be returned any specified value.
 * Sections is not fillable directly by user. This is a difference than @class InputField
 */
export interface ISectionField extends IInitialField, ISectionFieldBase {
    isSection: boolean;
    content: IInitialField[];
}
