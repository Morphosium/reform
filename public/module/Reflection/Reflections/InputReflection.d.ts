import { IInputField, ValidationErrorMap } from "../../Definitions/index";
import { Reflection } from "./Reflection";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";
export declare class InputReflection extends Reflection {
    reflector: Reflector;
    parentSectionReflection: SectionReflection;
    value: string;
    initialField: IInputField;
    rawValue: string;
    rawToFinalValue: (rawValue: string) => string;
    validationErrors: ValidationErrorMap;
    errorMessageFieldId: string;
    private inputElementReflection;
    showErrorMessage: boolean;
    private _messageElement;
    private _inputElement;
    private _baseElement;
    constructor(inputField: IInputField, reflector: Reflector, baseElement: HTMLElement, parentSectionReflection: SectionReflection);
    constructReflection(inputField: IInputField, reflector: Reflector, baseElement: HTMLElement, parentSectionReflection: SectionReflection): void;
    /**
     * Changes value of input, triggered by input
     * @param value the new value user typed
     * */
    private changeValue;
    /**
     * Checks final value of input (after user typed and text is operated)
     * is valid or invalid. If invalid, validation error will be in @field validationError with error message and issue name.
     */
    validate(): void;
    /**
     * Updates error message element with first validation error if showing errors is enabled,
     * if there is. Othervise, element will be hidden.
     * That doesn't validate. It shows first validation error if there.
     */
    setValidationText(): void;
    /**
     * Sets element externally, when section reflection set
     * @param newValue new value
     * @param emit If true, entire section notified value is changed. Defaultly True
     */
    setValueExternal(newValue: any, emit?: boolean): void;
    setErrorMessageVisibility(value: boolean): void;
}
