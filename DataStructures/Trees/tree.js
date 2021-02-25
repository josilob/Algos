//Tree traversals: bredth(width) and depth

//Create a node class.The constructor should accept an argument that gets assigned to the data propery and initialize an empty array for storing children. The node class should have methods 'add' and 'remove'.
//Create a tree class. Tree constructor should initialize a 'root' property to null.
//Implement 'traverseBFS' and 'traverseDFS' on the tree class.

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter((node) => {
			return node.data !== data;
		});
	}
}

class Tree {}
