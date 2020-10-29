import { IElementField } from "../Definitions/index";
import { Reflection } from "./Reflection";

export class ElementReflection extends Reflection {
    manifest : IElementField;
    element : HTMLElement;
}