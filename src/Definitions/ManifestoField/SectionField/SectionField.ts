import { InitialFied } from "../InitialField/InitialField";
import { IInitialFied } from "../InitialField/IInitialField";
import { ISectionFieldBase } from "./ISectionFieldInitial";
import { ISectionField } from "./ISectionField";
import { ObjectFieldTransfer } from "../../Utils/ObjectFieldTransfer";

export class SectionField extends InitialFied implements ISectionField {
    readonly isSection = true;
    sectionName: string;
    content: IInitialFied[];
    name: string;
    root = false;

    constructor(base : ISectionFieldBase) {
        super(base);
        ObjectFieldTransfer(base, this);
    }

    
}

