import { Observer } from './Observer.class';
export interface ISubject<T = any> {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(param: T): void;
}
