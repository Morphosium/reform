import { IElementField } from "../ElementField/IElementField";
import { IInputFieldInitial } from "./IInputFieldInitial";


export interface IInputField<V extends any> extends IElementField, IInputFieldInitial<V> {
    isInput: boolean;
}
