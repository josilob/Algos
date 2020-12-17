function capitalize(str) {
	const upCaseArr = str
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1));
	return upCaseArr.join(' ');
}
// console.log(capitalize('beatufil day outside'));