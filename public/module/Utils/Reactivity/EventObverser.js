"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventObserve = void 0;
const Observer_class_1 = require("./Base/Observer.class");
class EventObserve extends Observer_class_1.Observer {
    constructor(updateEvent) {
        super();
        this.updateEvent = updateEvent;
    }
    update(subject, param) {
        this.updateEvent(param);
    }
}
exports.EventObserve = EventObserve;
