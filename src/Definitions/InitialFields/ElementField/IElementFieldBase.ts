import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { KeyValue } from "../../Types/KeyValue";
import { IInitialField } from "../InitialField/IInitialField";
import { IInitialFieldBase } from "../InitialField/IInitialFieldBase";



export interface IElementFieldBase extends IInitialFieldBase {
    tag?: string;
    id?: string;
    class?: string;
    attributes?: Array<KeyValue>;
    content?: IInitialField[] | string;
    eventBindings? : ElementFieldEventBinding;
}
