import { ManifestoField } from "../ManifestoField/ManifestoField";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { ISectionFieldBase } from "./ISectionFieldBase";
import { ISectionField } from "./ISectionField";

export class SectionField extends ManifestoField implements ISectionField {
    readonly isSection = true;
    sectionName: string;
    content: IManifestoField[];

    constructor(base : ISectionFieldBase) {
        super(base);
    }
    
}

