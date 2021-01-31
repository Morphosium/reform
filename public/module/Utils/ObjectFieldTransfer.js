(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectFieldTransfer = void 0;
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
});
