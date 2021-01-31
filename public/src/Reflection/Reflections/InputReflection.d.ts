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
    private changeValue;
    validate(): void;
    setValidationText(): void;
    setValueExternal(newValue: any, emit?: boolean): void;
    setErrorMessageVisibility(value: boolean): void;
}
//# sourceMappingURL=InputReflection.d.ts.map