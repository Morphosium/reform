import { IInitialFied } from "./IInitialField";
import { IInitialFiedBase } from "./IInitialFieldBase";


export abstract class InitialFied implements IInitialFied {
    content: string | IInitialFied[];

    constructor(base?: IInitialFiedBase) {
        this.content = base.content;
    }
}

// PARAMETER => MANIFESTO => VIEW

