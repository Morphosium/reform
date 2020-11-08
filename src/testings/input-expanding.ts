import { ElementField, IElementField, IInitialFied, IInputField, InputField, RootSectionField, SectionField } from "../Definitions/index";
import { EventObserve } from "../Utils/Reactivity/EventObverser";
import { Reflector } from "../Reflection/Reflector";


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
                    label: "İsim"
                }
            ),
            new InputField(
                {
                    inputType: "text",
                    name: "lastName",
                    label: "Soyad"
                }
            ),
            new InputField(
                {
                    inputType: "text",
                    name: "email",
                    label: "E-Posta",
                    convertToFinalValue: (rawValue) => rawValue.trim()
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
        })
    ]
}));

reflector.expandThere("div#base");
reflector.onValueChange.subscribe(
    new EventObserve(
        () => {

            //TODO: Fetch different ways 
            const el = document.getElementById("jsonOutput"),
                a = reflector.getValue(true);
            el.textContent = JSON.stringify(a, null, '\t');
        })
)