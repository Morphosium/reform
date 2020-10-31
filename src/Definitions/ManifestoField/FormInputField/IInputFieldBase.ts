import { InputType } from "../../Types/InputType";
import { IInitialFiedBase } from "../InitialField/index";


export interface IInputFieldBase<V extends any | string = string> extends IInitialFiedBase {
    inputType: InputType;
    name: string;
    label?: string;
    initialValue?: V;
    placeholder?: string;
    labelClass? : string;
    inputClass? : string;
    labelAttributes? : string;
    inputAttributes? : string;
}
