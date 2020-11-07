import { ISubject } from './ISubject';
import { Observer } from './Observer.class';

export class Subject<T = any> implements ISubject<T> {

    observers: Observer<T>[] = [];

    notify(param : T): void {
        for (const observer of this.observers) {
            observer.update(this, param);
        }
    }

    subscribe(observer: Observer<T>): void {
        if (this.observers.indexOf(observer) == -1)
            this.observers.push(observer);
    }
    unsubscribe(observer: Observer<T>): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) this.observers.splice(index, 1);
    }
}