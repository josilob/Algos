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
}
