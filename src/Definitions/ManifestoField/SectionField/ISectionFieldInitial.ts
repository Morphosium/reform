import { IManifestoField } from "../ManifestoField/IManifestoField";
import { IManifestoFieldInitial } from "../ManifestoField/IManifestoFieldInitial";


export interface ISectionFieldInitial extends IManifestoFieldInitial {
    content: IManifestoField[];
}
