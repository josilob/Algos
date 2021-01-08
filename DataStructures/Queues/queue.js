// Create a queue data structure. The queue should be a class with methods 'add' and 'remove'. Adding to the queue should store an element until it is removed

// Example:
// const q = new Queue();
// q.add(1);
// q.remove(); // returns 1

class Queue {
	constructor() {
		this.data = [];
	}

	// unshift() as the method adds something at the beginning of the array
	add(record) {
		this.data.unshift(record);
	}
	// pop() as the method removes item from the end of the array
	remove(record) {
		return this.data.pop();
	}
}
