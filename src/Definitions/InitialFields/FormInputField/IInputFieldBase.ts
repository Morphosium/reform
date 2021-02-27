import { IInputValidation } from "../../../InputValidations/IInputValidation";
import { ElementAttribute } from "../../Types/ElementAttribute";
import { InputType } from "../../Types/InputType";
import { IInitialFieldBase } from "../InitialField/index";



export interface IInputFieldBase<V = string> extends IInitialFieldBase {
   
    /**
     * Type of input, like as definition in HTML.
     * valid types are "text" , "textarea" , "number" , "checkbox" , "date", "time",
     * "datetime", "email".
     */
    inputType: InputType;

    /**
     * Name of input. same with value's name
     */
    name: string;

    /**
     * The title of input. If not provided, name will be shown as label
     */
    label?: string;

    /**
     * Startup value of input 
     * */
    initialValue?: V;

    /** If set  to true, 
     * not included on final value
     * */
    excludeOnFinalData?: boolean;

    /**
     * set disability of input (at startup)
     */
    disabled?: boolean;

    /**
     * Text shown in input as pale
     */
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
     * 
     * it will be defaultly following  if not provided 
     * ```
     *      <div>$label</div>
            <div>$input</div>
            <div>$message</div>
     * ```
     * after rendering. results will be like following
     * 
     * ```
     *       <div><span reformjs-input-label="">E-Mail</span></div>
     *       <div><input reformjs-input="" type="text"></div>
     *       <div><span reformjs-message=""></span></div></div>
     * ```
     * these elements styled by ```[reformjs-input]```, ```[reformjs-input-label]```, ```[reformjs-message]``` queries
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

    /**
     * Another value options 
     */
    optionValues?: V[];

    /**
     * If defined a method, option value content will be returned string.
     * otherwise, object converted to string like .toString() method
     */
    stringifyValueOption: (optionValue : V) => string;
}
