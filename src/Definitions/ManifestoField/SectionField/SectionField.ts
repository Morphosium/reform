import { ManifestoField } from "../ManifestoField/ManifestoField";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { ISectionFieldInitial } from "./ISectionFieldInitial";
import { ISectionField } from "./ISectionField";
import { ObjectFieldTransfer } from "../../Utils/ObjectFieldTransfer";

export class SectionField extends ManifestoField implements ISectionField {
    readonly isSection = true;
    sectionName: string;
    content: IManifestoField[];
    name: string;


    constructor(base : ISectionFieldInitial) {
        super(base);
        ObjectFieldTransfer(base, this);
    }

    
}

