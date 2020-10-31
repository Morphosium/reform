import { IInputField, IManifestoFieldInitial } from "../Definitions/index";
import { IManifesto } from "../Definitions/Manifesto";
import { IElementField } from "../Definitions/ManifestoField/ElementField/index";
import { IManifestoField } from "../Definitions/ManifestoField/ManifestoField/IManifestoField";
import { RootSectionField } from "../Definitions/ManifestoField/SectionField/index";
import { ElementReflection } from "./Reflections/ElementReflection";
import { InputReflection } from "./Reflections/InputReflection";

export class Reflector {
    baseElement: HTMLElement;


    constructor(public rootManifest: RootSectionField) {

    }

    expandThere(elementOrSelector: HTMLElement | string) {
        console.info(elementOrSelector)
        this.baseElement = null;
        if (typeof elementOrSelector === "string") {
            this.baseElement = document.querySelector(elementOrSelector);
        }
        else {
            this.baseElement = elementOrSelector;
        }
        if (this.baseElement)
            this.expand(this.baseElement, this.rootManifest);
    }

    expand(baseElement: HTMLElement, baseField: IManifestoField) {
        /** in section, no element changes, content expanded into same element
         * in element, new element will be created and contents expanded into them
         */
        const fields = baseField.content;
        if (baseField.content instanceof Array) {
            for (let index = 0; index < fields.length; index++) {
                const field = fields[index] as IManifestoField;
                console.info(field);
                if (field.isElement) {
                    const elementField = field as IElementField;
                    const elementReflection = new ElementReflection(elementField, this, baseElement);

                }
                if (field.isSection) {
                    this.expand(baseElement, field);
                }
                if (field.isInput) {
                    const inputReflection = new InputReflection(field as IInputField, this, baseElement)
                }
            }
        }

    }

}