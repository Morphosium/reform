import { Reflector } from "Reflection/index";
import { IInitialField } from "../../Definitions/InitialFields/InitialField/index";
import { SectionReflection } from "./SectionReflection";
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
    setErrorMessageVisibility(value: boolean): void;
}
