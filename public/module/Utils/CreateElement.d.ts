import { Reflector } from "../Reflection/Reflector";
import { IElementField } from "../Definitions/InitialFields/index";
import { ElementReflection } from "../Reflection/index";
/**
 * Creates and returns a HTML Element by Element initial field
 * @param elementField A Element field instance for binding attributes and events and etc
 */
export declare function createElement(reflection: ElementReflection, reflector: Reflector, elementField: IElementField): HTMLElement;
