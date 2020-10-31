import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { IKeyValue } from "../../Types/KeyValue";
import { IInitialFied } from "../InitialField/IInitialField";
import { IElementFieldBase } from "./IElementFieldBase";





export interface IElementField extends IElementFieldBase, IInitialFied {
    tag?: string;
    id?: string;
    class?: string;
    content: IInitialFied[] | string;
    attributes?: Array<IKeyValue>;
    isElement: boolean;
    eventBindings? : ElementFieldEventBinding;
}
