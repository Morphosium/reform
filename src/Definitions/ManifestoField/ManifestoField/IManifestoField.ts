import { IManifestoFieldInitial } from "./IManifestoFieldInitial";



export interface IManifestoField extends IManifestoFieldInitial {
    isElement?: boolean;
    isSection?: boolean;
    isInput?: boolean;
    content?: IManifestoField[] | string;
}
