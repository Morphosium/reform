import { InitialFied } from "../InitialField/InitialField";
import { IInitialField } from "../InitialField/IInitialField";
import { IElementField } from "./IElementField";
import { IElementFieldBase } from "./IElementFieldBase";
import { ObjectFieldTransfer } from "../../../Utils/objectFieldTransfer";
import { ElementAttribute } from "../../Types/ElementAttribute";


export class ElementField extends InitialFied implements IElementField {
    /** @inheritDoc */
    readonly isElement = true;
    /** @inheritDoc */
    attributes: ElementAttribute[] = [];
    /** @inheritDoc */
    reflection: HTMLElement;
    /** @inheritDoc */
    content: IInitialField[];
    /** @inheritDoc */
    tag: string = "";
    /** @inheritDoc */
    id: string = "";
    /** @inheritDoc */
    class: string = "";

    constructor(base?: IElementFieldBase) {
        super(base)
        ObjectFieldTransfer(base, this);
    }

}