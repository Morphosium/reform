export interface IKeyValue<K extends string | number = string, V extends any = any> {
    key: K;
    value?: V;
}

export class KeyValue<K extends string | number = string, V extends any = any>
    implements IKeyValue<K, V> {
    constructor(public key: K, public value?: V) {

    }
}


export function keyValue<K extends string | number = string, V extends any = any>(key: K, value?: V) {
    return new KeyValue<K,V>(key, value);
}