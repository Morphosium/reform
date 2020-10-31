import { InputField, RootSectionField } from "../Definitions/index";
import { Reflector } from "../Reflection/Reflector";

const reflector = new Reflector(new RootSectionField({
    content: [
        new InputField(
            {
                inputType: "text",
                name: "Name",
                label: "İsim"
            }
        ),
        new InputField(
            {
                inputType: "text",
                name: "Name",
                label: "İsim"
            }
        ),
    ]
}));

reflector.expandThere("div#base")