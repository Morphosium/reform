import { ElementField, IInputField, ValidationErrorMap } from "../../Definitions/index";
import { keyValue, KeyValue } from "../../Definitions/Types/KeyValue";
import { ElementReflection } from "./ElementReflection";
import { Reflection } from "./Reflection";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";

export class InputReflection extends Reflection {
    elementReflections: ElementReflection;
    value = "";
    initialField: IInputField;
    rawValue: string;
    rawToFinalValue: (rawValue: string) => string;
    validationErrors: ValidationErrorMap;
    errorMessageFieldId: string;

    constructor(inputField: IInputField,
        public reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection
    ) {
        super();
        this.value = inputField.initialValue;
        this.initialField = inputField;
        this.rawToFinalValue = this.initialField.convertToFinalValue;
        this.errorMessageFieldId = this.initialField.name.replace(/\s/g, "-") + "-error-message-" + Math.random().toString(36).substring(7);
        
        let elementContent = [
            new ElementField({
                tag: this.initialField.inputType === "checkbox" ? "span" : "div",
                content: inputField.label,
                attributes: [
                    keyValue("reformjs-input-label")
                ]
            }),
            new ElementField({
                tag: "input",
                eventBindings: {
                    "input": [
                        (reflection: ElementReflection, event: InputEvent) => {
                            const inputElement = event.target as HTMLInputElement;
                            let value: any;
                            if (inputField.inputType === "checkbox") {
                                value = inputElement.checked
                            }
                            else if (inputField.inputType === "number") {
                                value = inputElement.valueAsNumber
                            }
                            else {
                                value = inputElement.value
                            }
                            this.changeValue(value);
                        }
                    ]
                },
                attributes: [
                    keyValue("reformjs-input-field"),
                    keyValue("type", inputField.inputType),
                    inputField.initialValue ? keyValue("value", inputField.initialValue) : null,
                    inputField.placeholder ? keyValue("placeholder", inputField.placeholder) : null
                ],
                class: inputField.inputClass
            }),
        ];

        if (this.initialField.inputType === "checkbox") {
            elementContent = elementContent.reverse();
        }
        elementContent.push(
            new ElementField({
                tag: "div",
                attributes: [{ key: "style", value: "display; none" }],
                id: this.errorMessageFieldId
            })
        )
        this.elementReflections = new ElementReflection(
            {
                isElement: true,
                attributes: [keyValue("reformjs-input-area")],
                content: elementContent
            },
            reflector, baseElement, parentSectionReflection
        );
    }

    /**
     * Changes value of input 
     * @param value the new value user typed
     * */
    changeValue(value: string) {
        this.rawValue = value;
        if (this.rawToFinalValue) {
            this.value = this.rawToFinalValue(value);
        }
        else
            this.value = value;

        this.parentSectionReflection.valueChanged();
        this.validate()
    }

    /**
     * Checks final value of input (after user typed and text is operated)
     * is valid or invalid. If invalid, validation error will be in @field validationError with error message and issue name.
     */
    validate() {
        this.validationErrors = {};
        for (let validationIndex = 0; validationIndex < this.initialField.validations?.length; validationIndex++) {
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
     * Updates error message element with first validation error,
     * if there is. Othervise, element will be hidden 
     */
    setValidationText() {
        //TODO: When reactive initial field changes is ok, update here for this
        const element = (this.reflector.findReflectionById(this.errorMessageFieldId) as ElementReflection).element;
        const errorKeys = Object.keys(this.validationErrors);
        if (errorKeys.length > 0) {
            element.style.display = "block";
            element.textContent = this.validationErrors[errorKeys[0]].message;
        }
        else {
            element.style.display = "none";
            element.textContent = "";
        }
    }
}