import { IInputField, ValidationErrorMap } from "../../Definitions/index";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";
import { IReflection } from "../IReflection";
export declare class InputReflection implements IReflection {
    initialField: IInputField;
    reflector: Reflector;
    baseParentalElement: HTMLElement;
    parentSectionReflection: SectionReflection;
    value: string;
    rawValue: string;
    rawToFinalValue: (rawValue: string) => string;
    validationErrors: ValidationErrorMap;
    errorMessageFieldId: string;
    private inputElementReflection;
    showErrorMessage: boolean;
    private _messageElement;
    private _inputElement;
    private _baseElement;
    constructor(initialField: IInputField, reflector: Reflector, baseParentalElement: HTMLElement, parentSectionReflection: SectionReflection);
    /** @inheritDoc */
    constructReflection(): void;
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
    /** @inheritDoc */
    setErrorMessageVisibility(value: boolean): void;
}
