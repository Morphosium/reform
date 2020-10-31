import { ISubject } from './ISubject';
import { Observer } from './Observer.class';

export class Subject implements ISubject {

    observers: Observer[] = [];

    notify(param : any): void {
        for (const observer of this.observers) {
            observer.update(this, param);
        }
    }

    subscribe(observer: Observer): void {
        if (this.observers.indexOf(observer) == -1)
            this.observers.push(observer);
    }
    unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) this.observers.splice(index, 1);
    }
}