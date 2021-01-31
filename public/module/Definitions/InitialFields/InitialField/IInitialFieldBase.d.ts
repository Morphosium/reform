import { IInitialField } from "./IInitialField";
export interface IInitialFieldBase {
    /**
     * Sub initial fields that is contains another initial fields (These are contained in Section or element field), or text content if it is ElementField.
     */
    content?: IInitialField[] | string;
    /**
     * Name, that should be unique in contained section
     */
    name?: string;
    /**
     * Id, that should be unique in entire section
     */
    id?: string;
}
