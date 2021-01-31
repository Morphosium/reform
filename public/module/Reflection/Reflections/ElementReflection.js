"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementReflection = void 0;
const Reflection_1 = require("./Reflection");
const CreateElement_1 = require("../../Utils/CreateElement");
/**
 * ElementReflection class is a reflection class for arrange visual and structural
 * arrangement
 */
class ElementReflection extends Reflection_1.Reflection {
    constructor(elementField, reflector, baseElement, parentSectionReflection) {
        super();
        this.elementField = elementField;
        this.reflector = reflector;
        this.baseElement = baseElement;
        this.parentSectionReflection = parentSectionReflection;
        this.constructReflection();
    }
    constructReflection() {
        const selfClass = this;
        this.initialField = this.elementField;
        const element = CreateElement_1.createElement(selfClass, this.reflector, this.elementField);
        this.baseElement.appendChild(element);
        if (typeof this.elementField.content === "string") {
            element.textContent = this.elementField.content;
        }
        else {
            this.subReflections = this.reflector.expand(element, this.elementField, this.parentSectionReflection);
        }
        this.element = element;
    }
    getElementByName(name) {
        var _a;
        return (_a = this.subReflections) === null || _a === void 0 ? void 0 : _a.find(
        //@ts-ignore
        a => a["name"] === name);
    }
    setErrorMessageVisibility(value) {
        //Nothing... :)
    }
}
exports.ElementReflection = ElementReflection;
