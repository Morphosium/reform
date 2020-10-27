import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IElementFieldBase } from "./IElementFieldBase";



export interface IElementField extends IElementFieldBase, IManifestoField {
    content: IManifestoField[];
}
