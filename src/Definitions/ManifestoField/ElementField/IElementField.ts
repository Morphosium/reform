import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { IKeyValue } from "../../Types/KeyValue";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IElementFieldInitial } from "./IElementFieldInitial";



export interface IElementField extends IElementFieldInitial, IManifestoField {
    tag?: string;
    id?: string;
    class?: string;
    content: IManifestoField[] | string;
    attributes?: Array<IKeyValue>;
    isElement: boolean;
    eventBindings? : ElementFieldEventBinding;
}
