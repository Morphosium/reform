import { ElementField, IInputField } from "../../Definitions/index";
import { keyValue, KeyValue } from "../../Definitions/Types/KeyValue";
import { ElementReflection } from "./ElementReflection";
import { Reflection } from "./Reflection";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";

export class InputReflection extends Reflection {
    elementReflections: ElementReflection;
    value = "";
    initialField : IInputField;
    constructor(inputField: IInputField,
        reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection
    ) {
        super();
        this.value = inputField.initialValue;
        this.initialField = inputField;
        this.elementReflections = new ElementReflection(
            {
                isElement: true,
                attributes: [keyValue("reformjs-input-area")],
                content: [
                    new ElementField({
                        tag: "div",
                        content: inputField.label,
                        attributes: [
                            keyValue("reformjs-input-label")
                        ]
                    }),

                    new ElementField({
                        tag: "input",
                        eventBindings: {
                            "input": [
                                (reflection: Reflection, event: InputEvent) => {
                                  
                                    this.changeValue((event.target as HTMLInputElement).value);
                                }
                            ]
                        },
                        attributes: [
                            keyValue("reformjs-input-field"),
                            keyValue("type", inputField.inputType),
                            inputField.initialValue ? keyValue("value", inputField.initialValue) : null,
                            inputField.placeholder ? keyValue("placeholder", inputField.placeholder) : null
                        ]
                    })
                ]
            },
            reflector, baseElement, parentSectionReflection
        );
    }

    changeValue(value: string) {
        this.value = value;
        this.parentSectionReflection.valueChanged();
    }

    // getName() {
    //     this.inputField.
    // }

}