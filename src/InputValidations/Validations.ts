import { IInputValidation } from "./IInputValidation";

export class EmailValidator implements IInputValidation {
    /**Regex from angular source */
    readonly regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    message = "Please enter valid email address";
    readonly name = "email"
    method(value: string): boolean {
        return this.regex.test(value || "")
    }
}

export class NotEmpty implements IInputValidation {
    readonly name = "notEmpty";
    message = "Please don't leave this area empty ";
    method(value: string): boolean {
        return (value != null) && (value.trim() != "");
    }
}


export class NeedToBeTrue implements IInputValidation {
    readonly name = "notEmpty";
    message = "Please don't leave this area empty ";
    method(value: string): boolean {
        if (value) return true;
        else return false;
    }
}


/**
 * Validates value greater than input or equals input
 */
export class MinimumNumber implements IInputValidation {
    message: string;
    readonly name = "min";

    constructor(public minimumValue: number) {
        this.message = "Value is need to be greater or equal than " + minimumValue;
    }

    method(value: string): boolean {
        return (parseFloat(value) >= this.minimumValue)
    }
}
/**
 * Validates value less than input or equals input
 */
export class MaximumNumber implements IInputValidation {
    readonly name = "min";
    message = "";
    constructor(public maximumValue: number) {
        this.message = "Value is need to be less or equal than " + maximumValue;
    }

    method(value: string): boolean {
        return (parseFloat(value) <= this.maximumValue)
    }
}

/**
 * Validates value greater than input
 */
export class NumberGreaterThan implements IInputValidation {
    message: string;
    readonly name = "min";

    constructor(public minimumValue: number) {
        this.message = "Value is need to be greater than " + minimumValue;
    }

    method(value: string): boolean {
        return (parseFloat(value) > this.minimumValue)
    }
}

/**
 * Validates value less than input
 */
export class NumberLessThan implements IInputValidation {
    readonly name = "min";
    message = "";
    constructor(public maximumValue: number) {
        this.message = "Value is need to be less than " + maximumValue;
    }

    method(value: string): boolean {
        return (parseFloat(value) < this.maximumValue)
    }
}
