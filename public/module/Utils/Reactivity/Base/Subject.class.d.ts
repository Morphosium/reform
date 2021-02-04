import { ISubject } from './ISubject';
import { Observer } from './Observer.class';
/**
 * Basic subject structure for event emitting without extra installations
 */
export declare class Subject<T = any> implements ISubject<T> {
    /**
     * Subscribed observers
     */
    private observers;
    notify(param: T): void;
    subscribe(observer: Observer<T>): void;
    unsubscribe(observer: Observer<T>): void;
}
