// Write a function called sameFrequency that takes in two arrays and returns true if every value in the array one has it's corresponding value squared in the second array. The frequency of values must be the same.

function sameFrequency(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true;
}
// console.log(sameFrequency([1, 2, 3, 3, 2, 6], [1, 4, 36, 9, 9, 4]));
