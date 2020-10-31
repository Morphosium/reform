import { ElementField } from "../ElementField/ElementField";
import { InputType } from "../../Types/InputType";
import { IInputField } from "./IInputField";
import { IInputFieldInitial } from "./IInputFieldInitial";
import { ObjectFieldTransfer } from "../../Utils/ObjectFieldTransfer";
import { ManifestoField } from "../ManifestoField/index";

export class InputField<V extends any> extends ManifestoField implements IInputField<V> {
    readonly isInput = true;
    inputType : InputType;
    name: string;

    constructor(base : IInputFieldInitial<V>) {
        super(base);
        ObjectFieldTransfer(base, this);
    }

}