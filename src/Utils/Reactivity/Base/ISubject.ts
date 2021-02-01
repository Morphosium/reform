import { Observer } from './Observer.class';

/**
 * Basic subject structure for event emitting without extra installations
 */
export interface ISubject<T = any> {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    
    /**
    * Triggers subscribed observers with provided value
    * @param param 
    */
    notify(param: T): void;
}
