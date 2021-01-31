import { InputType } from "../../Types/InputType";
import { IInputField } from "./IInputField";
import { IInputFieldBase } from "./IInputFieldBase";
import { InitialFied } from "../InitialField/index";
import { IInputValidation } from "../../../InputValidations/index";
import { ElementAttribute } from "../../Types/ElementAttribute";
export declare class InputField<V = string> extends InitialFied implements IInputField<V> {
    readonly isInput = true;
    inputType: InputType;
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
    template?: string;
    validations?: IInputValidation[];
    constructor(base: IInputFieldBase<V>);
}
