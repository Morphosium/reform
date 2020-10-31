import { IElementField } from "../../Definitions/index";
import { Reflection } from "./Reflection";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";
import { createElement } from "../../Definitions/Utils/createElement";

/**
 * ElementReflection class is a reflection class for arrange visual and structural 
 * arrangement
 */
export class ElementReflection extends Reflection {
    element: HTMLElement;
    constructor(
        public elementField: IElementField,
        reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection

    ) {
        super();
        this.initialField = elementField;
        const element = createElement(elementField)
        baseElement.appendChild(element);
        if (typeof elementField.content === "string") {
            element.textContent = elementField.content;
        }
        else {
            reflector.expand(element, elementField, parentSectionReflection);
        }
    }
}