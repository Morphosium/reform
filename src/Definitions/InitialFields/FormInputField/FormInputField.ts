import { ElementField } from "../ElementField/ElementField";
import { InputType } from "../../Types/InputType";
import { IInputField } from "./IInputField";
import { IInputFieldBase } from "./IInputFieldBase";
import { ObjectFieldTransfer } from "../../../Utils/ObjectFieldTransfer";
import { InitialFied } from "../InitialField/index";
import { IInputValidation } from "../../../InputValidations/index";
import { ElementAttribute } from "../../Types/ElementAttribute";

export class InputField<V = string> extends InitialFied implements IInputField<V> {
    readonly isInput = true;
    inputType : InputType;
    name: string;
    convertToFinalValue: (rawValue: V) => V;
    isElement?: boolean;
    isSection?: boolean;
    id?: string;
    label?: string;
    initialValue?: V;
    excludeOnFinalData?: boolean;
    disabled?: boolean;
    placeholder?: string;
    labelClass?: string;
    inputClass?: string;
    labelAttributes?: ElementAttribute[];
    inputAttributes?: ElementAttribute[];
    template: string;
    validations?: IInputValidation[];
    
    constructor(base : IInputFieldBase<V>) {
        super(base);
        ObjectFieldTransfer(base, this);
        this.convertToFinalValue = base.convertToFinalValue;
    }

}