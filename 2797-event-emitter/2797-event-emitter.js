class EventEmitter {
    constructor() {
        this.events = {};
        this.subscriptions = [];
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        const subscriptionIndex = this.subscriptions.length;
        this.subscriptions.push({
            eventName: eventName,
            callback: callback
        });

        return {
            unsubscribe: () => {
                const eventCallbacks = this.events[eventName];
                if (eventCallbacks) {
                    const callbackIndex = eventCallbacks.indexOf(callback);
                    if (callbackIndex !== -1) {
                        eventCallbacks.splice(callbackIndex, 1);
                    }
                }

                this.subscriptions[subscriptionIndex] = null;
                
                return undefined;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName] || this.events[eventName].length === 0) {
            return [];
        }

        const results = [];
        for (const callback of this.events[eventName]) {
            results.push(callback(...args));
        }
        
        return results;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */