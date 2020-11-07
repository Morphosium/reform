import { ElementField, InputField, RootSectionField, SectionField } from "../Definitions/index";
import { EventObserve } from "../Definitions/Utils/Reactivity/EventObverser";
import { Reflector } from "../Reflection/Reflector";

const reflector = new Reflector(new RootSectionField({
    content: [
        new ElementField({
            content: [
                new ElementField({
                    content: [
                        new InputField(
                            {
                                inputType: "text",
                                name: "firstName",
                                label: "İsim"
                            }
                        ),
                    ],
                    class: "col-6"
                }),
                new ElementField({
                    content: [
                        new InputField(
                            {
                                inputType: "text",
                                name: "lastName",
                                label: "Soyisim"
                            }
                        ),
                    ],
                    class: "col-6"
                })
            ],
            tag: "div",
            class: "row"
        }),
        new ElementField({
            content: [
                new ElementField({
                    content: [
                        new InputField(
                            {
                                inputType: "text",
                                name: "email",
                                label: "E-Posta"
                            }
                        ),
                    ],
                    class: "col-6"
                }),
                new ElementField({
                    content: [
                        new InputField(
                            {
                                inputType: "text",
                                name: "phone",
                                label: "Telefon"
                            }
                        ),
                    ],
                    class: "col-6"
                })
            ],
            tag: "div",
            class: "row"
        }),

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