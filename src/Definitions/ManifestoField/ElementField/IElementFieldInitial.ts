import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { KeyValue } from "../../Types/KeyValue";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IManifestoFieldInitial } from "../ManifestoField/IManifestoFieldInitial";



export interface IElementFieldInitial extends IManifestoFieldInitial {
    tag?: string;
    id?: string;
    class?: string;
    attributes?: Array<KeyValue>;
    content?: IManifestoField[] | string;
    eventBindings? : ElementFieldEventBinding;
}
