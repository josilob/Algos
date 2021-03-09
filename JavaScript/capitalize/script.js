function capitalize(str) {
	const upCaseArr = str
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1));
	return upCaseArr.join(' ');
}
// console.log(capitalize('beatuful day outside'));

function capitalize2(str) {
	let result = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	return result;
}
console.log(capitalize2('beatuful day outside'));
