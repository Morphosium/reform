/**
 * Transfers object fields (except proto and methods) into target object.
 * Provides first level copy. If there is a object field, these are not gonna be copied fully,
 * only reference it will be copied.
 * @param from
 * @param target
 */
export declare function ObjectFieldTransfer(from: {
    [key: string]: any;
}, target: {
    [key: string]: any;
}): void;
