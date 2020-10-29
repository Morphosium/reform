import { IManifesto } from "../Definitions/Manifesto";
import { IElementField } from "../Definitions/ManifestoField/ElementField/index";
import { IManifestoField } from "../Definitions/ManifestoField/ManifestoField/IManifestoField";
import { RootSectionField } from "../Definitions/ManifestoField/SectionField/index";

export abstract class Reflection {
  manifest : IManifestoField;
}