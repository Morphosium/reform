import { IElementField, IElementFieldBase, ElementField } from "./ElementField";
import { InputType } from "../Types/InputType";

export interface IInputFieldBase<V extends any> extends IElementFieldBase {
    inputType : InputType;
    name : string;
    label? : string;
    value?: V;
}

export interface IInputField<V extends any> extends IElementField, IInputFieldBase<V>{

}

export class InputField<V extends any> extends ElementField implements IInputField<V> {
    inputType: InputType;
    name: string;
    label?: string;


    constructor(base : IInputFieldBase<V>) {
        super(base);
        if (this.inputType === "textarea") {
            this.tag = "textarea"
        }
        else {
            this.tag = "input"
        }
        this.tag = "input"
    }

}