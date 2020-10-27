import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IManifestoFieldBase } from "../ManifestoField/IManifestoFieldBase";



export interface IElementFieldBase extends IManifestoFieldBase {
    isElement: boolean;
    tag?: string;
    id?: string;
    class?: string;
    content: IManifestoField[];
}
