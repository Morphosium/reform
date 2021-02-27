"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementField = void 0;
const InitialField_1 = require("../InitialField/InitialField");
const objectFieldTransfer_1 = require("../../../Utils/objectFieldTransfer");
class ElementField extends InitialField_1.InitialFied {
    constructor(base) {
        super(base);
        /** @inheritDoc */
        this.isElement = true;
        /** @inheritDoc */
        this.attributes = [];
        /** @inheritDoc */
        this.tag = "";
        /** @inheritDoc */
        this.id = "";
        /** @inheritDoc */
        this.class = "";
        objectFieldTransfer_1.ObjectFieldTransfer(base, this);
    }
}
exports.ElementField = ElementField;
