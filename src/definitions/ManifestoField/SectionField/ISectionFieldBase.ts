import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IManifestoFieldBase } from "../ManifestoField/IManifestoFieldBase";


export interface ISectionFieldBase extends IManifestoFieldBase {
    content: IManifestoField[];
}
