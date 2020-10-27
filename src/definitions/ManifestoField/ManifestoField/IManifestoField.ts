import { IManifestoFieldBase } from "./IManifestoFieldBase";



export interface IManifestoField extends IManifestoFieldBase {
    isElement?: boolean;
    isSection?: boolean;
    isInput?: boolean;
}
