import { IElementField } from "../ElementField/IElementField";
import { IInitialFied } from "../InitialField/index";
import { IInputFieldBase } from "./IInputFieldBase";


export interface IInputField<V extends any = string> extends IInitialFied, IInputFieldBase<V> {
    isInput: boolean;
}
