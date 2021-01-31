import { IInitialField } from "./IInitialField";
import { IInitialFieldBase } from "./IInitialFieldBase";


export abstract class InitialFied implements IInitialField {
    content: string | IInitialField[];

    constructor(base?: IInitialFieldBase) {
        this.content = base.content;
    }
}

// PARAMETER => MANIFESTO => VIEW

