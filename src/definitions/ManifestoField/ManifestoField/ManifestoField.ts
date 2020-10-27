import { IManifestoField } from "./IManifestoField";
import { IManifestoFieldBase } from "./IManifestoFieldBase";


export abstract class ManifestoField implements IManifestoField {
    constructor(base?: IManifestoFieldBase) {
        if (base)
            for (const key in base) {

                if (Object.prototype.hasOwnProperty.call(base, key)) {
                    //@ts-ignore
                    const prop = base[key];
                    //@ts-ignore
                    this[key] = prop

                }
            }
    }
}

// PARAMETER => MANIFESTO => VIEW

