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
     * The value that raw (Collected data as object or array), is turned into different type. Example of: 2, 3, 4 numbers can contained in section. That is maybe reflected as sum of each one, 9.
     */
    convertToFinalValue?: (rawObject: {
        [key: string]: any;
    }) => any;
    /**
     * When a data applied to array, this corresponding field's that method will be triggered with that
     * if not provided:
     * - If incoming final data is object (has no method), sub fields applied with sub items.
     * - If it is a primitive type or different thing, nothing happens.
     */
    getFromFinalValue?: (final: any) => any;
}
