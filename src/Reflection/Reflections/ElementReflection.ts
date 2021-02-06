import { IElementField } from "../../Definitions/index";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";
import { createElement } from "../../Utils/elementCreationUtil";
import { IReflection } from "../IReflection";

/**
 * ElementReflection class is a reflection class for arrange visual and structural 
 * arrangement
 */
export class ElementReflection implements IReflection {
    element: HTMLElement;
    subReflections: IReflection[];

    constructor(
        public initialField: IElementField,
        public reflector: Reflector,
        public baseParentalElement: HTMLElement,
        public parentSectionReflection: SectionReflection

    ) {
        this.constructReflection()
    }

    /**
     * Created an element and reflector extracts into created element if content is not string, etc... 
     * */
    constructReflection() {
        //Directly passing this makes it null. Anyone gets astonished
        const selfClass = this;
        this.initialField = this.initialField;
        const element = createElement(selfClass, this.reflector,this.initialField);
        this.baseParentalElement.appendChild(element);
        if (typeof this.initialField.content === "string") {
            element.textContent = this.initialField.content;
        }
        else {
            this.subReflections = this.reflector.expand(element, this.initialField, this.parentSectionReflection);
        }
        this.element = element;
    }

    /** @inheritDoc */
    getElementByName(name: string) {
        return this.subReflections?.find(
            //@ts-ignore
            a => a["name"] === name
        )
    }

    /** @inheritDoc */
    setErrorMessageVisibility(value: boolean): void {
        for (let reflectionIndex = 0; reflectionIndex < this.subReflections.length; reflectionIndex++) {
            const reflection = this.subReflections[reflectionIndex];
            reflection.setErrorMessageVisibility(value)
        }
    }
}