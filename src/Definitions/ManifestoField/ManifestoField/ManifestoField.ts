import { IManifestoField } from "./IManifestoField";
import { IManifestoFieldInitial } from "./IManifestoFieldInitial";


export abstract class ManifestoField implements IManifestoField {
    content: string | IManifestoField[];

    constructor(base?: IManifestoFieldInitial) {
        this.content = base.content;
        
    }
}

// PARAMETER => MANIFESTO => VIEW

