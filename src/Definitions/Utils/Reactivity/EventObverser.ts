import { Observer } from './Base/Observer.class';
import { ISubject } from './Base/ISubject';

export class EventObserve<T = any> extends Observer<T> {

    constructor(private updateEvent: (param : T) => any) {
        super();
    }

    update(subject: ISubject, param : T): void {
        this.updateEvent(param);
    }

}
