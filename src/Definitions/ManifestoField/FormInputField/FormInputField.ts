import { ElementField } from "../ElementField/ElementField";
import { InputType } from "../../Types/InputType";
import { IInputField } from "./IInputField";
import { IInputFieldInitial } from "./IInputFieldInitial";
import { ObjectFieldTransfer } from "../../Utils/ObjectFieldTransfer";

export class InputField<V extends any> extends ElementField implements IInputField<V> {
    readonly isInput = true;
    inputType : InputType;
    name: string;
    label?: string;

    constructor(base : IInputFieldInitial<V>) {
        super(base);
        ObjectFieldTransfer(base, this);
        if (this.inputType === "textarea") {
            this.tag = "textarea"
        }
        else {
            this.tag = "input"
        }
        this.tag = "input"
        
    }

}