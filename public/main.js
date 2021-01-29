var main = (function (exports) {
    'use strict';

    class InitialFied {
        constructor(base) {
            this.content = base.content;
        }
    }

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

    class ElementField extends InitialFied {
        constructor(base) {
            super(base);
            this.isElement = true;
            this.attributes = [];
            this.tag = "";
            this.id = "";
            this.class = "";
            ObjectFieldTransfer(base, this);
        }
    }

    class InputField extends InitialFied {
        constructor(base) {
            super(base);
            this.isInput = true;
            ObjectFieldTransfer(base, this);
            this.convertToFinalValue = base.convertToFinalValue;
        }
    }

    class SectionField extends InitialFied {
        constructor(base) {
            super(base);
            this.isSection = true;
            this.root = false;
            ObjectFieldTransfer(base, this);
            this.convertToFinalValue = base.convertToFinalValue;
        }
    }

    class RootSectionField extends SectionField {
        constructor() {
            super(...arguments);
            this.name = "root";
            this.root = true;
        }
    }

    class EmailValidator {
        constructor() {
            this.regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            this.message = "Please enter valid email address";
            this.name = "email";
        }
        method(value) {
            return this.regex.test(value || "");
        }
    }
    class NotEmpty {
        constructor() {
            this.name = "notEmpty";
            this.message = "Please don't leave this area empty ";
        }
        method(value) {
            return (value != null) && (value.trim() != "");
        }
    }
    class NeedToBeTrue {
        constructor() {
            this.name = "notEmpty";
            this.message = "Please don't leave this area empty ";
        }
        method(value) {
            if (value)
                return true;
            else
                return false;
        }
    }
    class MinimumNumber {
        constructor(minimumValue) {
            this.minimumValue = minimumValue;
            this.name = "min";
            this.message = "Value is need to be greater or equal than " + minimumValue;
        }
        method(value) {
            return (parseFloat(value) >= this.minimumValue);
        }
    }
    class MaximumNumber {
        constructor(maximumValue) {
            this.maximumValue = maximumValue;
            this.name = "min";
            this.message = "";
            this.message = "Value is need to be less or equal than " + maximumValue;
        }
        method(value) {
            return (parseFloat(value) <= this.maximumValue);
        }
    }
    class NumberGreaterThan {
        constructor(minimumValue) {
            this.minimumValue = minimumValue;
            this.name = "min";
            this.message = "Value is need to be greater than " + minimumValue;
        }
        method(value) {
            return (parseFloat(value) > this.minimumValue);
        }
    }
    class NumberLessThan {
        constructor(maximumValue) {
            this.maximumValue = maximumValue;
            this.name = "min";
            this.message = "";
            this.message = "Value is need to be less than " + maximumValue;
        }
        method(value) {
            return (parseFloat(value) < this.maximumValue);
        }
    }

    class Subject {
        constructor() {
            this.observers = [];
        }
        notify(param) {
            for (const observer of this.observers) {
                observer.update(this, param);
            }
        }
        subscribe(observer) {
            if (this.observers.indexOf(observer) == -1)
                this.observers.push(observer);
        }
        unsubscribe(observer) {
            const index = this.observers.indexOf(observer);
            if (index > -1)
                this.observers.splice(index, 1);
        }
    }

    class Observer {
    }

    class EventObserve extends Observer {
        constructor(updateEvent) {
            super();
            this.updateEvent = updateEvent;
        }
        update(subject, param) {
            this.updateEvent(param);
        }
    }

    class Reflection {
    }

    function createElement(elementField, reflector) {
        var _a, _b;
        const element = document.createElement(elementField.tag || "div");
        this.element = element;
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
                    element.addEventListener(key, (event => { method(this, event, reflector); }));
                }
            }
        }
        return element;
    }

    class ElementReflection extends Reflection {
        constructor(elementField, reflector, baseElement, parentSectionReflection) {
            super();
            this.elementField = elementField;
            this.reflector = reflector;
            this.baseElement = baseElement;
            this.parentSectionReflection = parentSectionReflection;
            this.constructReflection();
        }
        constructReflection() {
            this.initialField = this.elementField;
            const element = createElement(this.elementField, this.reflector);
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
            return (_a = this.subReflections) === null || _a === void 0 ? void 0 : _a.find(a => a["name"] === name);
        }
        setErrorMessageVisibility(value) {
        }
    }

    class InputReflection extends Reflection {
        constructor(inputField, reflector, baseElement, parentSectionReflection) {
            super();
            this.reflector = reflector;
            this.parentSectionReflection = parentSectionReflection;
            this.value = "";
            this.validationErrors = {};
            this.value = inputField.initialValue;
            this.initialField = inputField;
            this.constructReflection(inputField, reflector, baseElement, parentSectionReflection);
        }
        constructReflection(inputField, reflector, baseElement, parentSectionReflection) {
            if (this._baseElement) {
                this._baseElement.innerHTML = "";
                this._baseElement.innerText = "";
            }
            let inputHtml, labelHtml, messageHtml, template = inputField.template || `
            <div>$label</div>
            <div>$input</div>
            <div>$message</div>`;
            if (inputField.inputType === "checkbox") {
                inputHtml = `<input reformjs-input type="checkbox"> <span reformjs-input-label>${inputField.label}</span>`;
                labelHtml = `<span></span>`;
            }
            else {
                inputHtml = `<input reformjs-input type="${inputField.inputType}">`;
                labelHtml = `<span reformjs-input-label>${inputField.label}</span>`;
            }
            messageHtml = `<span reformjs-message></span>`;
            const initBundle = template.replace("$label", labelHtml).replace("$input", inputHtml).replace("$message", messageHtml);
            const elementBase = document.createElement("div");
            elementBase.innerHTML = initBundle;
            const inputElement = elementBase.querySelector("[reformjs-input]"), messageElement = elementBase.querySelector("[reformjs-message]");
            this._inputElement = inputElement;
            this._messageElement = messageElement;
            this._baseElement = baseElement;
            if (this.initialField.placeholder) {
                inputElement.placeholder = this.initialField.placeholder;
            }
            inputElement.addEventListener("input", event => {
                const inputElement = event.target;
                let value;
                if (inputField.inputType === "checkbox") {
                    value = inputElement.checked;
                }
                else if (inputField.inputType === "number") {
                    value = inputElement.valueAsNumber;
                }
                else {
                    value = inputElement.value;
                }
                this.changeValue(value);
            });
            baseElement.appendChild(elementBase);
        }
        changeValue(value) {
            this.rawValue = value;
            if (this.rawToFinalValue) {
                this.value = this.rawToFinalValue(value);
            }
            else
                this.value = value;
            this.parentSectionReflection.valueChanged();
            this.validate();
        }
        validate() {
            var _a;
            this.validationErrors = {};
            for (let validationIndex = 0; validationIndex < ((_a = this.initialField.validations) === null || _a === void 0 ? void 0 : _a.length); validationIndex++) {
                const validation = this.initialField.validations[validationIndex];
                if (validation) {
                    if (!validation.method(this.value)) {
                        this.validationErrors[validation.name] = { invalid: true, message: validation.message };
                    }
                }
            }
            this.setValidationText();
        }
        setValidationText() {
            const element = this._messageElement;
            const errorKeys = Object.keys(this.validationErrors);
            if ((errorKeys.length > 0) && this.showErrorMessage) {
                element.style.display = "block";
                element.textContent = this.validationErrors[errorKeys[0]].message;
            }
            else {
                element.style.display = "none";
                element.textContent = "";
            }
        }
        setValueExternal(newValue, emit = true) {
            const inputElement = this._inputElement;
            const inputType = this.initialField.inputType;
            if (inputType === "checkbox") {
                inputElement.checked = newValue;
            }
            else if (inputType === "number" && parseInt(newValue)) {
                inputElement.valueAsNumber = parseInt(newValue);
            }
            else {
                inputElement.value = newValue;
            }
            if (emit)
                this.changeValue(newValue);
        }
        setErrorMessageVisibility(value) {
            this.validate();
            this.showErrorMessage = value;
            this.setValidationText();
        }
    }

    class SectionReflection extends Reflection {
        constructor(sectionField, reflector, baseElement, parentSectionReflection) {
            super();
            this.parentSectionReflection = parentSectionReflection;
            this.subReflections = [];
            this.constructReflection(sectionField, reflector, baseElement, parentSectionReflection);
        }
        constructReflection(sectionField, reflector, baseElement, parentSectionReflection) {
            this.onValueChange = new Subject();
            this.initialField = sectionField;
            const inheritedSection = sectionField.root ? this : parentSectionReflection;
            reflector.expand(baseElement, sectionField, this);
        }
        valueChanged() {
            this.rawValue = this.collectSectionData();
            if (this.parentSectionReflection) {
                this.parentSectionReflection.valueChanged();
            }
            else {
                this.onValueChange.notify();
            }
        }
        getValue(mode, showGhost = false) {
            return this.collectSectionData(mode);
        }
        dataCollection(mode, callback) {
            const usefulReflections = this.subReflections.filter(a => a.initialField.isInput || a.initialField.isSection);
            for (let reflectionIndex = 0; reflectionIndex < usefulReflections.length; reflectionIndex++) {
                const reflection = usefulReflections[reflectionIndex];
                if (reflection.initialField.isInput) {
                    const inputReflection = reflection;
                    if (inputReflection.value)
                        callback(inputReflection.value, inputReflection.initialField.name);
                }
                else if (reflection.initialField.isSection) {
                    const sectionReflection = reflection;
                    const value = sectionReflection.collectSectionData(mode);
                    if (value && ((typeof value != "object") || Object.keys(value).length > 0))
                        callback(value, sectionReflection.initialField.name);
                }
            }
        }
        convertDataByMode(data, mode) {
            if ((mode === "final") && (this.initialField.convertToFinalValue)) {
                return this.initialField.convertToFinalValue(data);
            }
            else
                return data;
        }
        collectSectionData(mode = "final") {
            if (this.initialField.arraySectionRaw) {
                const array = [];
                this.dataCollection(mode, (value) => {
                    array.push(value);
                });
                return this.convertDataByMode(array, mode);
            }
            else {
                const objectMap = {};
                this.dataCollection(mode, (value, name) => {
                    objectMap[name] = value;
                });
                return this.convertDataByMode(objectMap, mode);
            }
        }
        collectValidationErrors() {
            const fieldNameHeader = this.initialField.name ? `${this.initialField.name}.` : '';
            const errorList = {};
            for (let subFieldIndex = 0; subFieldIndex < this.subReflections.length; subFieldIndex++) {
                const subReflection = this.subReflections[subFieldIndex];
                if (subReflection.initialField.isInput) {
                    const inputReflection = subReflection;
                    inputReflection.validate();
                    errorList[fieldNameHeader + subReflection.initialField.name] = inputReflection.validationErrors;
                }
                else if (subReflection.initialField.isSection) {
                    const subReflectionValidationErrors = subReflection.collectValidationErrors();
                    for (const key in subReflectionValidationErrors) {
                        if (Object.prototype.hasOwnProperty.call(subReflectionValidationErrors, key)) {
                            const validationErrorMap = subReflectionValidationErrors[key];
                            if (validationErrorMap != null && (Object.keys(validationErrorMap).length > 0))
                                errorList[fieldNameHeader + key] = validationErrorMap;
                        }
                    }
                }
            }
            return errorList;
        }
        setValue(data) {
            if (data instanceof Object) {
                const dataAsObj = data;
                for (const key in dataAsObj) {
                    if (Object.prototype.hasOwnProperty.call(dataAsObj, key)) {
                        const value = dataAsObj[key];
                        if ((typeof value != "function") &&
                            (key != "__proto__")) {
                            const reflection = this.findSubReflectionByName(key);
                            if (reflection.initialField.isSection) {
                                reflection.setValue(value);
                            }
                            else if (reflection.initialField.isInput) {
                                reflection.setValueExternal(value);
                            }
                        }
                    }
                }
            }
        }
        findSubReflectionByName(key) {
            var _a;
            return (_a = this.subReflections) === null || _a === void 0 ? void 0 : _a.find(refl => refl.initialField.name === key);
        }
        setErrorMessageVisibility(value) {
            for (let reflectionIndex = 0; reflectionIndex < this.subReflections.length; reflectionIndex++) {
                const reflection = this.subReflections[reflectionIndex];
                reflection.setErrorMessageVisibility(value);
            }
        }
    }

    class Reflector {
        constructor(rootManifest) {
            this.rootManifest = rootManifest;
            this.idMap = {};
            this.onValueChange = new Subject();
        }
        expandThere(elementOrSelector) {
            this.baseElement = null;
            if (typeof elementOrSelector === "string") {
                this.baseElement = document.querySelector(elementOrSelector);
            }
            else {
                this.baseElement = elementOrSelector;
            }
            if (this.baseElement) {
                this.rootSectionReflection = new SectionReflection(this.rootManifest, this, this.baseElement, null);
                this.rootSectionReflection.onValueChange.subscribe(new EventObserve(value => {
                    this.onValueChange.notify(value);
                }));
            }
        }
        expand(baseElement, initialField, parentSectionReflection) {
            var _a;
            const fields = initialField.content, reflections = [];
            if (fields instanceof Array) {
                for (let index = 0; index < fields.length; index++) {
                    const field = fields[index];
                    let reflection;
                    if (field.isSection) {
                        reflection = new SectionReflection(field, this, baseElement, parentSectionReflection);
                    }
                    if (field.isElement) {
                        const elementField = field;
                        reflection = new ElementReflection(elementField, this, baseElement, parentSectionReflection);
                    }
                    if (field.isInput) {
                        reflection = new InputReflection(field, this, baseElement, parentSectionReflection);
                    }
                    if (parentSectionReflection && reflection && !field.isElement) {
                        parentSectionReflection.subReflections.push(reflection);
                        reflections.push(reflection);
                    }
                    if ((_a = reflection === null || reflection === void 0 ? void 0 : reflection.initialField) === null || _a === void 0 ? void 0 : _a.id) {
                        this.idMap[reflection.initialField.id] = reflection;
                    }
                }
                return reflections;
            }
        }
        findReflectionById(id) {
            return this.idMap[id];
        }
        getValue(final = true) {
            return this.rootSectionReflection.getValue(final ? "final" : "raw");
        }
        patchValue(data, isIntegrityImportant = false) {
            this.rootSectionReflection.setValue(data);
        }
        setErrorMessageVisibility(visible) {
            this.rootSectionReflection.setErrorMessageVisibility(visible);
        }
    }

    exports.ElementField = ElementField;
    exports.ElementReflection = ElementReflection;
    exports.EmailValidator = EmailValidator;
    exports.InitialFied = InitialFied;
    exports.InputField = InputField;
    exports.InputReflection = InputReflection;
    exports.MaximumNumber = MaximumNumber;
    exports.MinimumNumber = MinimumNumber;
    exports.NeedToBeTrue = NeedToBeTrue;
    exports.NotEmpty = NotEmpty;
    exports.NumberGreaterThan = NumberGreaterThan;
    exports.NumberLessThan = NumberLessThan;
    exports.Reflection = Reflection;
    exports.Reflector = Reflector;
    exports.RootSectionField = RootSectionField;
    exports.SectionField = SectionField;
    exports.SectionReflection = SectionReflection;

    return exports;

}({}));
//# sourceMappingURL=main.js.map
