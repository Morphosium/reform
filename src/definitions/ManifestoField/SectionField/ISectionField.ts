import { IManifestoField } from "../ManifestoField/IManifestoField";
import { ISectionFieldInitial } from "./ISectionFieldInitial";


export interface ISectionField extends IManifestoField, ISectionFieldInitial {
    isSection: boolean;
    content: IManifestoField[];
}
