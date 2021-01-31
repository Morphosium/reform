import { ISubject } from './ISubject';
import { IObserver } from "./IObserver";
export declare abstract class Observer<T = any> implements IObserver<T> {
    abstract update(subject: ISubject, param: T): void;
}
//# sourceMappingURL=Observer.class.d.ts.map