import { ISubject } from './ISubject';
import {IObserver } from "./IObserver";


export abstract class Observer implements IObserver {
    abstract update(subject: ISubject, param : any): void;
}
