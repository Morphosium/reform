"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootSectionField = void 0;
const SectionField_1 = require("./SectionField");
class RootSectionField extends SectionField_1.SectionField {
    constructor() {
        super(...arguments);
        this.name = "root";
        this.root = true;
    }
}
exports.RootSectionField = RootSectionField;
