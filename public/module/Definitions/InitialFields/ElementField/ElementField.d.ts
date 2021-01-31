import { InitialFied } from "../InitialField/InitialField";
import { IInitialFied } from "../InitialField/IInitialField";
import { IElementField } from "./IElementField";
import { IElementFieldBase } from "./IElementFieldBase";
import { ElementAttribute } from "../../Types/ElementAttribute";
export declare class ElementField extends InitialFied implements IElementField {
    readonly isElement = true;
    attributes: ElementAttribute[];
    reflection: HTMLElement;
    content: IInitialFied[];
    tag: string;
    id: string;
    class: string;
    constructor(base?: IElementFieldBase);
}
