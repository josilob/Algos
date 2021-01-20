//Return the middle node of the linked list.
//If the list has the even number of elements , return the node at the end of first half of the list.
//Do not use a counter variable, do not retrieve the size of the list, and only iterate through the list one time.

// declare two variables (slow and fast) at the beginning of linked list
// put them in the loop and start incrementing, slow by 1, fast by 2 nodes
// once fast one runs out of nodes, return position of the slow element
function midpoint(list) {
	let slow = list.getFirst();
	let fast = list.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}
