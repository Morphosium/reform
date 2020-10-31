import { Observer } from './Observer.class';

export interface ISubject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(param : any): void;
}
