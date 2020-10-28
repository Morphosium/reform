import { IElementFieldInitial } from "../ElementField/IElementFieldInitial";
import { InputType } from "../../Types/InputType";


export interface IInputFieldInitial<V extends any | string> extends IElementFieldInitial {
    inputType: InputType;
    name: string;
    label?: string;
    value?: V;
}
