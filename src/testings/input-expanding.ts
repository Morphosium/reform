import { InputField, RootSectionField, SectionField } from "../Definitions/index";
import { EventObserve } from "../Definitions/Utils/Reactivity/EventObverser";
import { Reflector } from "../Reflection/Reflector";

const reflector = new Reflector(new RootSectionField({
    content: [
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
                label: "Soyisim"
            }
        ),
        new InputField(
            {
                inputType: "text",
                name: "email",
                label: "E-Posta"
            }
        ),
        new InputField(
            {
                inputType: "text",
                name: "phone",
                label: "Telefon"
            }
        ),


        new SectionField({
            name: "Address",
            content: [
                new InputField({
                    inputType: "text",
                    name: "city",
                    label: "Şehir"
                }),
                new InputField({
                    inputType: "text",
                    name: "street",
                    label: "Mahalle"
                }),
            ]
        })
    ]
}));

reflector.expandThere("div#base");
reflector.onValueChange.subscribe(
    new EventObserve(a => {
        const el = document.getElementById("jsonOutput");
        el.textContent = JSON.stringify(a);
    })
)