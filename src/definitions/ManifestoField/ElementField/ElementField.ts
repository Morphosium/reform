import { ManifestoField } from "../ManifestoField/ManifestoField";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IElementField } from "./IElementField";
import { IElementFieldBase } from "./IElementFieldBase";


export class ElementField extends ManifestoField implements IElementField {
    readonly isElement = true;
    reflection: HTMLElement;
    content: IManifestoField[];
    tag: string = "";
    id: string = "";
    class: string = "";

    constructor(base?: IElementFieldBase) {
        super(base)
    }
}