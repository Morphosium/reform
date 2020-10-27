import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IElementFieldBase } from "./IElementFieldBase";



export interface IElementField extends IElementFieldBase, IManifestoField {
    tag?: string;
    id?: string;
    class?: string;
    content: IManifestoField[];
    attributes : Array<{key: string, value: string}>;
    isElement: boolean;
}
