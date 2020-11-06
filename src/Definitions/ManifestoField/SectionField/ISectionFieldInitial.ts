import { IInitialFied } from "../InitialField/IInitialField";
import { IInitialFiedBase } from "../InitialField/IInitialFieldBase";


export interface ISectionFieldBase extends IInitialFiedBase {
    content: IInitialFied[];
    name?: string;
    root?: boolean;
    arraySection?: boolean;
}
