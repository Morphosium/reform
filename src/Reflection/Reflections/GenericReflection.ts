import { Reflection } from "./Reflection";
import { SectionReflection } from "./SectionReflection";

export abstract class GenericReflection extends Reflection {
   abstract parentSectionReflection : SectionReflection
}