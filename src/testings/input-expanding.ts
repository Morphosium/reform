import { ElementField, IElementField, IInitialFied, IInputField, InputField, RootSectionField, SectionField } from "../Definitions/index";
import { EventObserve } from "../Utils/Reactivity/EventObverser";
import { Reflector } from "../Reflection/Reflector";
import { EmailValidator, NotEmpty } from "../InputValidations/Validations";

let finalMode = false;

const rowElement = (content: string | IElementField[]) => {
    return new ElementField(
        {
            tag: "div",
            class: "row",
            content
        }
    )
}


const columnElements = (column: number, singleContents: Array<IInputField | IElementField>) => {

    return rowElement([
        ...singleContents.map(
            field => {
                return new ElementField(
                    {
                        tag: "div",
                        class: `col-${column}`,
                        content: [field]
                    }
                )
            }
        )]);

}

const reflector = new Reflector(new RootSectionField({
    content: [
        columnElements(6, [
            new InputField(
                {
                    inputType: "text",
                    name: "firstName",
                    label: "İsim",
                    validations: [new NotEmpty()]
                }
            ),
            new InputField(
                {
                    inputType: "text",
                    name: "lastName",
                    label: "Soyad",
                    validations: [new NotEmpty()]
                }
            ),
            new InputField(
                {
                    inputType: "text",
                    name: "email",
                    label: "E-Posta",
                    convertToFinalValue: (rawValue) => rawValue.trim(),
                    validations: [
                        new EmailValidator()
                    ]

                }
            ),
            new InputField(
                {
                    inputType: "text",
                    name: "phone",
                    label: "Telefon",
                    convertToFinalValue: (rawValue) => rawValue.replace(/\s/g, "")
                }
            ),
        ]),




        new SectionField({
            name: "Address",
            content: [
                new ElementField({
                    class: "h1",
                    content: "Adres bilgileri"
                }),
                columnElements(12,
                    [
                        new InputField({
                            inputType: "text",
                            name: "city",
                            label: "Şehir",
                            inputClass: "w-100"
                        }),
                        new InputField({
                            inputType: "text",
                            name: "street",
                            label: "Mahalle",
                            inputClass: "w-100"
                        })]
                )
            ]
        }),

        new SectionField({
            name: "agreements",
            content: [
                new InputField({
                    inputType: "checkbox",
                    name: "agreement1",
                    label: "Şunun şeylerini kabul ediyorum",
                }),
                new InputField({
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
reflector.onValueChange.subscribe(
    new EventObserve(
        () => {
            updateOutput()
        })
)
//@ts-ignore
window["setFinalMode"] = (fmode: boolean) => {
    finalMode = fmode
    updateOutput()
}

function updateOutput() {

    //TODO: Fetch different ways 
    const el = document.getElementById("jsonOutput"),
        a = reflector.getValue(finalMode);
    el.textContent = JSON.stringify(a, null, '\t');
    console.info(reflector.rootSectionReflection.collectValidationErrors());
}

function jsonInputApply() {
    const jsonInput = document.getElementById("jsonInput") as HTMLTextAreaElement;
    try {
        const obj = JSON.parse(jsonInput?.value)
        if (obj) {
            reflector.patchValue(obj)
        }
    } catch (error) {
        console.warn(error)
    }
}
//@ts-ignore
window["jsonInputApply"] = jsonInputApply;