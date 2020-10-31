import { IInputField, IInitialFiedBase } from "../Definitions/index";
import { IElementField } from "../Definitions/ManifestoField/ElementField/index";
import { IInitialFied } from "../Definitions/ManifestoField/InitialField/IInitialField";
import { ISectionField, RootSectionField } from "../Definitions/ManifestoField/SectionField/index";
import { ElementReflection } from "./Reflections/ElementReflection";
import { InputReflection } from "./Reflections/InputReflection";
import { SectionReflection } from "./Reflections/SectionReflection";

export class Reflector {
    baseElement: HTMLElement;
    rootSectionReflection: SectionReflection;


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
        if (this.baseElement) {
            // this.expand(this.baseElement, this.rootManifest);
            this.rootSectionReflection = new SectionReflection(this.rootManifest, this, this.baseElement, null)
        }
    }

    expand(baseElement: HTMLElement, parentField: IInitialFied, parentSectionReflection? : SectionReflection) {
        /** in section, no element changes, content expanded into same element
         * in element, new element will be created and contents expanded into them
         */
        const fields = parentField.content;
        if (fields instanceof Array) {
            for (let index = 0; index < fields.length; index++) {
                const field = fields[index] as IInitialFied;
                console.info(field);
                if (field.isSection) {
                    const sectionReflection = new SectionReflection(field as ISectionField, this, baseElement, null)
                }
                if (field.isElement) {
                    const elementField = field as IElementField;
                    const elementReflection = new ElementReflection(elementField, this, baseElement, parentSectionReflection);
                }
          
                if (field.isInput) {
                    const inputReflection = new InputReflection(field as IInputField, this, baseElement, parentSectionReflection)
                }
            }
        }

    }

}