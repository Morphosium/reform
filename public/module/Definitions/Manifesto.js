(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./InitialFields/SectionField/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reformInitial = exports.ReformInitial = void 0;
    const index_1 = require("./InitialFields/SectionField/index");
    class ReformInitial {
        constructor(rootSectionBase) {
            this.rootSection = new index_1.SectionField(rootSectionBase);
        }
    }
    exports.ReformInitial = ReformInitial;
    exports.reformInitial = function (rootSectionBase) { return new ReformInitial(rootSectionBase); };
});
