import { ISectionField, ISectionFieldBase, SectionField } from "./InitialFields/SectionField/index";

export interface IReformInitial {
    rootSection: ISectionField;
}

export class ReformInitial implements IReformInitial {

    rootSection: ISectionField;

    constructor(rootSectionBase: ISectionFieldBase) {
        this.rootSection = new SectionField(rootSectionBase);
    }
}

export interface ManifestoConstructor {
    new (rootSectionBase: ISectionFieldBase) : ReformInitial
    (rootSectionBase: ISectionFieldBase) : ReformInitial
}


export const reformInitial = function(rootSectionBase: ISectionFieldBase) { return new ReformInitial(rootSectionBase) };