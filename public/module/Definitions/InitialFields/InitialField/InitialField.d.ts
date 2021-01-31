import { IInitialField } from "./IInitialField";
import { IInitialFieldBase } from "./IInitialFieldBase";
export declare abstract class InitialFied implements IInitialField {
    content: string | IInitialField[];
    constructor(base?: IInitialFieldBase);
}
