import { ISectionField, ISectionFieldBase } from "../../Definitions/index";
import { Subject } from "../../Utils/Reactivity/Base/Subject.class";
import { Reflector } from "../Reflector";
import { InputReflection } from "./InputReflection";
import { Reflection } from "./Reflection";

export class SectionReflection extends Reflection {
    readonly subReflections: Reflection[] = [];
    initialField: ISectionFieldBase;
    onValueChange: Subject<void>
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
        this.rawValue = this.collectSectionRawData();
        if (this.parentSectionReflection) {
            this.parentSectionReflection.valueChanged();
        }
        else {
            this.onValueChange.notify()
        }

    }

    getValue(mode : "final" | "raw", showGhost = false) {
        return this.collectSectionRawData()
    }


    private dataCollection(mode : "final" | "raw", callback: (incomeValue: any, name?: string) => any) {
        const usefulReflections = this.subReflections.filter(a => a.initialField.isInput || a.initialField.isSection);
        for (let reflectionIndex = 0; reflectionIndex < usefulReflections.length; reflectionIndex++) {
            const reflection = usefulReflections[reflectionIndex];
            if (reflection.initialField.isInput) {
                const inputReflection = reflection as InputReflection;
                if (inputReflection.value)
                    callback(inputReflection.value, inputReflection.initialField.name)
            }
            else if (reflection.initialField.isSection) {
                const sectionReflection = reflection as SectionReflection;
                const value = sectionReflection.collectSectionRawData();
                if (value && Object.keys(value).length > 0)
                    callback(value, sectionReflection.initialField.name)
            }
        }
    }

    collectSectionRawData() {
        if (this.initialField.arraySectionRaw) {
            const array: any[] = [];
            this.dataCollection("raw",(value) => {
                array.push(value)
            });
            return array;
        }
        else {
            const objectMap: { [key: string]: any } = {};
            this.dataCollection("raw",(value, name) => {
                objectMap[name] = value;
            });
            return objectMap;
        }

    }
}