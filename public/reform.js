(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var InitialFied = (function () {
        function InitialFied(base) {
            this.content = base.content;
        }
        return InitialFied;
    }());

    function ObjectFieldTransfer(from, target) {
        for (var key in from) {
            if (key != "__proto__" &&
                Object.prototype.hasOwnProperty.call(from, key)
                && typeof from[key] !== "function") {
                var element = from[key];
                target[key] = element;
            }
        }
    }

    var ElementField = (function (_super) {
        __extends(ElementField, _super);
        function ElementField(base) {
            var _this = _super.call(this, base) || this;
            _this.isElement = true;
            _this.attributes = [];
            _this.tag = "";
            _this.id = "";
            _this["class"] = "";
            ObjectFieldTransfer(base, _this);
            return _this;
        }
        return ElementField;
    }(InitialFied));

    var InputField = (function (_super) {
        __extends(InputField, _super);
        function InputField(base) {
            var _this = _super.call(this, base) || this;
            _this.isInput = true;
            ObjectFieldTransfer(base, _this);
            _this.convertToFinalValue = base.convertToFinalValue;
            return _this;
        }
        return InputField;
    }(InitialFied));

    var SectionField = (function (_super) {
        __extends(SectionField, _super);
        function SectionField(base) {
            var _this = _super.call(this, base) || this;
            _this.isSection = true;
            _this.root = false;
            ObjectFieldTransfer(base, _this);
            _this.convertToFinalValue = base.convertToFinalValue;
            return _this;
        }
        return SectionField;
    }(InitialFied));

    var RootSectionField = (function (_super) {
        __extends(RootSectionField, _super);
        function RootSectionField() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "root";
            _this.root = true;
            return _this;
        }
        return RootSectionField;
    }(SectionField));

    var EmailValidator = (function () {
        function EmailValidator() {
            this.regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            this.message = "Please enter valid email address";
            this.name = "email";
        }
        EmailValidator.prototype.method = function (value) {
            return this.regex.test(value || "");
        };
        return EmailValidator;
    }());
    var NotEmpty = (function () {
        function NotEmpty() {
            this.name = "notEmpty";
            this.message = "Please don't leave this area empty ";
        }
        NotEmpty.prototype.method = function (value) {
            return (value != null) && (value.trim() != "");
        };
        return NotEmpty;
    }());
    var NeedToBeTrue = (function () {
        function NeedToBeTrue() {
            this.name = "notEmpty";
            this.message = "Please don't leave this area empty ";
        }
        NeedToBeTrue.prototype.method = function (value) {
            if (value)
                return true;
            else
                return false;
        };
        return NeedToBeTrue;
    }());
    var MinimumNumber = (function () {
        function MinimumNumber(minimumValue) {
            this.minimumValue = minimumValue;
            this.name = "min";
            this.message = "Value is need to be greater or equal than " + minimumValue;
        }
        MinimumNumber.prototype.method = function (value) {
            return (parseFloat(value) >= this.minimumValue);
        };
        return MinimumNumber;
    }());
    var MaximumNumber = (function () {
        function MaximumNumber(maximumValue) {
            this.maximumValue = maximumValue;
            this.name = "min";
            this.message = "";
            this.message = "Value is need to be less or equal than " + maximumValue;
        }
        MaximumNumber.prototype.method = function (value) {
            return (parseFloat(value) <= this.maximumValue);
        };
        return MaximumNumber;
    }());
    var NumberGreaterThan = (function () {
        function NumberGreaterThan(minimumValue) {
            this.minimumValue = minimumValue;
            this.name = "min";
            this.message = "Value is need to be greater than " + minimumValue;
        }
        NumberGreaterThan.prototype.method = function (value) {
            return (parseFloat(value) > this.minimumValue);
        };
        return NumberGreaterThan;
    }());
    var NumberLessThan = (function () {
        function NumberLessThan(maximumValue) {
            this.maximumValue = maximumValue;
            this.name = "min";
            this.message = "";
            this.message = "Value is need to be less than " + maximumValue;
        }
        NumberLessThan.prototype.method = function (value) {
            return (parseFloat(value) < this.maximumValue);
        };
        return NumberLessThan;
    }());

    var Subject = (function () {
        function Subject() {
            this.observers = [];
        }
        Subject.prototype.notify = function (param) {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.update(this, param);
            }
        };
        Subject.prototype.subscribe = function (observer) {
            if (this.observers.indexOf(observer) == -1)
                this.observers.push(observer);
        };
        Subject.prototype.unsubscribe = function (observer) {
            var index = this.observers.indexOf(observer);
            if (index > -1)
                this.observers.splice(index, 1);
        };
        return Subject;
    }());

    var Observer = (function () {
        function Observer() {
        }
        return Observer;
    }());

    var EventObserve = (function (_super) {
        __extends(EventObserve, _super);
        function EventObserve(updateEvent) {
            var _this = _super.call(this) || this;
            _this.updateEvent = updateEvent;
            return _this;
        }
        EventObserve.prototype.update = function (subject, param) {
            this.updateEvent(param);
        };
        return EventObserve;
    }(Observer));

    var Reflection = (function () {
        function Reflection() {
        }
        return Reflection;
    }());

    function createElement(reflection, reflector, elementField) {
        var _a, _b;
        var element = document.createElement(elementField.tag || "div");
        if (elementField["class"])
            element.className = elementField["class"];
        var elementFieldAttributes = (_a = elementField.attributes) === null || _a === void 0 ? void 0 : _a.filter(function (a) { return a != null; });
        if ((elementFieldAttributes === null || elementFieldAttributes === void 0 ? void 0 : elementFieldAttributes.length) > 0) {
            for (var attributeIndex = 0; attributeIndex < elementFieldAttributes.length; attributeIndex++) {
                var attribute = elementFieldAttributes[attributeIndex];
                if ((attribute.key != "class" && attribute.key != "style") || attribute.value) {
                    element.setAttribute(attribute.key, attribute.value || "");
                }
            }
        }
        for (var key in elementField.eventBindings || {}) {
            if (Object.prototype.hasOwnProperty.call(elementField.eventBindings, key)) {
                var methods = (_b = elementField.eventBindings[key]) === null || _b === void 0 ? void 0 : _b.filter(function (a) { return a != null; });
                var _loop_1 = function (methodIndex) {
                    var method = methods === null || methods === void 0 ? void 0 : methods[methodIndex];
                    element.addEventListener(key, (function (event) { method(reflection, event, reflector); }));
                };
                for (var methodIndex = 0; methodIndex < (methods === null || methods === void 0 ? void 0 : methods.length); methodIndex++) {
                    _loop_1(methodIndex);
                }
            }
        }
        return element;
    }

    var ElementReflection = (function (_super) {
        __extends(ElementReflection, _super);
        function ElementReflection(elementField, reflector, baseElement, parentSectionReflection) {
            var _this = _super.call(this) || this;
            _this.elementField = elementField;
            _this.reflector = reflector;
            _this.baseElement = baseElement;
            _this.parentSectionReflection = parentSectionReflection;
            _this.constructReflection();
            return _this;
        }
        ElementReflection.prototype.constructReflection = function () {
            var selfClass = this;
            this.initialField = this.elementField;
            var element = createElement(selfClass, this.reflector, this.elementField);
            this.baseElement.appendChild(element);
            if (typeof this.elementField.content === "string") {
                element.textContent = this.elementField.content;
            }
            else {
                this.subReflections = this.reflector.expand(element, this.elementField, this.parentSectionReflection);
            }
            this.element = element;
        };
        ElementReflection.prototype.getElementByName = function (name) {
            var _a;
            return (_a = this.subReflections) === null || _a === void 0 ? void 0 : _a.find(function (a) { return a["name"] === name; });
        };
        ElementReflection.prototype.setErrorMessageVisibility = function (value) {
        };
        return ElementReflection;
    }(Reflection));

    var InputReflection = (function (_super) {
        __extends(InputReflection, _super);
        function InputReflection(inputField, reflector, baseElement, parentSectionReflection) {
            var _this = _super.call(this) || this;
            _this.reflector = reflector;
            _this.parentSectionReflection = parentSectionReflection;
            _this.value = "";
            _this.validationErrors = {};
            _this.value = inputField.initialValue;
            _this.initialField = inputField;
            _this.constructReflection(inputField, reflector, baseElement, parentSectionReflection);
            return _this;
        }
        InputReflection.prototype.constructReflection = function (inputField, reflector, baseElement, parentSectionReflection) {
            var _this = this;
            if (this._baseElement) {
                this._baseElement.innerHTML = "";
                this._baseElement.innerText = "";
            }
            var inputHtml, labelHtml, messageHtml, template = inputField.template || "\n            <div>$label</div>\n            <div>$input</div>\n            <div>$message</div>";
            if (inputField.inputType === "checkbox") {
                inputHtml = "<input reformjs-input type=\"checkbox\"> <span reformjs-input-label>" + inputField.label + "</span>";
                labelHtml = "<span></span>";
            }
            else {
                inputHtml = "<input reformjs-input type=\"" + inputField.inputType + "\">";
                labelHtml = "<span reformjs-input-label>" + inputField.label + "</span>";
            }
            messageHtml = "<span reformjs-message></span>";
            var initBundle = template.replace("$label", labelHtml).replace("$input", inputHtml).replace("$message", messageHtml);
            var elementBase = document.createElement("div");
            elementBase.innerHTML = initBundle;
            var inputElement = elementBase.querySelector("[reformjs-input]"), messageElement = elementBase.querySelector("[reformjs-message]");
            this._inputElement = inputElement;
            this._messageElement = messageElement;
            this._baseElement = baseElement;
            if (this.initialField.placeholder) {
                inputElement.placeholder = this.initialField.placeholder;
            }
            if (this.initialField.initialValue)
                inputElement.value = this.initialField.initialValue;
            inputElement.addEventListener("input", function (event) {
                var inputElement = event.target;
                var value;
                if (inputField.inputType === "checkbox") {
                    value = inputElement.checked;
                }
                else if (inputField.inputType === "number") {
                    value = inputElement.valueAsNumber;
                }
                else {
                    value = inputElement.value;
                }
                _this.changeValue(value);
            });
            baseElement.appendChild(elementBase);
        };
        InputReflection.prototype.changeValue = function (value) {
            this.rawValue = value;
            if (this.rawToFinalValue) {
                this.value = this.rawToFinalValue(value);
            }
            else
                this.value = value;
            this.parentSectionReflection.valueChanged();
            this.validate();
        };
        InputReflection.prototype.validate = function () {
            var _a;
            this.validationErrors = {};
            for (var validationIndex = 0; validationIndex < ((_a = this.initialField.validations) === null || _a === void 0 ? void 0 : _a.length); validationIndex++) {
                var validation = this.initialField.validations[validationIndex];
                if (validation) {
                    if (!validation.method(this.value)) {
                        this.validationErrors[validation.name] = { invalid: true, message: validation.message };
                    }
                }
            }
            this.setValidationText();
        };
        InputReflection.prototype.setValidationText = function () {
            var element = this._messageElement;
            var errorKeys = Object.keys(this.validationErrors);
            if ((errorKeys.length > 0) && this.showErrorMessage) {
                element.style.display = "block";
                element.textContent = this.validationErrors[errorKeys[0]].message;
            }
            else {
                element.style.display = "none";
                element.textContent = "";
            }
        };
        InputReflection.prototype.setValueExternal = function (newValue, emit) {
            if (emit === void 0) { emit = true; }
            var inputElement = this._inputElement;
            var inputType = this.initialField.inputType;
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
        };
        InputReflection.prototype.setErrorMessageVisibility = function (value) {
            this.validate();
            this.showErrorMessage = value;
            this.setValidationText();
        };
        return InputReflection;
    }(Reflection));

    var SectionReflection = (function (_super) {
        __extends(SectionReflection, _super);
        function SectionReflection(sectionField, reflector, baseElement, parentSectionReflection) {
            var _this = _super.call(this) || this;
            _this.parentSectionReflection = parentSectionReflection;
            _this.subReflections = [];
            _this.constructReflection(sectionField, reflector, baseElement, parentSectionReflection);
            return _this;
        }
        SectionReflection.prototype.constructReflection = function (sectionField, reflector, baseElement, parentSectionReflection) {
            this.onValueChange = new Subject();
            this.initialField = sectionField;
            var inheritedSection = sectionField.root ? this : parentSectionReflection;
            reflector.expand(baseElement, sectionField, this);
        };
        SectionReflection.prototype.valueChanged = function () {
            this.rawValue = this.collectSectionData();
            if (this.parentSectionReflection) {
                this.parentSectionReflection.valueChanged();
            }
            else {
                this.onValueChange.notify();
            }
        };
        SectionReflection.prototype.getValue = function (mode, showGhost) {
            return this.collectSectionData(mode);
        };
        SectionReflection.prototype.dataCollection = function (mode, callback) {
            var usefulReflections = this.subReflections.filter(function (a) { return a.initialField.isInput || a.initialField.isSection; });
            for (var reflectionIndex = 0; reflectionIndex < usefulReflections.length; reflectionIndex++) {
                var reflection = usefulReflections[reflectionIndex];
                if (reflection.initialField.isInput) {
                    var inputReflection = reflection;
                    if (inputReflection.value)
                        callback(inputReflection.value, inputReflection.initialField.name);
                }
                else if (reflection.initialField.isSection) {
                    var sectionReflection = reflection;
                    var value = sectionReflection.collectSectionData(mode);
                    if (value && ((typeof value != "object") || Object.keys(value).length > 0))
                        callback(value, sectionReflection.initialField.name);
                }
            }
        };
        SectionReflection.prototype.convertDataByMode = function (data, mode) {
            if ((mode === "final") && (this.initialField.convertToFinalValue)) {
                return this.initialField.convertToFinalValue(data);
            }
            else
                return data;
        };
        SectionReflection.prototype.collectSectionData = function (mode) {
            if (mode === void 0) { mode = "final"; }
            if (this.initialField.arraySectionRaw) {
                var array_1 = [];
                this.dataCollection(mode, function (value) {
                    array_1.push(value);
                });
                return this.convertDataByMode(array_1, mode);
            }
            else {
                var objectMap_1 = {};
                this.dataCollection(mode, function (value, name) {
                    objectMap_1[name] = value;
                });
                return this.convertDataByMode(objectMap_1, mode);
            }
        };
        SectionReflection.prototype.collectValidationErrors = function () {
            var fieldNameHeader = this.initialField.name ? this.initialField.name + "." : '';
            var errorList = {};
            for (var subFieldIndex = 0; subFieldIndex < this.subReflections.length; subFieldIndex++) {
                var subReflection = this.subReflections[subFieldIndex];
                if (subReflection.initialField.isInput) {
                    var inputReflection = subReflection;
                    inputReflection.validate();
                    errorList[fieldNameHeader + subReflection.initialField.name] = inputReflection.validationErrors;
                }
                else if (subReflection.initialField.isSection) {
                    var subReflectionValidationErrors = subReflection.collectValidationErrors();
                    for (var key in subReflectionValidationErrors) {
                        if (Object.prototype.hasOwnProperty.call(subReflectionValidationErrors, key)) {
                            var validationErrorMap = subReflectionValidationErrors[key];
                            if (validationErrorMap != null && (Object.keys(validationErrorMap).length > 0))
                                errorList[fieldNameHeader + key] = validationErrorMap;
                        }
                    }
                }
            }
            return errorList;
        };
        SectionReflection.prototype.setValue = function (data) {
            if (data instanceof Object) {
                var dataAsObj = data;
                for (var key in dataAsObj) {
                    if (Object.prototype.hasOwnProperty.call(dataAsObj, key)) {
                        var value = dataAsObj[key];
                        if ((typeof value != "function") &&
                            (key != "__proto__")) {
                            var reflection = this.findSubReflectionByName(key);
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
        };
        SectionReflection.prototype.findSubReflectionByName = function (key) {
            var _a;
            return (_a = this.subReflections) === null || _a === void 0 ? void 0 : _a.find(function (refl) { return refl.initialField.name === key; });
        };
        SectionReflection.prototype.setErrorMessageVisibility = function (value) {
            for (var reflectionIndex = 0; reflectionIndex < this.subReflections.length; reflectionIndex++) {
                var reflection = this.subReflections[reflectionIndex];
                reflection.setErrorMessageVisibility(value);
            }
        };
        return SectionReflection;
    }(Reflection));

    var Reflector = (function () {
        function Reflector(rootManifest) {
            this.rootManifest = rootManifest;
            this.idMap = {};
            this.onValueChange = new Subject();
        }
        Reflector.prototype.expandThere = function (elementOrSelector) {
            var _this = this;
            this.baseElement = null;
            if (typeof elementOrSelector === "string") {
                this.baseElement = document.querySelector(elementOrSelector);
            }
            else {
                this.baseElement = elementOrSelector;
            }
            if (this.baseElement) {
                this.rootSectionReflection = new SectionReflection(this.rootManifest, this, this.baseElement, null);
                this.rootSectionReflection.onValueChange.subscribe(new EventObserve(function (value) {
                    _this.onValueChange.notify(value);
                }));
            }
            else {
                throw "No provided element. Please make sure element is not null";
            }
        };
        Reflector.prototype.expand = function (baseElement, initialField, parentSectionReflection) {
            var _a;
            var fields = initialField.content, reflections = [];
            if (fields instanceof Array) {
                for (var index = 0; index < fields.length; index++) {
                    var field = fields[index];
                    var reflection = void 0;
                    if (field.isSection) {
                        reflection = new SectionReflection(field, this, baseElement, parentSectionReflection);
                    }
                    if (field.isElement) {
                        var elementField = field;
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
        };
        Reflector.prototype.findReflectionById = function (id) {
            return this.idMap[id];
        };
        Reflector.prototype.getValue = function (final) {
            if (final === void 0) { final = true; }
            return this.rootSectionReflection.getValue(final ? "final" : "raw");
        };
        Reflector.prototype.patchValue = function (data, isIntegrityImportant) {
            this.rootSectionReflection.setValue(data);
        };
        Reflector.prototype.collectValidationErrors = function () {
            return this.rootSectionReflection.collectValidationErrors();
        };
        Reflector.prototype.setErrorMessageVisibility = function (visible) {
            this.rootSectionReflection.setErrorMessageVisibility(visible);
        };
        return Reflector;
    }());



    var Reform = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ElementField: ElementField,
        InputField: InputField,
        InitialFied: InitialFied,
        RootSectionField: RootSectionField,
        SectionField: SectionField,
        EmailValidator: EmailValidator,
        NotEmpty: NotEmpty,
        NeedToBeTrue: NeedToBeTrue,
        MinimumNumber: MinimumNumber,
        MaximumNumber: MaximumNumber,
        NumberGreaterThan: NumberGreaterThan,
        NumberLessThan: NumberLessThan,
        Reflector: Reflector,
        Reflection: Reflection,
        InputReflection: InputReflection,
        SectionReflection: SectionReflection,
        ElementReflection: ElementReflection,
        ObjectFieldTransfer: ObjectFieldTransfer,
        createElement: createElement,
        Observer: Observer,
        Subject: Subject,
        EventObserve: EventObserve
    });

    window["Reform"] = Reform;

}());
//# sourceMappingURL=reform.js.map
