import { ElementField, IInputField } from "../../Definitions/index";
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

    constructor(inputField: IInputField,
        reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection
    ) {
        super();
        this.value = inputField.initialValue;
        this.initialField = inputField;
        this.rawToFinalValue = this.initialField.convertToFinalValue;
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
            })
        ];
        if (this.initialField.inputType === "checkbox") {
            elementContent = elementContent.reverse();
        }
        this.elementReflections = new ElementReflection(
            {
                isElement: true,
                attributes: [keyValue("reformjs-input-area")],
                content: elementContent
            },
            reflector, baseElement, parentSectionReflection
        );
    }

    changeValue(value: string) {
        this.rawValue = value;
        if (this.rawToFinalValue) {
            this.value = this.rawToFinalValue(value);
        }
        else
            this.value = value;

        this.parentSectionReflection.valueChanged();
    }
}