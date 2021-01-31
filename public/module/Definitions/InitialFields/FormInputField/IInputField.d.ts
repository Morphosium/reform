import { IInitialFied } from "../InitialField/index";
import { IInputFieldBase } from "./IInputFieldBase";
export interface IInputField<V = string> extends IInitialFied, IInputFieldBase<V> {
    isInput: boolean;
    name: string;
}
