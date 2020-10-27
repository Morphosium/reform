import { IElementField } from "../ElementField/IElementField";
import { IInputFieldBase } from "./IInputFieldBase";


export interface IInputField<V extends any> extends IElementField, IInputFieldBase<V> {
}
