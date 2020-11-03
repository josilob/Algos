const doubleZeros = (arr) => {
	let arrLength = arr.length;
	//console.log(arrLength);
	let i = 0;
	while (i < arr.length) {
		//console.log(arr[i]);
		if (arr[i] !== 0) {
			i++;
		} else {
			arr.splice(i, 0, 0);
			i += 2;
		}
	}
	while (arr.length > arrLength) {
		arr.pop();
	}
	console.log(arr);
};

doubleZeros([1, 0, 2, 3, 0, 4, 5, 0]);
