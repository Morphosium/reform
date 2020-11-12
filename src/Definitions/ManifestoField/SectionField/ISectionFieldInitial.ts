import { IInitialFied } from "../InitialField/IInitialField";
import { IInitialFiedBase } from "../InitialField/IInitialFieldBase";

/**
 * Section constructor parameters for Class entity of Section.
 */
export interface ISectionFieldBase extends IInitialFiedBase {
    content: IInitialFied[];

    /**
     * When get value from Reflector in any mode, that section's value is will be there with that name
     */
    name?: string;

    /**
     * If section is root, must be true.
     */
    root?: boolean;

    /**
     * When get value from Reflector in submit mode, not contained in values if excludeOnFinalData is true. Othervise, will be there.
     */
    excludeOnFinalData?: boolean;

    /**
     * When get value from Reflector in raw mode, returns section's value as array, or object if that arraySectionRaw is not true
     */
    arraySectionRaw?: boolean;

    /**
     * 
     */
    convertToFinalValue? : (hamObject : {[key: string]: any}) => any;
}
