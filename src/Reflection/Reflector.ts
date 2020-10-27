import { IManifesto } from "../definitions/Manifesto";
import { IManifestoField } from "../definitions/ManifestoField/ManifestoField/IManifestoField";

export class Reflection {
    baseElement: HTMLElement;
    constructor(public manifesto : IManifesto) {

    }

    expandThere(elementOrSelector : HTMLElement | string) {
        this.baseElement = null;
        if (typeof elementOrSelector === "string") {
            this.baseElement = document.querySelector(elementOrSelector);
        }
        else {
            this.baseElement = elementOrSelector;
        }

        this.expand(this.baseElement, this.manifesto);
    }

    expand(baseElement: HTMLElement, manifesto: IManifesto | IManifestoField) {

    }

    
}