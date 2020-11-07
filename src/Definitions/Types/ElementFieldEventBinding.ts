import { ElementReflection } from "../../Reflection/Reflections/ElementReflection";
import { Reflector } from "../../Reflection/Reflector";

export type ElementFieldEventBinding = { [eventKey: string]: Array<((reflection: ElementReflection, event: Event, reflector : Reflector) => any)> };