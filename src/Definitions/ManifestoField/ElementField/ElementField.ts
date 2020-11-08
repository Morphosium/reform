import { InitialFied } from "../InitialField/InitialField";
import { IInitialFied } from "../InitialField/IInitialField";
import { IElementField } from "./IElementField";
import { IElementFieldBase } from "./IElementFieldBase";
import { ObjectFieldTransfer } from "../../../Utils/ObjectFieldTransfer";


export class ElementField extends InitialFied implements IElementField {
    readonly isElement = true;
    attributes: { key: string, value: string }[] = [];
    reflection: HTMLElement;
    content: IInitialFied[];
    tag: string = "";
    id: string = "";
    class: string = "";

    constructor(base?: IElementFieldBase) {
        super(base)
        ObjectFieldTransfer(base, this);
    }

}