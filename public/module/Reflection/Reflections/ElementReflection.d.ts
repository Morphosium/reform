import { IElementField } from "../../Definitions/index";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";
import { IReflection } from "../IReflection";
/**
 * ElementReflection class is a reflection class for arrange visual and structural
 * arrangement
 */
export declare class ElementReflection implements IReflection {
    initialField: IElementField;
    reflector: Reflector;
    baseParentalElement: HTMLElement;
    parentSectionReflection: SectionReflection;
    element: HTMLElement;
    subReflections: IReflection[];
    constructor(initialField: IElementField, reflector: Reflector, baseParentalElement: HTMLElement, parentSectionReflection: SectionReflection);
    /**
     * Created an element and reflector extracts into created element if content is not string, etc...
     * */
    constructReflection(): void;
    getElementByName(name: string): IReflection;
    setErrorMessageVisibility(value: boolean): void;
}
