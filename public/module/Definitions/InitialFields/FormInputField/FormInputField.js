"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputField = void 0;
const ObjectFieldTransfer_1 = require("../../../Utils/ObjectFieldTransfer");
const index_1 = require("../InitialField/index");
class InputField extends index_1.InitialFied {
    constructor(base) {
        super(base);
        this.isInput = true;
        ObjectFieldTransfer_1.ObjectFieldTransfer(base, this);
        this.convertToFinalValue = base.convertToFinalValue;
    }
}
exports.InputField = InputField;
