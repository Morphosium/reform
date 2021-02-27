import { Reflector } from "./Reflector";
import { IInitialField } from "../Definitions/InitialFields/InitialField/index";
import { SectionReflection } from "./Reflections/SectionReflection";
/**
 * That interface defines it reads form instructions (named `InitialField`).
 * And after that, `constructReflection()` method is called that builds from InitialField.
 * Each Reflection has special InitialFields. Reflection is created and `constructReflection` method is called by `reflector.expand` method.
 * After construction is completed and has child initial fields, that need to call `reflector.expand` method
 * * If that is section or element, that reflection is passes itself to extract into special field.
 */
export interface IReflection {
    /** form instructions that assigned to Reflection */
    initialField: IInitialField;
    /** Reflector that building form */
    reflector: Reflector;
    /**Currently parent element */
    baseParentalElement: HTMLElement;
    /**Currently parent section */
    parentSectionReflection: SectionReflection;
    /**
    * Constructs new reflection with provided initialField
    */
    constructReflection(): void;
    /**
     * Sets validation error messages visibility
     * @param visible
     */
    setErrorMessageVisibility(value: boolean): void;
}
