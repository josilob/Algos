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
// 3) Implement the 'contains' method for the Node class. Contains should accept a 'data' argument and return the Node in the tree with the same value. If the value isn't in the tree return null.

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

	contains(data) {
		if (this.data === data) {
			return this;
		}
		if (this.data < data && this.right) {
			return this.right.contains(data);
		} else if (this.data > data && this.left) {
			return this.left.contains(data);
		}
		return null;
	}
}

//////// VALIDATE ///////

// Given a node, validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent

// LOOK @ VALIDATE IMG
function validate(node, min = null, max = null) {
	if (max !== null && node.data > max) {
		return false;
	}
	if (min !== null && node.data < min) {
		return false;
	}
	if (node.left && !validate(node.left, min, node.data)) {
		return false;
	}
	if (node.right && !validate(node.right, node.data, max)) {
		return false;
	}
	return true;
}
// we come to a node (10) without min or max set
// because min/max are null, we skip first 2 statements
// 1) is there a root node to the left (YES - with the value of zero);
// So we check for validate with node of 0(left from parent's 10) min=null while max is node.data (10 currently)
// Next iteration with max !== null (since it's 10 now), we check if our new node(0) is bigger than it
// If that was true, we would return false as an aswer to this function (as it can't be the case in BST)
// Same works if there is a node to the right
// Once we get to the bottom of the tree without min or max values, first two conditions fail without further values so we return TRUE (from the bottom of the function)

//Basically, if we are trying to move to the left, we update MAX value, and if we are going right, we update MIN
//This way we progress through the tree and if any node ever returns false, our answer cascades back up and gives us the answer of false
