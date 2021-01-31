import { IInputValidation } from "../../../InputValidations/IInputValidation";
import { ElementAttribute } from "../../Types/ElementAttribute";
import { InputType } from "../../Types/InputType";
import { IInitialFiedBase } from "../InitialField/index";
export interface IInputFieldBase<V = string> extends IInitialFiedBase {
    /**Type of input, same as definition in HTML */
    inputType: InputType;
    name: string;
    /**The title of input */
    label?: string;
    /**Startup value of input */
    initialValue?: V;
    /** If set  to true, not included on final data*/
    excludeOnFinalData?: boolean;
    disabled?: boolean;
    placeholder?: string;
    /**Classes of label of input like "col-6 mr-0" etc. */
    labelClass?: string;
    /**Classes of input like "col-6 mr-0" etc. */
    inputClass?: string;
    /**Special HTML attributes of label. */
    labelAttributes?: ElementAttribute[];
    /**Special HTML attributes of input. */
    inputAttributes?: ElementAttribute[];
    /**
     * HTML template for ordering input elements
     * $label => means label element
     * $input  => means input element
     * $message =>  means error message or hint
     */
    template?: string;
    /**
     * If your input must be validated as intended, validations can be inserted.
     * Results can be fetched in reflection
     */
    validations?: IInputValidation[];
    /**
     * If user input must be trimmed or some characters must be removed  etc.
     * that callback can be used and you return your intended value
     */
    convertToFinalValue?: (rawValue: V | any) => V | any;
}
