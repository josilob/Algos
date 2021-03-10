// implement bubbleSort, selectionSort and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const tempVar = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tempVar;
			}
		}
	}
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}
		if (indexOfMin !== i) {
			let lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = lesser;
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center); // center argument is exclusive, so it will be UNTIL that point in the array
	const right = arr.slice(center);

	mergeSort(left); // divide further recursively until arrays reach length of 1
	mergeSort(right);

	return merge(mergeSort(left), mergeSort(right)); // returns array with length of 1 because of the first if statement on top (which are the values needed as arguments for merge function)
}

function merge(left, right) {
	const results = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}
	return [...results, ...left, ...right];
}
