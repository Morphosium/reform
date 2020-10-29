import { ElementReflection } from "../../Reflection/ElementReflection";

export type ElementFieldEventBinding = { [eventKey: string]: Array<((reflection: ElementReflection, event: Event) => any)> };