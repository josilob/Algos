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
}
