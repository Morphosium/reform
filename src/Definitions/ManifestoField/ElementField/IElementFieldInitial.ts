import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IManifestoFieldInitial } from "../ManifestoField/IManifestoFieldInitial";



export interface IElementFieldInitial extends IManifestoFieldInitial {
    tag?: string;
    id?: string;
    class?: string;
    attributes?: Array<{key: string, value: string}>;
    content: IManifestoField[];
    eventBindings? : ElementFieldEventBinding;
}
