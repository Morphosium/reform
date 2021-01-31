import { IInputValidation } from "../../../InputValidations/IInputValidation";
import { ElementAttribute } from "../../Types/ElementAttribute";
import { InputType } from "../../Types/InputType";
import { IInitialFiedBase } from "../InitialField/index";
export interface IInputFieldBase<V = string> extends IInitialFiedBase {
    inputType: InputType;
    name: string;
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
    convertToFinalValue?: (rawValue: V | any) => V | any;
}
//# sourceMappingURL=IInputFieldBase.d.ts.map