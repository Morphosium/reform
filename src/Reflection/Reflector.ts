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
                const elementReflection = new ElementReflection(elementField, element, this, baseElement);
               
            }
            if (field.isSection) {
                this.expand(baseElement, field.content);
            }
        }
    }

}