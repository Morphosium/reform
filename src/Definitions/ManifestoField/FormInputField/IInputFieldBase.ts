import { InputType } from "../../Types/InputType";
import { IInitialFiedBase } from "../InitialField/index";
import { IInputValidation } from "./IInputValidation";


export interface IInputFieldBase<V extends any | string = string> extends IInitialFiedBase {
    inputType: InputType;
    name: string;
    label?: string;
    initialValue?: V;
    ghost?: boolean;
    disabled?: boolean;
    placeholder?: string;
    labelClass? : string;
    inputClass? : string;
    labelAttributes? : string;
    inputAttributes? : string;
    validations?: IInputValidation[];

}
