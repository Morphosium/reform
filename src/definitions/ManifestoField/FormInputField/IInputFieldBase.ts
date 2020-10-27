import { IElementFieldBase } from "../ElementField/IElementFieldBase";
import { InputType } from "../../Types/InputType";


export interface IInputFieldBase<V extends any | string> extends IElementFieldBase {
    inputType: InputType;
    name: string;
    label?: string;
    value?: V;
}
