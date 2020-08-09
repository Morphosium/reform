import { FieldType } from "./ManifestoFieldType";

export interface IManifestoField {
    readonly type : FieldType;
    content : IManifestoField[]
}


export abstract class ManifestoField implements IManifestoField {
    abstract type: FieldType;
    content: IManifestoField[];
}

// PARAMETER => MANIFESTO => VIEW

