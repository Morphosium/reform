import { InitialFied } from "../InitialField/InitialField";
import { IInitialField } from "../InitialField/IInitialField";
import { IElementField } from "./IElementField";
import { IElementFieldBase } from "./IElementFieldBase";
import { ElementAttribute } from "../../Types/ElementAttribute";
export declare class ElementField extends InitialFied implements IElementField {
    readonly isElement = true;
    attributes: ElementAttribute[];
    reflection: HTMLElement;
    content: IInitialField[];
    tag: string;
    id: string;
    class: string;
    constructor(base?: IElementFieldBase);
}
