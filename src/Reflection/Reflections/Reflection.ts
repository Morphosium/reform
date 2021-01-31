
import { IInitialField, ISectionField } from "../../Definitions/index";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";

export abstract class Reflection {
  initialField: IInitialField;
  reflector: Reflector;

  abstract parentSectionReflection: SectionReflection;

  abstract constructReflection(sectionField: IInitialField,
    reflector: Reflector,
    baseElement: HTMLElement,
    parentSectionReflection: SectionReflection): void;

  /**Sets error message visibility */
  abstract setErrorMessageVisibility(value: boolean): void;
}