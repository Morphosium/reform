"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputField = void 0;
const objectFieldTransfer_1 = require("../../../Utils/objectFieldTransfer");
const index_1 = require("../InitialField/index");
class InputField extends index_1.InitialFied {
    constructor(base) {
        super(base);
        /** @inheritDoc */
        this.isInput = true;
        objectFieldTransfer_1.ObjectFieldTransfer(base, this);
        this.convertToFinalValue = base.convertToFinalValue;
    }
}
exports.InputField = InputField;
