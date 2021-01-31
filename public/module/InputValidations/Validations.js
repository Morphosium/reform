(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NumberLessThan = exports.NumberGreaterThan = exports.MaximumNumber = exports.MinimumNumber = exports.NeedToBeTrue = exports.NotEmpty = exports.EmailValidator = void 0;
    class EmailValidator {
        constructor() {
            /**Regex from angular source */
            this.regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            this.message = "Please enter valid email address";
            this.name = "email";
        }
        method(value) {
            return this.regex.test(value || "");
        }
    }
    exports.EmailValidator = EmailValidator;
    class NotEmpty {
        constructor() {
            this.name = "notEmpty";
            this.message = "Please don't leave this area empty ";
        }
        method(value) {
            return (value != null) && (value.trim() != "");
        }
    }
    exports.NotEmpty = NotEmpty;
    class NeedToBeTrue {
        constructor() {
            this.name = "notEmpty";
            this.message = "Please don't leave this area empty ";
        }
        method(value) {
            if (value)
                return true;
            else
                return false;
        }
    }
    exports.NeedToBeTrue = NeedToBeTrue;
    /**
     * Validates value greater than input or equals input
     */
    class MinimumNumber {
        constructor(minimumValue) {
            this.minimumValue = minimumValue;
            this.name = "min";
            this.message = "Value is need to be greater or equal than " + minimumValue;
        }
        method(value) {
            return (parseFloat(value) >= this.minimumValue);
        }
    }
    exports.MinimumNumber = MinimumNumber;
    /**
     * Validates value less than input or equals input
     */
    class MaximumNumber {
        constructor(maximumValue) {
            this.maximumValue = maximumValue;
            this.name = "min";
            this.message = "";
            this.message = "Value is need to be less or equal than " + maximumValue;
        }
        method(value) {
            return (parseFloat(value) <= this.maximumValue);
        }
    }
    exports.MaximumNumber = MaximumNumber;
    /**
     * Validates value greater than input
     */
    class NumberGreaterThan {
        constructor(minimumValue) {
            this.minimumValue = minimumValue;
            this.name = "min";
            this.message = "Value is need to be greater than " + minimumValue;
        }
        method(value) {
            return (parseFloat(value) > this.minimumValue);
        }
    }
    exports.NumberGreaterThan = NumberGreaterThan;
    /**
     * Validates value less than input
     */
    class NumberLessThan {
        constructor(maximumValue) {
            this.maximumValue = maximumValue;
            this.name = "min";
            this.message = "";
            this.message = "Value is need to be less than " + maximumValue;
        }
        method(value) {
            return (parseFloat(value) < this.maximumValue);
        }
    }
    exports.NumberLessThan = NumberLessThan;
});
