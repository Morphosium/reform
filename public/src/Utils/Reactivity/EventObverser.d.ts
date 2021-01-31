import { Observer } from './Base/Observer.class';
import { ISubject } from './Base/ISubject';
export declare class EventObserve<T = any> extends Observer<T> {
    private updateEvent;
    constructor(updateEvent: (param: T) => any);
    update(subject: ISubject, param: T): void;
}
//# sourceMappingURL=EventObverser.d.ts.map