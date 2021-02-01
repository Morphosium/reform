import { ISubject } from './ISubject';

/**
 * Basic observable structure for listening events
 */
export interface IObserver<T = any> {
    update(subject: ISubject, param : T): void;
}
