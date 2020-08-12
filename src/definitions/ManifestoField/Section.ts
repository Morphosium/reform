import { IManifestoFieldBase, IManifestoField, ManifestoField } from "./ManifestoField";
import { FieldType } from "../Types/ManifestoFieldType";

export interface ISectionFieldBase extends IManifestoFieldBase {
    sectionName : string;
}

export interface ISectionField extends IManifestoField, ISectionFieldBase {

}

export class SectionField extends ManifestoField implements ISectionField {
    type: FieldType;
    sectionName: string;

    constructor(base : ISectionFieldBase) {
        super(base);
    }
}