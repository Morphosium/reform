import { ManifestoField } from "../ManifestoField/ManifestoField";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IElementField } from "./IElementField";
import { IElementFieldBase } from "./IElementFieldBase";


export class ElementField extends ManifestoField implements IElementField {
    readonly isElement = true;
    attributes: {key: string, value: string}[] = [];
    reflection: HTMLElement;
    content: IManifestoField[];
    tag: string = "";
    id: string = "";
    class: string = "";

    constructor(base?: IElementFieldBase) {
        super(base)
        // this.attributes = base.attributes;
        // this.tag = base.tag;
        for (const key in base) {
            if (Object.prototype.hasOwnProperty.call(base, key)) {
                this[key] = base[key];
                
            }
        }
    }

}