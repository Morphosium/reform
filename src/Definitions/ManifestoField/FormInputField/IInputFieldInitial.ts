import { IElementFieldInitial } from "../ElementField/IElementFieldInitial";
import { InputType } from "../../Types/InputType";
import { IManifestoFieldInitial } from "../ManifestoField/index";


export interface IInputFieldInitial<V extends any | string> extends IManifestoFieldInitial {
    inputType: InputType;
    name: string;
    label?: string;
    value?: V;
    labelClass? : string;
    inputClass? : string;
    labelAttributes? : string;
    inputAttributes? : string;
}
