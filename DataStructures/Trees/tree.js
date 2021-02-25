//Tree traversals: bredth(width) and depth

//1)  Create a node class.The constructor should accept an argument that gets assigned to the data propery and initialize an empty array for storing children. The node class should have methods 'add' and 'remove'.
//2)  Create a tree class. Tree constructor should initialize a 'root' property to null.
//3)  Implement 'traverseBFS' and 'traverseDFS' on the tree class.

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
// We redesigned add and remove methods, adding them to the Node instead of a Tree, since it's hard to imagine where to add or remove nodes inside of a tree. It was easier that way in linked lists, but different approach must be taken in this case.

class Tree {
	constructor() {
		//very first node is our 'root' node, which needs to be null
		this.root = null;
	}

	traverseBF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const node = arr.shift();
			arr.push(...node.children);
			// we must use spread syntax instead of simple pushing entire array withing another array.
			// We'd end up with 2D array
			fn(node);
		}
	}

	traverseDF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const node = arr.shift();
			arr.unshift(...node.children); // Only difference is where we add children elements (FRONT OF THE ARRAY)
			fn(node);
		}
	}
}
