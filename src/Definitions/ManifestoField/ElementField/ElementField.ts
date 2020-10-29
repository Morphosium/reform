import { ManifestoField } from "../ManifestoField/ManifestoField";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IElementField } from "./IElementField";
import { IElementFieldInitial } from "./IElementFieldInitial";
import { ObjectFieldTransfer } from "../../Utils/ObjectFieldTransfer";


export class ElementField extends ManifestoField implements IElementField {
    readonly isElement = true;
    attributes: { key: string, value: string }[] = [];
    reflection: HTMLElement;
    content: IManifestoField[];
    tag: string = "";
    id: string = "";
    class: string = "";

    constructor(base?: IElementFieldInitial) {
        super(base)
        ObjectFieldTransfer(base, this);
    }

}