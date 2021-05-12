// Merge two sorted arrays and return it as a sorted list. The list should be made by splicing together the elements of the first two arrays.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

const mergeSortedArrays = function (l1, l2) {
	let sortedList = [];

	while (l1.length > 0 && l2.length > 0) {
		if (l1[0] <= l2[0]) {
			sortedList.push(l1.splice(0, 1));
		} else if (l2[0] <= l1[0]) {
			sortedList.push(l2.splice(0, 1));
		}
	}
	if (l1.length < 1) return sortedList.concat(l2).flat();
	if (l2.length < 1) return sortedList.concat(l1).flat();

	return sortedList.flat();
};

// console.log(mergeSortedArrays([1, 1, 1, 2, 3, 4, 4, 4, 8, 9], [1, 2, 3, 4, 5]));
// => [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 8, 9];

function mergeSortedArrays2(arr1, arr2) {
	let result = [...arr1, ...arr2];
	return result.sort((a, b) => a - b);
}
console.log(mergeSortedArrays2([1, 1, 1, 2, 3, 4, 4, 4, 8, 9], [1, 2, 3, 4, 5]));
