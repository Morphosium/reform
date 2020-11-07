import { Reflector } from "../../Reflection/Reflector";
import { IElementField } from "../ManifestoField/index";

/**
 * Creates and returns a HTML Element by Element initial field
 * @param elementField A Element field instance for binding attributes and events and etc
 */
export function createElement(elementField: IElementField, reflector : Reflector): HTMLElement {
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
                element.addEventListener(key, (event => { method(this, event, reflector) }));
            }
        }
    }
    return element;
}