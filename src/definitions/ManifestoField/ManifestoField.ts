import { FieldType } from "../Types/ManifestoFieldType";

export interface IManifestoFieldBase {
    content: IManifestoField[]
}

export interface IManifestoField extends IManifestoFieldBase {
    readonly type: FieldType;
}

export abstract class ManifestoField implements IManifestoField {
    constructor(base?: IManifestoFieldBase) {
        if (base)
            for (const key in base) {
                if (Object.prototype.hasOwnProperty.call(base, key) && key != "type") {
                    //@ts-ignore
                    const prop = base[key];
                    //@ts-ignore
                    this[key] = prop
                }
            }
    }
    abstract type: FieldType;
    content: IManifestoField[];
}

// PARAMETER => MANIFESTO => VIEW

