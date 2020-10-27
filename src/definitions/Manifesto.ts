import { ISectionField, ISectionFieldBase, SectionField } from "./ManifestoField/SectionField/index";

export interface IManifesto {
    rootSection: ISectionField;
}

export class Manifesto implements IManifesto {

    rootSection: ISectionField;

    constructor(rootSectionBase: ISectionFieldBase) {
        this.rootSection = new SectionField(rootSectionBase);
    }
}

export interface ManifestoConstructor {
    new (rootSectionBase: ISectionFieldBase) : Manifesto
    (rootSectionBase: ISectionFieldBase) : Manifesto
}


export const manifesto = function(rootSectionBase: ISectionFieldBase) { return new Manifesto(rootSectionBase) };