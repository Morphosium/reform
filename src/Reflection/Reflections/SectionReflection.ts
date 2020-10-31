import { ISectionField } from "../../Definitions/index";
import { Reflector } from "../Reflector";
import { Reflection } from "./Reflection";

export class SectionReflection extends Reflection {

    constructor(
        public sectionField: ISectionField,
        reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection
    ) {
        super();
        const inheritedSection = sectionField.root ? this : parentSectionReflection;
        reflector.expand(baseElement, sectionField, inheritedSection);
    }
}