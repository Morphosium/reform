import { ElementReflection } from "../../../Reflection/ElementReflection";
import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IElementFieldInitial } from "./IElementFieldInitial";



export interface IElementField extends IElementFieldInitial, IManifestoField {
    tag?: string;
    id?: string;
    class?: string;
    content: IManifestoField[];
    attributes?: Array<{key: string, value: string}>;
    isElement: boolean;
    eventBindings? : ElementFieldEventBinding;
}
