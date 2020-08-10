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
                    const element = base[key];
                    this[key] = element
                }
            }
    }
    abstract type: FieldType;
    content: IManifestoField[];
}

// PARAMETER => MANIFESTO => VIEW

