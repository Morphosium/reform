"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectFieldTransfer = void 0;
/**
 * Transfers object fields (except proto and methods) into target object.
 * Provides first level copy. If there is a object field, these are not gonna be copied fully,
 * only reference it will be copied.
 * @param from
 * @param target
 */
function ObjectFieldTransfer(from, target) {
    for (const key in from) {
        if (key != "__proto__" &&
            Object.prototype.hasOwnProperty.call(from, key)
            && typeof from[key] !== "function") {
            const element = from[key];
            target[key] = element;
        }
    }
}
exports.ObjectFieldTransfer = ObjectFieldTransfer;
