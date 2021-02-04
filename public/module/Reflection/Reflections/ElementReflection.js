"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementReflection = void 0;
const elementCreationUtil_1 = require("../../Utils/elementCreationUtil");
/**
 * ElementReflection class is a reflection class for arrange visual and structural
 * arrangement
 */
class ElementReflection {
    constructor(initialField, reflector, baseParentalElement, parentSectionReflection) {
        this.initialField = initialField;
        this.reflector = reflector;
        this.baseParentalElement = baseParentalElement;
        this.parentSectionReflection = parentSectionReflection;
        this.constructReflection();
    }
    /**
     * Created an element and reflector extracts into created element if content is not string, etc...
     * */
    constructReflection() {
        //Directly passing this makes it null. Anyone gets astonished
        const selfClass = this;
        this.initialField = this.initialField;
        const element = elementCreationUtil_1.createElement(selfClass, this.reflector, this.initialField);
        this.baseParentalElement.appendChild(element);
        if (typeof this.initialField.content === "string") {
            element.textContent = this.initialField.content;
        }
        else {
            this.subReflections = this.reflector.expand(element, this.initialField, this.parentSectionReflection);
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
        for (let reflectionIndex = 0; reflectionIndex < this.subReflections.length; reflectionIndex++) {
            const reflection = this.subReflections[reflectionIndex];
            reflection.setErrorMessageVisibility(value);
        }
    }
}
exports.ElementReflection = ElementReflection;
