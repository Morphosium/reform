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
    exports.createElement = void 0;
    /**
     * Creates and returns a HTML Element by Element initial field
     * @param elementField A Element field instance for binding attributes and events and etc
     */
    function createElement(reflection, reflector, elementField) {
        var _a, _b;
        const element = document.createElement(elementField.tag || "div");
        if (elementField.class)
            element.className = elementField.class;
        const elementFieldAttributes = (_a = elementField.attributes) === null || _a === void 0 ? void 0 : _a.filter(a => a != null);
        if ((elementFieldAttributes === null || elementFieldAttributes === void 0 ? void 0 : elementFieldAttributes.length) > 0) {
            for (let attributeIndex = 0; attributeIndex < elementFieldAttributes.length; attributeIndex++) {
                const attribute = elementFieldAttributes[attributeIndex];
                if ((attribute.key != "class" && attribute.key != "style") || attribute.value) {
                    element.setAttribute(attribute.key, attribute.value || "");
                }
            }
        }
        for (const key in elementField.eventBindings || {}) {
            if (Object.prototype.hasOwnProperty.call(elementField.eventBindings, key)) {
                const methods = (_b = elementField.eventBindings[key]) === null || _b === void 0 ? void 0 : _b.filter(a => a != null);
                for (let methodIndex = 0; methodIndex < (methods === null || methods === void 0 ? void 0 : methods.length); methodIndex++) {
                    const method = methods === null || methods === void 0 ? void 0 : methods[methodIndex];
                    element.addEventListener(key, (event => { method(reflection, event, reflector); }));
                }
            }
        }
        return element;
    }
    exports.createElement = createElement;
});
