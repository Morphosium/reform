import { IManifestoField } from "../ManifestoField/IManifestoField";
import { ISectionFieldBase } from "./ISectionFieldBase";


export interface ISectionField extends IManifestoField, ISectionFieldBase {
    content: IManifestoField[];
}
