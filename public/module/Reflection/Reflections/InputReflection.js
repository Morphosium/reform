"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputReflection = void 0;
const Reflection_1 = require("./Reflection");
class InputReflection extends Reflection_1.Reflection {
    constructor(inputField, reflector, baseElement, parentSectionReflection) {
        super();
        this.reflector = reflector;
        this.parentSectionReflection = parentSectionReflection;
        this.value = "";
        this.validationErrors = {};
        this.value = inputField.initialValue;
        this.initialField = inputField;
        this.constructReflection(inputField, reflector, baseElement, parentSectionReflection);
    }
    constructReflection(inputField, reflector, baseElement, parentSectionReflection) {
        if (this._baseElement) {
            this._baseElement.innerHTML = "";
            this._baseElement.innerText = "";
        }
        let inputHtml, labelHtml, messageHtml, template = inputField.template || `
            <div>$label</div>
            <div>$input</div>
            <div>$message</div>`;
        //initializations
        if (inputField.inputType === "checkbox") {
            inputHtml = `<input reformjs-input type="checkbox"> <span reformjs-input-label>${inputField.label || inputField.name}</span>`;
            labelHtml = `<span></span>`;
        }
        else {
            inputHtml = `<input reformjs-input type="${inputField.inputType}">`;
            labelHtml = `<span reformjs-input-label>${inputField.label || inputField.name}</span>`;
        }
        messageHtml = `<span reformjs-message></span>`;
        const initBundle = template.replace("$label", labelHtml).replace("$input", inputHtml).replace("$message", messageHtml);
        const elementBase = document.createElement("div");
        elementBase.innerHTML = initBundle;
        const inputElement = elementBase.querySelector("[reformjs-input]"), messageElement = elementBase.querySelector("[reformjs-message]");
        this._inputElement = inputElement;
        this._messageElement = messageElement;
        this._baseElement = baseElement;
        if (this.initialField.placeholder) {
            inputElement.placeholder = this.initialField.placeholder;
        }
        if (this.initialField.initialValue)
            inputElement.value = this.initialField.initialValue;
        inputElement.addEventListener("input", event => {
            const inputElement = event.target;
            let value;
            if (inputField.inputType === "checkbox") {
                value = inputElement.checked;
            }
            else if (inputField.inputType === "number") {
                value = inputElement.valueAsNumber;
            }
            else {
                value = inputElement.value;
            }
            this.changeValue(value);
        });
        baseElement.appendChild(elementBase);
    }
    /**
     * Changes value of input, triggered by input
     * @param value the new value user typed
     * */
    changeValue(value) {
        this.rawValue = value;
        if (this.rawToFinalValue) {
            this.value = this.rawToFinalValue(value);
        }
        else
            this.value = value;
        this.parentSectionReflection.valueChanged();
        this.validate();
    }
    /**
     * Checks final value of input (after user typed and text is operated)
     * is valid or invalid. If invalid, validation error will be in @field validationError with error message and issue name.
     */
    validate() {
        var _a;
        this.validationErrors = {};
        for (let validationIndex = 0; validationIndex < ((_a = this.initialField.validations) === null || _a === void 0 ? void 0 : _a.length); validationIndex++) {
            const validation = this.initialField.validations[validationIndex];
            if (validation) {
                if (!validation.method(this.value)) {
                    this.validationErrors[validation.name] = { invalid: true, message: validation.message };
                }
            }
        }
        this.setValidationText();
    }
    /**
     * Updates error message element with first validation error if showing errors is enabled,
     * if there is. Othervise, element will be hidden.
     * That doesn't validate. It shows first validation error if there.
     */
    setValidationText() {
        //TODO: When reactive initial field changes is ok, update here for this
        const element = this._messageElement;
        const errorKeys = Object.keys(this.validationErrors);
        if ((errorKeys.length > 0) && this.showErrorMessage) {
            element.style.display = "block";
            element.textContent = this.validationErrors[errorKeys[0]].message;
        }
        else {
            element.style.display = "none";
            element.textContent = "";
        }
    }
    /**
     * Sets element externally, when section reflection set
     * @param newValue new value
     * @param emit If true, entire section notified value is changed. Defaultly True
     */
    setValueExternal(newValue, emit = true) {
        const inputElement = this._inputElement;
        const inputType = this.initialField.inputType;
        if (inputType === "checkbox") {
            inputElement.checked = newValue;
        }
        else if (inputType === "number" && parseInt(newValue)) {
            inputElement.valueAsNumber = parseInt(newValue);
        }
        else {
            inputElement.value = newValue;
        }
        if (emit)
            this.changeValue(newValue);
    }
    setErrorMessageVisibility(value) {
        this.validate();
        this.showErrorMessage = value;
        this.setValidationText();
    }
}
exports.InputReflection = InputReflection;
