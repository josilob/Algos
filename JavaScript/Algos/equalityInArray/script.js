function equalizeArray(arr) {
	let arrObj = {};
	for (let num of arr) {
		arrObj[num] = arrObj[num] + 1 || 1;
	}
	let maxCount = 0;
	for (let value in arrObj) {
		if (arrObj[value] > maxCount) maxCount = arrObj[value];
	}
	return arr.length - maxCount;
}
