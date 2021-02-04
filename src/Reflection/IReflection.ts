import { Reflector } from "./Reflector";
import { IInitialField } from "../Definitions/InitialFields/InitialField/index";
import { SectionReflection } from "./Reflections/SectionReflection";

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