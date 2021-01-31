"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../Definitions/index");
const EventObverser_1 = require("../Utils/Reactivity/EventObverser");
const Reflector_1 = require("../Reflection/Reflector");
const Validations_1 = require("../InputValidations/Validations");
let finalMode = false;
const rowElement = (content) => {
    return new index_1.ElementField({
        tag: "div",
        class: "row",
        content
    });
};
const columnElements = (column, singleContents) => {
    return rowElement([
        ...singleContents.map(field => {
            return new index_1.ElementField({
                tag: "div",
                class: `col-${column}`,
                content: [field]
            });
        })
    ]);
};
const reflector = new Reflector_1.Reflector(new index_1.RootSectionField({
    content: [
        columnElements(6, [
            new index_1.InputField({
                inputType: "text",
                name: "firstName",
                label: "İsim",
                validations: [new Validations_1.NotEmpty()]
            }),
            new index_1.InputField({
                inputType: "text",
                name: "lastName",
                label: "Soyad",
                validations: [new Validations_1.NotEmpty()]
            }),
            new index_1.InputField({
                inputType: "text",
                name: "email",
                label: "E-Posta",
                convertToFinalValue: (rawValue) => rawValue.trim(),
                validations: [
                    new Validations_1.EmailValidator()
                ]
            }),
            new index_1.InputField({
                inputType: "text",
                name: "phone",
                label: "Telefon",
                convertToFinalValue: (rawValue) => rawValue === null || rawValue === void 0 ? void 0 : rawValue.replace(/\s/g, "")
            }),
        ]),
        new index_1.SectionField({
            name: "Address",
            content: [
                new index_1.ElementField({
                    class: "h1",
                    content: "Adres bilgileri"
                }),
                columnElements(12, [
                    new index_1.InputField({
                        inputType: "text",
                        name: "city",
                        label: "Şehir",
                        inputClass: "w-100"
                    }),
                    new index_1.InputField({
                        inputType: "text",
                        name: "street",
                        label: "Mahalle",
                        inputClass: "w-100"
                    })
                ])
            ]
        }),
        new index_1.SectionField({
            name: "agreements",
            content: [
                new index_1.InputField({
                    inputType: "checkbox",
                    name: "agreement1",
                    label: "Şunun şeylerini kabul ediyorum",
                }),
                new index_1.InputField({
                    inputType: "checkbox",
                    name: "agreement2",
                    label: "Onun şeylerini kabul ediyorum"
                }),
            ],
            convertToFinalValue: (raw) => raw.agreement1 && raw.agreement2
        })
    ]
}));
reflector.expandThere("div#base");
reflector.onValueChange.subscribe(new EventObverser_1.EventObserve(() => {
    updateOutput();
}));
//@ts-ignore
window["setFinalMode"] = (fmode) => {
    finalMode = fmode;
    updateOutput();
};
function updateOutput() {
    //TODO: Fetch different ways 
    const el = document.getElementById("jsonOutput"), a = reflector.getValue(finalMode);
    el.textContent = JSON.stringify(a, null, '\t');
    console.info(reflector.rootSectionReflection.collectValidationErrors());
}
function jsonInputApply() {
    const jsonInput = document.getElementById("jsonInput");
    try {
        const obj = JSON.parse(jsonInput === null || jsonInput === void 0 ? void 0 : jsonInput.value);
        if (obj) {
            reflector.patchValue(obj);
            this.updateOutput();
        }
    }
    catch (error) {
        console.warn(error);
    }
}
function submitForm() {
    reflector.setErrorMessageVisibility(true);
}
//@ts-ignore
window["jsonInputApply"] = jsonInputApply;
//@ts-ignore
window["submitForm"] = submitForm;
