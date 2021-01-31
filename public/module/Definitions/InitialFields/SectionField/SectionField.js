"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionField = void 0;
const InitialField_1 = require("../InitialField/InitialField");
const objectFieldTransfer_1 = require("../../../Utils/objectFieldTransfer");
/**
 * Sections are represents object, array. In same time if there is provider, can be returned any specified value.
 * Sections is not fillable directly by user. This is a difference than @class InputField
 */
class SectionField extends InitialField_1.InitialFied {
    constructor(base) {
        super(base);
        this.isSection = true;
        this.root = false;
        objectFieldTransfer_1.ObjectFieldTransfer(base, this);
        this.convertToFinalValue = base.convertToFinalValue;
    }
}
exports.SectionField = SectionField;
