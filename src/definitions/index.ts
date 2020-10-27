import { manifesto } from "./Manifesto";
import { ElementField } from "./ManifestoField/ElementField/ElementField";
import { InputField } from "./ManifestoField/FormInputField/FormInputField";

// const manifest = manifesto({
//     content: [
//         new ElementField({
//             tag: "div",
//             classes: ["request-form"],
//             content: [
//                 new ElementField({
//                     tag: "div",
//                     content: [
//                         new InputField({
//                             inputType: "check",
//                             name: "yes",
//                         })
//                     ]
//                 }),
//                 new ElementField({
//                     tag: "div",
//                     content: [
//                         new InputField({
//                             inputType: "check",
//                             name: "definitely",
//                         })
//                     ]
//                 }),
//                 new ElementField({
//                     tag: "div",
//                     content: [
//                         new InputField({
//                             inputType: "check",
//                             name: "absolutely",
//                         })
//                     ]
//                 }),
//             ]
//         })
//     ]
// })