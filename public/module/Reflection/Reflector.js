"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reflector = void 0;
const Subject_class_1 = require("../Utils/Reactivity/Base/Subject.class");
const EventObverser_1 = require("../Utils/Reactivity/EventObverser");
const ElementReflection_1 = require("./Reflections/ElementReflection");
const InputReflection_1 = require("./Reflections/InputReflection");
const SectionReflection_1 = require("./Reflections/SectionReflection");
class Reflector {
    constructor(rootManifest) {
        this.rootManifest = rootManifest;
        this.idMap = {};
        this.onValueChange = new Subject_class_1.Subject();
    }
    /**
     * Constructs form to provided element
     * @param elementOrSelector Provided element or element's query (like ```"#form"```) will be provided
     */
    expandThere(elementOrSelector) {
        this.baseElement = null;
        if (typeof elementOrSelector === "string") {
            this.baseElement = document.querySelector(elementOrSelector);
        }
        else {
            this.baseElement = elementOrSelector;
        }
        if (this.baseElement) {
            this.rootSectionReflection = new SectionReflection_1.SectionReflection(this.rootManifest, this, this.baseElement, null);
            this.rootSectionReflection.onValueChange.subscribe(new EventObverser_1.EventObserve(value => {
                this.onValueChange.notify(value);
            }));
        }
        else {
            throw "No provided element. Please make sure element is not null";
        }
    }
    /**
     * Expands stated initial fields into a base element. Returns reflection instances of initial field contents these are expanded now
     * @param baseElement the element where is expanded in
     * @param initialField the initial parent will be expanded
     * @param parentSectionReflection the parent section reflection of that initial field
     */
    expand(baseElement, initialField, parentSectionReflection) {
        var _a;
        /** in section, no element changes, content expanded into same element
         * in element, new element will be created and contents expanded into them
         */
        const fields = initialField.content, reflections = [];
        if (fields instanceof Array) {
            for (let index = 0; index < fields.length; index++) {
                const field = fields[index];
                let reflection;
                if (field.isSection) {
                    reflection = new SectionReflection_1.SectionReflection(field, this, baseElement, parentSectionReflection);
                }
                if (field.isElement) {
                    const elementField = field;
                    reflection = new ElementReflection_1.ElementReflection(elementField, this, baseElement, parentSectionReflection);
                }
                if (field.isInput) {
                    reflection = new InputReflection_1.InputReflection(field, this, baseElement, parentSectionReflection);
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
    /**
     * Finds reflection by id that provided in initial field
     * @param id id field of initial field before reflected
     */
    findReflectionById(id) {
        return this.idMap[id];
    }
    /**
     * Returns value of form
     * @param final if final is true and any section has convertToFinalValue method,
     * section value is will be return of convertToFinalValue method
     */
    getValue(final = true) {
        return this.rootSectionReflection.getValue(final ? "final" : "raw");
    }
    /**
     * Sets value of root section by corresponding fields
     * @param data incoming data
     * @param isIntegrityImportant (Not stable) when missing fields on all sections, exception will be raised
     */
    patchValue(data, isIntegrityImportant = false) {
        //TODO: integrity
        this.rootSectionReflection.setValue(data);
    }
    /**
     * Collects all validation error and presents them like:
     * {
     *   'age': {atLeast: ...},
     *   'name': {required: ...},
     *   'email': {required: ...},
     *   'address.city': {required: ...}
     * }
     * (3 input and 1 section field contains 'city' input)
     */
    collectValidationErrors() {
        return this.rootSectionReflection.collectValidationErrors();
    }
    /**
     * Sets validation error messages visibility
     * @param visible
     */
    setErrorMessageVisibility(visible) {
        this.rootSectionReflection.setErrorMessageVisibility(visible);
    }
}
exports.Reflector = Reflector;
