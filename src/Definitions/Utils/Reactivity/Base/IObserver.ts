import { ISubject } from './ISubject';



export interface IObserver {
    update(subject: ISubject, param : any): void;
}
