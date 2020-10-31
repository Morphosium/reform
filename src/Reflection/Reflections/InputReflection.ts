import { ElementField, IInputField } from "../../Definitions/index";
import { keyValue, KeyValue } from "../../Definitions/Types/KeyValue";
import { ElementReflection } from "./ElementReflection";
import { Reflection } from "./Reflection";
import { Reflector } from "../Reflector";
import { GenericReflection } from "./GenericReflection";
import { SectionReflection } from "./SectionReflection";

export class InputReflection extends GenericReflection {
    elementReflections: ElementReflection;

    constructor(public inputField: IInputField,
        reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection) {
        super();
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
                        attributes: [
                            keyValue("reformjs-input-field"),
                            keyValue("type", inputField.inputType),
                            inputField.initialValue ? keyValue("value", inputField.initialValue) : null,
                            inputField.placeholder ? keyValue("placeholder", inputField.placeholder) : null
                        ]
                    })
                ]
            },
            reflector, baseElement,parentSectionReflection
        );


        // baseElement.appendChild(element);
        // reflector.expand(element,elementField);
    }
}