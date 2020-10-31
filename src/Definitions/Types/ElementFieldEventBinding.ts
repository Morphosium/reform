import { ElementReflection } from "../../Reflection/Reflections/ElementReflection";

export type ElementFieldEventBinding = { [eventKey: string]: Array<((reflection: ElementReflection, event: Event) => any)> };