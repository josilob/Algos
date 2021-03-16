// Create a stack data structure. The queue should be a class with methods 'push' and 'pop'. Adding an element to the queue should store it until it is removed

// Example:
// const s = new Stack();
// s.push(1);
// s.push(2);
// s.pop(); // returns 2
// s..pop(); // returns 1

class Stack {
	constructor() {
		this.data = [];
	}
	push(record) {
		this.data.push(record);
	}
	pop() {
		return this.data.pop();
	}
	//To check the top element of the stack, we can use the peek() function of Stack class:
	peek() {
		return this.data[this.data.length - 1];
	}
}

// Stack algo: valid brackets
// 