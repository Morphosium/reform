import { IManifestoField, IManifestoFieldBase, ManifestoField } from "./ManifestoField";
import { FieldType } from "../Types/ManifestoFieldType";

export interface IElementFieldBase extends IManifestoFieldBase {
    tag : string
    id : string
    classes : string[]
}

export interface IElementField extends IElementFieldBase, IManifestoField {
}

export class ElementField extends ManifestoField implements IElementField {
    constructor(base? : IElementFieldBase) {
        super(base)
    }
    reflection: HTMLElement;
    type: FieldType = "ELEMENT";
    content: IManifestoField[];

    tag: string;
    id: string;
    classes: string[];
}