import { IElementFieldInitial } from "../ElementField/IElementFieldInitial";
import { InputType } from "../../Types/InputType";
import { IManifestoFieldInitial } from "../ManifestoField/index";


export interface IInputFieldInitial<V extends any | string = string> extends IManifestoFieldInitial {
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
