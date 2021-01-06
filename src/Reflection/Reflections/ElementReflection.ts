import { IElementField } from "../../Definitions/index";
import { Reflection } from "./Reflection";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";
import { createElement } from "../../Utils/createElement";

/**
 * ElementReflection class is a reflection class for arrange visual and structural 
 * arrangement
 */
export class ElementReflection extends Reflection {
    element: HTMLElement;
    subReflections: Reflection[];
    constructor(
        public elementField: IElementField,
        public reflector: Reflector,
        private baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection

    ) {
        super();
        this.constructReflection()
    }

    constructReflection() {
        this.initialField = this.elementField;
        const element = createElement(this.elementField, this.reflector);
        this.baseElement.appendChild(element);
        if (typeof this.elementField.content === "string") {
            element.textContent = this.elementField.content;
        }
        else {
            this.subReflections = this.reflector.expand(element, this.elementField, this.parentSectionReflection);
        }
        this.element = element;
    }

    getElementByName(name: string) {
        return this.subReflections?.find(
            //@ts-ignore
            a => a["name"] === name
        )
    }

    setErrorMessageVisibility(value: boolean): void {

    }
}