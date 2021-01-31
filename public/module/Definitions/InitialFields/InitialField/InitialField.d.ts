import { IInitialFied } from "./IInitialField";
import { IInitialFiedBase } from "./IInitialFieldBase";
export declare abstract class InitialFied implements IInitialFied {
    content: string | IInitialFied[];
    constructor(base?: IInitialFiedBase);
}
