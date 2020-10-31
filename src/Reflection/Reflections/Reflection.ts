import { IManifesto } from "../../Definitions/Manifesto";
import { IElementField } from "../../Definitions/ManifestoField/ElementField/index";
import { IInitialFied } from "../../Definitions/ManifestoField/InitialField/IInitialField";
import { RootSectionField } from "../../Definitions/ManifestoField/SectionField/index";
import { Reflector } from "../Reflector";

export abstract class Reflection {
  manifest : IInitialFied;
  reflector : Reflector;
}