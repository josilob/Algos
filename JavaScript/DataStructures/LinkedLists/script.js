// Linked List
// Data structure that contains head, tail and length properties
// They consist of nodes, and each node has a value and a pointer to another node or null

// Comparison with Arrays:
// Lists: Do not have indices, connected via nodes using 'next' pointer, random access is not allowed
// Arrays: Indexed in order, insertion and deletion can be expensive, can easily be accessed  at specific idx

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	// adding a new value to the end of the SLL
	// if there is no other value in the SLL, make it both HEAD and TAIL
	// otherwise set the next property on the tail to be the new node and increment the length by 1
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// traverse() {
	// 	let current = this.head;
	// 	while (current) {
	// 		console.log(current.val);
	// 		current = current.next;
	// 	}
	// }

	// Removing a node from the end of SLL
	// -if there are no nodes in the list, return undefined
	// -loop through until tail is reached, set the next property of the 2nd to last node to be null
	// -set the tail to be the 2nd to last node, decrement the length of list by 1
	// -return the value of the node it is removed

	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	// Removing a node from the beginning of SLL
	// -if there are no nodes, return undefined
	// -store the current head property in a variable
	// -set the head property to be current head's next property
	// -decrement the length by 1
	// -return the value of the node removed
	shift() {
		if (!his.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}

	// Adding a node at the beginning of the SLL
	// -accept a value to create a new node
	// -if there is no head, set the newly created node to be both the head and the tail
	// -otherwise set the new node's next property to be the current SLL's head from the list
	// -set the new node as the head of the SLL, increment length by 1 and return the SLL
	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	// Get by position
	// -accept an idx
	// -if idx is less than 0, greater or equal than the list's length - return null
	// -loop through the loop until you reach the idx and return the node at the specific idx
	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== idx) {
			current = current.next;
			counter++;
		}
		return current;
	}

	// Set - changing the value of a node based on it's position in the SLL
	// -this function should accept index and value
	// -use get() method to find the specific node
	// -if the node is not found, return false
	// -if the node is found set the value of the node to be the value passed to the function and return true
	set(idx, value) {
		let foundNode = this.get(idx);
		if (foundNode) {
			foundNode.value = value;
			return true;
		}
		return false;
	}

	// Insert - adding a node to the SLL at a specific position
	// -if the idx is less than zero or greater than the length, return false
	// -if the idx is the same as length, push a new node to the end of the list
	// -if the idx is 0, unshift a new node to the start of the list
	// -otherwise, using the get method, access the node at the idx - 1
	// -set the next property on that node to be the new node
	// -set the next property on the new node to be the previous next
	// -increment the length and return true
	insert(idx, value) {
		if (idx < 0 || idx > this.length) return false;
		// utilizing '!!' coerces Boolean value to be returned instread of entire list
		if (idx === this.length) return !!this.push(val);
		if (idx === 0) return !!this.unshift(val);
		let newNode = new Node(val);
		let previous = this.get(idx - 1);
		let temp = previous.next;
		previous.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
}

let myList = new SinglyLinkedList();
