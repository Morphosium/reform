import { ISubject } from './ISubject';
import { Observer } from './Observer.class';
export declare class Subject<T = any> implements ISubject<T> {
    observers: Observer<T>[];
    notify(param: T): void;
    subscribe(observer: Observer<T>): void;
    unsubscribe(observer: Observer<T>): void;
}
//# sourceMappingURL=Subject.class.d.ts.map