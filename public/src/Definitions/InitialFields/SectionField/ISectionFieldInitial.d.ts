import { IInitialFied } from "../InitialField/IInitialField";
import { IInitialFiedBase } from "../InitialField/IInitialFieldBase";
export interface ISectionFieldBase extends IInitialFiedBase {
    content: IInitialFied[];
    name?: string;
    root?: boolean;
    excludeOnFinalData?: boolean;
    arraySectionRaw?: boolean;
    convertToFinalValue?: (rawObject: {
        [key: string]: any;
    }) => any;
    getFromFinalValue?: (final: any) => any;
}
//# sourceMappingURL=ISectionFieldInitial.d.ts.map