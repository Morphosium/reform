import { IElementField, IElementFieldBase } from "./ElementField";
import { InputType } from "../Types/InputType";

export interface IInputFieldBase extends IElementFieldBase {
    inputType : InputType;
    name : string;
    label? : string;
}

export interface IInputField extends IElementField, IInputFieldBase{

}