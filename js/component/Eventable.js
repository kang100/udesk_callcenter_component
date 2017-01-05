import Utils from './Tools';
import _ from 'lodash';

export default class Eventable {
    constructor() {
        this.eventMap = {
            'change': []
        }
    }

    set(k, v) {
        if (this[k] === v) {
            return;
        }
        this[k] = v;
        this.fire('change', k, v, this);
    };

    fire() {
        let eventName = arguments[0];
        let events = this.eventMap[eventName];
        let args = [].splice.call(arguments, 1);
        for (let i = 0, len = events.length; i < len; i++) {
            Utils.isFunction(events[i]) && events[i].apply(this, args);
        }
    };

    on(eventName, callback) {
        this.eventMap[eventName].push(callback);
    }

    off(eventName, callback) {
        _.remove(this.eventMap[eventName], (i) => i === callback);
    }
}
