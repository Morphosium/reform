import { IInitialFied } from "../InitialField/IInitialField";
import { ISectionFieldBase } from "./index";


export interface ISectionField extends IInitialFied, ISectionFieldBase {
    isSection: boolean;
    content: IInitialFied[];
}
