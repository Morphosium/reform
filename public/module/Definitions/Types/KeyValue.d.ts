export interface IKeyValue<K extends string | number = string, V extends any = any> {
    key: K;
    value?: V;
}
export declare class KeyValue<K extends string | number = string, V extends any = any> implements IKeyValue<K, V> {
    key: K;
    value?: V;
    constructor(key: K, value?: V);
}
export declare function keyValue<K extends string | number = string, V extends any = any>(key: K, value?: V): KeyValue<K, V>;
