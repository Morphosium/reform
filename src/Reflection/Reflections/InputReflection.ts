import { ElementField, IInputField, ISectionField, ValidationErrorMap } from "../../Definitions/index";
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
    private inputElementReflection: ElementReflection;

    constructor(inputField: IInputField,
        public reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection
    ) {
        super();
        this.value = inputField.initialValue;
        this.initialField = inputField;
        this.constructReflection(inputField, reflector, baseElement, parentSectionReflection)
    }


    constructReflection(sectionField: IInputField, reflector: Reflector, baseElement: HTMLElement, parentSectionReflection: SectionReflection): void {
        const inputField = this.initialField;
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
                name: "input",
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
                    keyValue("reformjs-input"),
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
     * Changes value of input, triggered by input 
     * @param value the new value user typed
     * */
    private changeValue(value: string) {
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

    /**
     * Sets element externally, when section reflection set 
     * @param newValue new value
     * @param emit If true, entire section notified value is changed. Defaultly True
     */
    setValueExternal(newValue: any, emit = true) {
        const inputElement = this.elementReflections.element.querySelector("input[reformjs-input]") as HTMLInputElement;
        const inputType = this.initialField.inputType;
        if (inputType === "checkbox") {
            inputElement.checked = newValue;
        }
        else if (inputType === "number" && parseInt(newValue)) {
            inputElement.valueAsNumber = parseInt(newValue);
        }
        else {
            inputElement.value = newValue
        }
        if (emit) this.changeValue(newValue);
    }

    setErrorMessageVisibility(value: boolean): void {
        // TODO: FİLL METHOD throw new Error("Method not implemented.");
    }
}