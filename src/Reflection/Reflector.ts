import { IManifesto } from "../Definitions/Manifesto";
import { IElementField } from "../Definitions/ManifestoField/ElementField/index";
import { IManifestoField } from "../Definitions/ManifestoField/ManifestoField/IManifestoField";
import { RootSectionField } from "../Definitions/ManifestoField/SectionField/index";
import { ElementReflection } from "./ElementReflection";

export class Reflector {
    baseElement: HTMLElement;

    constructor(public rootManifest: RootSectionField) {

    }

    expandThere(elementOrSelector: HTMLElement | string) {
        this.baseElement = null;
        if (typeof elementOrSelector === "string") {
            this.baseElement = document.querySelector(elementOrSelector);
        }
        else {
            this.baseElement = elementOrSelector;
        }
        if (this.baseElement)
            this.expand(this.baseElement, this.rootManifest.content);
    }

    expand(baseElement: HTMLElement, fields: Array<IManifestoField>) {
        /** in section, no element changes, content expanded into same element
         * in element, new element will be created and contents expanded into them
         */
        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            if (field.isElement) {
                const elementField = field as IElementField;
                const element = document.createElement(elementField.tag || "div");
                const elementReflection = new ElementReflection();
                elementReflection.element = element;
                elementReflection.manifest = elementField;

                element.className = elementField.class;
                if (elementField.attributes?.length > 0) {
                    for (let attributeIndex = 0; attributeIndex < elementField.attributes.length; attributeIndex++) {
                        const attribute = elementField.attributes[attributeIndex];
                        element.setAttribute(attribute.key, attribute.value)
                    }
                }
                console.info(elementField.eventBindings)
                for (const key in elementField.eventBindings || {}) {
                    if (Object.prototype.hasOwnProperty.call(elementField.eventBindings, key)) {
                        const methods = elementField.eventBindings[key];
                        for (let methodIndex = 0; methodIndex < methods?.length; methodIndex++) {
                            const method = methods?.[methodIndex];
                            element.addEventListener(key, (event => { method(elementReflection, event) }));
                        }
                    }
                }
                baseElement.appendChild(element);
                this.expand(element, elementField.content);
            }
            if (field.isSection) {
                this.expand(baseElement, field.content);
            }
        }
    }

}