import { ElementField } from "../ElementField/ElementField";
import { InputType } from "../../Types/InputType";
import { IInputField } from "./IInputField";
import { IInputFieldBase } from "./IInputFieldBase";
import { ObjectFieldTransfer } from "../../Utils/ObjectFieldTransfer";
import { InitialFied } from "../InitialField/index";

export class InputField<V extends any> extends InitialFied implements IInputField<V> {
    readonly isInput = true;
    inputType : InputType;
    name: string;

    constructor(base : IInputFieldBase<V>) {
        super(base);
        ObjectFieldTransfer(base, this);
    }

}