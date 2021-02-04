"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
/**
 * Basic subject structure for event emitting without extra installations
 */
class Subject {
    constructor() {
        /**
         * Subscribed observers
         */
        this.observers = [];
    }
    notify(param) {
        for (const observer of this.observers) {
            observer.update(this, param);
        }
    }
    subscribe(observer) {
        if (this.observers.indexOf(observer) == -1)
            this.observers.push(observer);
    }
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1)
            this.observers.splice(index, 1);
    }
}
exports.Subject = Subject;
