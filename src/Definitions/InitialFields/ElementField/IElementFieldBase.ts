import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { KeyValue } from "../../Types/KeyValue";
import { IInitialFied } from "../InitialField/IInitialField";
import { IInitialFiedBase } from "../InitialField/IInitialFieldBase";



export interface IElementFieldBase extends IInitialFiedBase {
    tag?: string;
    id?: string;
    class?: string;
    attributes?: Array<KeyValue>;
    content?: IInitialFied[] | string;
    eventBindings? : ElementFieldEventBinding;
}
