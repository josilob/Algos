// Binary Search Tree
// Every node can have at most 2 children positioned relative to the parent
// One node is to the left, the other is to the right of a parent
// Values and position are tightly connected
// Left element is less than parent node, while the node to the right is greater than parent

// Parent Node => left_node(value>left.value) && right_node(value<right.value)

// Do NOT mistake Binary SEARCH Tree with Binary Tree
// SEARCH tree requires values to the left and right of the parent.
// While just BINARY Tree requires that each node has 2 children, disregarding their value

// ---Directions:
// 1) Implement the Node class to create a binary search tree. The construtor should initialize values 'data', 'left' and 'right'.
// 2) Implement the 'insert' method for the Node class. Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if (data < this.data && this.left) {
			this.left.insert(data);
		} else if (data < this.data) {
			this.left = new Node(data);
		} else if (data > this.data && this.right) {
			this.right.insert(data);
		} else if (data > this.data) {
			this.right = new Node(data);
		}
	}
}
