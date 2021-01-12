const nodeOne = { data: 123 };
const nodeTwo = { data: 456 };

// to link these two and make some reference between them, we must do following:

nodeOne.next = nodeTwo; // this meets all the rules of linked lists
// nodeOne has reference to nodeTwo, but nodeTwo has no reference to any other node, meaning it's probably the Tail.

// Implement classes Node and Linked Lists:
// Last node in the sequence, instead of undefined should have 'null' value, meaning there's no value at all
class Node {
	constructor(data, next = null) {
		//default it to null unless some value is passed that will overwrite it
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	// It has only one property, head which is a reference to the first node of the linked list.
	// By default 'head' should be null
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}
}

const list = new LinkedList();
list.head = new Node(10);
