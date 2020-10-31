import { ISectionField, ISectionFieldBase } from "../../Definitions/index";
import { Subject } from "../../Definitions/Utils/Reactivity/Base/Subject.class";
import { Reflector } from "../Reflector";
import { InputReflection } from "./InputReflection";
import { Reflection } from "./Reflection";

export class SectionReflection extends Reflection {
    readonly subReflections: Reflection[] = [];
    initialField: ISectionFieldBase;
    onValueChange : Subject
    rawValue: { [key: string]: any; };
    constructor(
        sectionField: ISectionField,
        reflector: Reflector,
        baseElement: HTMLElement,
        public parentSectionReflection: SectionReflection
    ) {
        super();
        this.onValueChange = new Subject();
        this.initialField = sectionField;
        const inheritedSection = sectionField.root ? this : parentSectionReflection;
        reflector.expand(baseElement, sectionField, this);
    }

    valueChanged() {
        this.rawValue = this.collectSectionRaw();
        if (this.parentSectionReflection) {
            this.parentSectionReflection.valueChanged();
        }
        else {
            this.onValueChange.notify(this.rawValue)

        }

    }

    collectSectionRaw() {
        const objectMap: { [key: string]: any } = {};
        const usefulReflections = this.subReflections.filter(a => a.initialField.isInput || a.initialField.isSection);
        
        for (let reflectionIndex = 0; reflectionIndex < usefulReflections.length; reflectionIndex++) {
            const reflection = usefulReflections[reflectionIndex];
            if (reflection.initialField.isInput) {
                const inputReflection = reflection as InputReflection;
                if (inputReflection.value)
                    objectMap[inputReflection.initialField.name] = inputReflection.value;
            }
            else if (reflection.initialField.isSection) {
                const sectionReflection = reflection as SectionReflection;
                const value = sectionReflection.collectSectionRaw();
                if (value && Object.keys(value).length > 0)
                    objectMap[sectionReflection.initialField.name] = value;
            }
        }
        return objectMap;
    }
}