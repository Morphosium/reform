import { IElementField } from "../Definitions/index";
import { Reflection } from "./Reflection";
import { Reflector } from "./Reflector";

export class ElementReflection extends Reflection {
    constructor(public elementField: IElementField,
        public element: HTMLElement, reflector : Reflector, baseElement : HTMLElement) {
        super();

        element.className = elementField.class;
        if (elementField.attributes?.length > 0) {
            for (let attributeIndex = 0; attributeIndex < elementField.attributes.length; attributeIndex++) {
                const attribute = elementField.attributes[attributeIndex];
                element.setAttribute(attribute.key, attribute.value)
            }
        }
        for (const key in elementField.eventBindings || {}) {
            if (Object.prototype.hasOwnProperty.call(elementField.eventBindings, key)) {
                const methods = elementField.eventBindings[key];
                for (let methodIndex = 0; methodIndex < methods?.length; methodIndex++) {
                    const method = methods?.[methodIndex];
                    element.addEventListener(key, (event => { method(this, event) }));
                }
            }
        }

        baseElement.appendChild(element);
        reflector.expand(element, elementField.content);
    }
}