import { InputField, RootSectionField } from "../Definitions/index";
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
    ]
}));

reflector.expandThere("div#base")