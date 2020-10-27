import { IManifestoField } from "./IManifestoField";
import { IManifestoFieldBase } from "./IManifestoFieldBase";


export abstract class ManifestoField implements IManifestoField {
    content: IManifestoField[];
    constructor(base?: IManifestoFieldBase) {
        this.content = base.content;
        
    }
}

// PARAMETER => MANIFESTO => VIEW

