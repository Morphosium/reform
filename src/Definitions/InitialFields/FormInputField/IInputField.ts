import { IElementField } from "../ElementField/IElementField";
import { IInitialField } from "../InitialField/index";
import { IInputFieldBase } from "./IInputFieldBase";


export interface IInputField<V = string> extends IInitialField, IInputFieldBase<V> {
    isInput: boolean;
    name: string;
}
