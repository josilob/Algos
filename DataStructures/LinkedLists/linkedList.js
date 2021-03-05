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

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	// head is always the first node in the linked list
	getFirst() {
		return this.head;
		// ### REUSE OF CODE ###
		// return this.getAt(0);
	}

	// last node is the one that has no reference to the next one (null by default)
	getLast() {
		// if there's no node, get out of it
		if (!this.head) {
			return null;
		}
		// get a reference to the current node and iterate through the rest
		// as long as there is next node, we will continue with iteration
		// as soon as we find final node (with null property, meaning there is no next), we return it
		// let node = this.head;
		let node = this.head;
		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
		// ### REUSE OF CODE ###
		// return this.getAt(this.size() - 1);
	}

	clear() {
		// if there's no head, linked list is gone, we lose the reference to the linked list
		// it may still float in memory, but there's no actual 'LINKED' list
		this.head = null;
	}

	// removes first element of the linked list past the head leaving head pointing to the next node, past 'removed one'
	// basically meaning, point head to the second element
	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}

	// remove tail
	removeLast() {
		if (!this.head) {
			return;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let previous = this.head;
		let node = this.head.next;

		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();

		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		if (!this.head) {
			return null;
		}

		let counter = 0;
		let node = this.head;

		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}

		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return;
		}

		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);

		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next; //skip one that needs to be removed basically
		// being linked to 'nothing' removes it from linked list
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}
}

function circular(list) {
	let slow = list.getFirst();
	let fast = list.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) {
			return true;
		}
	}
	return false;
}

// Given a linked list and integer n, return the element n spaces from the last node in the list..
// Do not call the 'size' method of the Linkd List. Assume that n will always be less than the length of the list.
// Example:
// const list = new List()
// list.insertLast('a');
// list.insertLast('b');
// list.insertLast('c');
// list.insertLast('d');
// fromLast(list, 2).data //=> 'b'

function fromLast(list, n) {
	let slow = list.getFirst();
	let fast = list.getFirst();

	while (n > 0) {
		fast = fast.next;
		n--;
	}

	while (fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
}
