import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { IKeyValue } from "../../Types/KeyValue";
import { IInitialField } from "../InitialField/IInitialField";
import { IElementFieldBase } from "./IElementFieldBase";
export interface IElementField extends IElementFieldBase, IInitialField {
    tag?: string;
    id?: string;
    class?: string;
    content: IInitialField[] | string;
    attributes?: Array<IKeyValue>;
    isElement: boolean;
    eventBindings?: ElementFieldEventBinding;
}
