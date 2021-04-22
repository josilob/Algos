// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = function (arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			arr[count++] = arr[i];
		}
	}

	for (let i = count; i < arr.length; i++) {
		arr[i] = 0;
	}
	return arr;
};

const moveZeros2 = function (arr) {
	return arr
		.filter(function (x) {
			return x !== 0;
		})
		.concat(
			arr.filter(function (x) {
				return x === 0;
			})
		);
};
