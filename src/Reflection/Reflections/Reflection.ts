
import { IInitialFied } from "../../Definitions/index";
import { Reflector } from "../Reflector";
import { SectionReflection } from "./SectionReflection";

export abstract class Reflection {
  initialField : IInitialFied;
  reflector : Reflector;
  abstract parentSectionReflection : SectionReflection;
}