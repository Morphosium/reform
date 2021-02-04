import { IInitialField } from "../../Definitions/index";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";
/**
 * @deprecated
 */
export declare abstract class Reflection {
    initialField: IInitialField;
    reflector: Reflector;
    abstract parentSectionReflection: SectionReflection;
    /**
     * Constructs new reflection with provided initialField
     * @param initialField form instructions that assigned to Reflection
     * @param reflector Reflector that building form.
     * @param baseElement Currently parent element
     * @param parentSectionReflection Currently parent section
     */
    abstract constructReflection(initialField: IInitialField, reflector: Reflector, baseElement: HTMLElement, parentSectionReflection: SectionReflection): void;
    /**Sets error message visibility */
    abstract setErrorMessageVisibility(value: boolean): void;
}
