import { IInputValidation } from "./IInputValidation";
export declare class EmailValidator implements IInputValidation {
    readonly regex: RegExp;
    message: string;
    readonly name = "email";
    method(value: string): boolean;
}
export declare class NotEmpty implements IInputValidation {
    readonly name = "notEmpty";
    message: string;
    method(value: string): boolean;
}
export declare class NeedToBeTrue implements IInputValidation {
    readonly name = "notEmpty";
    message: string;
    method(value: string): boolean;
}
export declare class MinimumNumber implements IInputValidation {
    minimumValue: number;
    message: string;
    readonly name = "min";
    constructor(minimumValue: number);
    method(value: string): boolean;
}
export declare class MaximumNumber implements IInputValidation {
    maximumValue: number;
    readonly name = "min";
    message: string;
    constructor(maximumValue: number);
    method(value: string): boolean;
}
export declare class NumberGreaterThan implements IInputValidation {
    minimumValue: number;
    message: string;
    readonly name = "min";
    constructor(minimumValue: number);
    method(value: string): boolean;
}
export declare class NumberLessThan implements IInputValidation {
    maximumValue: number;
    readonly name = "min";
    message: string;
    constructor(maximumValue: number);
    method(value: string): boolean;
}
//# sourceMappingURL=Validations.d.ts.map