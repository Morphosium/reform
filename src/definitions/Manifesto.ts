import { ISectionField, ISectionFieldInitial, SectionField } from "./ManifestoField/SectionField/index";

export interface IManifesto {
    rootSection: ISectionField;
}

export class Manifesto implements IManifesto {

    rootSection: ISectionField;

    constructor(rootSectionBase: ISectionFieldInitial) {
        this.rootSection = new SectionField(rootSectionBase);
    }
}

export interface ManifestoConstructor {
    new (rootSectionBase: ISectionFieldInitial) : Manifesto
    (rootSectionBase: ISectionFieldInitial) : Manifesto
}


export const manifesto = function(rootSectionBase: ISectionFieldInitial) { return new Manifesto(rootSectionBase) };