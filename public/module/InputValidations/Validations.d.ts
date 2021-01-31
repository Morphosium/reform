import { IInputValidation } from "./IInputValidation";
export declare class EmailValidator implements IInputValidation {
    /**Regex from angular source */
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
/**
 * Validates value greater than input or equals input
 */
export declare class MinimumNumber implements IInputValidation {
    minimumValue: number;
    message: string;
    readonly name = "min";
    constructor(minimumValue: number);
    method(value: string): boolean;
}
/**
 * Validates value less than input or equals input
 */
export declare class MaximumNumber implements IInputValidation {
    maximumValue: number;
    readonly name = "min";
    message: string;
    constructor(maximumValue: number);
    method(value: string): boolean;
}
/**
 * Validates value greater than input
 */
export declare class NumberGreaterThan implements IInputValidation {
    minimumValue: number;
    message: string;
    readonly name = "min";
    constructor(minimumValue: number);
    method(value: string): boolean;
}
/**
 * Validates value less than input
 */
export declare class NumberLessThan implements IInputValidation {
    maximumValue: number;
    readonly name = "min";
    message: string;
    constructor(maximumValue: number);
    method(value: string): boolean;
}
