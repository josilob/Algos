// Create an 'eventing' library out of the Events class.
// The Events class should have methods 'on', 'trigger', and 'off'.

class Events {
	constructor() {
		this.events = {};
	}
	// Register an event handler
	on(eventName, callback) {
		if (this.events[eventName]) {
			this.events[eventName.push(callback)];
		} else {
			this.events[eventName] = [callback];
		}
	}

	// Trigger all callbacks associated with a given eventName
	// Look at events object at eventName key and for every callback in that array, immediately call it
	trigger(eventName) {
		if (this.events[eventName]) {
			for (let cb of this.events[eventName]) {
				cb();
			}
		}
	}

	// Remove all event handlers associated with the given eventName
	off(eventName) {
		delete this.events[eventName];
	}
}
