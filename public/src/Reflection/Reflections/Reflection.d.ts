import { IInitialFied } from "../../Definitions/index";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";
export declare abstract class Reflection {
    initialField: IInitialFied;
    reflector: Reflector;
    abstract parentSectionReflection: SectionReflection;
    abstract constructReflection(sectionField: IInitialFied, reflector: Reflector, baseElement: HTMLElement, parentSectionReflection: SectionReflection): void;
    abstract setErrorMessageVisibility(value: boolean): void;
}
//# sourceMappingURL=Reflection.d.ts.map