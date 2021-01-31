import { ISectionField, ISectionFieldBase } from "./InitialFields/SectionField/index";
export interface IReformInitial {
    rootSection: ISectionField;
}
export declare class ReformInitial implements IReformInitial {
    rootSection: ISectionField;
    constructor(rootSectionBase: ISectionFieldBase);
}
export interface ManifestoConstructor {
    new (rootSectionBase: ISectionFieldBase): ReformInitial;
    (rootSectionBase: ISectionFieldBase): ReformInitial;
}
export declare const reformInitial: (rootSectionBase: ISectionFieldBase) => ReformInitial;
//# sourceMappingURL=Manifesto.d.ts.map