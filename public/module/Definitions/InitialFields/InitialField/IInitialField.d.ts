import { IInitialFieldBase } from "./IInitialFieldBase";
/**
 * Represents form build instruction accepted by reflector
 */
export interface IInitialField extends IInitialFieldBase {
    /**
     * This field can be set as true to detect as element, othervise false.
     * more than 1 fields of "isElement", "isSection" and "isInput" shouldn't to be true in same time
     */
    isElement?: boolean;
    /**
    * This field can be set as true to detect as section, othervise false
    * more than 1 fields of "isElement", "isSection" and "isInput" shouldn't to be true in same time
    */
    isSection?: boolean;
    /**
     * This field can be set as true to detect as input, othervise false
    * more than 1 fields of "isElement", "isSection" and "isInput" shouldn't to be true in same time
    */
    isInput?: boolean;
    /**
    * Sub initial fields that is contains another initial fields (These are contained in Section or element field), or text content if it is ElementField.
    */
    content?: IInitialField[] | string;
}
