import { IManifesto } from "../definitions/Manifesto";
import { IElementField } from "../definitions/ManifestoField/ElementField";
import { IManifestoField } from "../definitions/ManifestoField/ManifestoField/IManifestoField";
import { RootSectionField } from "../definitions/ManifestoField/SectionField";

export class Reflection {
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
                const element = document.createElement(elementField.tag);
                element.className = elementField.class;
                if (elementField.attributes?.length > 0) {
                    for (let attributeIndex = 0; attributeIndex < elementField.attributes.length; attributeIndex++) {
                        const attribute = elementField.attributes[attributeIndex];
                        element.setAttribute(attribute.key, attribute.value)
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