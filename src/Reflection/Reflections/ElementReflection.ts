import { IElementField } from "../../Definitions/index";
import { Reflection } from "./Reflection";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";

export class ElementReflection extends Reflection {
    element: HTMLElement;
    constructor(
        public elementField: IElementField,
        reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection : SectionReflection
        
    ) {
        super();
        const element = document.createElement(elementField.tag || "div");
        this.element = element;
        if (elementField.class)
            element.className = elementField.class;
        const elementFieldAttributes = elementField.attributes?.filter(a => a != null);
        if (elementFieldAttributes?.length > 0) {
            for (let attributeIndex = 0; attributeIndex < elementFieldAttributes.length; attributeIndex++) {
                const attribute = elementFieldAttributes[attributeIndex];
                if ((attribute.key != "class" && attribute.key != "style") || attribute.value) {
                    element.setAttribute(attribute.key, attribute.value || "");
                }

            }
        }

        for (const key in elementField.eventBindings || {}) {
            if (Object.prototype.hasOwnProperty.call(elementField.eventBindings, key)) {
                const methods = elementField.eventBindings[key]?.filter(a => a != null);
                for (let methodIndex = 0; methodIndex < methods?.length; methodIndex++) {
                    const method = methods?.[methodIndex];
                    element.addEventListener(key, (event => { method(this, event) }));
                }
            }
        }
        baseElement.appendChild(element);
        if (typeof elementField.content === "string") {
            element.textContent = elementField.content;
        }
        else {
            reflector.expand(element, elementField,parentSectionReflection);
        }
    }
}