import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IManifestoFieldBase } from "../ManifestoField/IManifestoFieldBase";



export interface IElementFieldBase extends IManifestoFieldBase {
    tag?: string;
    id?: string;
    class?: string;
    attributes : Array<{key: string, value: string}>;
    content: IManifestoField[];
}
