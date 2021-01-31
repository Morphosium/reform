import { ElementReflection } from "../../Reflection/Reflections/ElementReflection";
import { Reflector } from "../../Reflection/Reflector";
export declare type ElementFieldEventBinding = {
    [eventKey: string]: Array<((reflection: ElementReflection, event: Event, reflector: Reflector) => any)>;
};
//# sourceMappingURL=ElementFieldEventBinding.d.ts.map