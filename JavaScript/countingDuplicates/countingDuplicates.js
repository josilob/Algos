function duplicateCount(text) {
	lettersArr = text.toLowerCase().split('');
	let tempArr = [];
	for (let i = 0; i <= lettersArr.length; i++) {
		for (let j = i + 1; j <= lettersArr.length; j++) {
			if (lettersArr[i] == lettersArr[j] && !tempArr.includes(lettersArr[j])) {
				tempArr.push(lettersArr[j]);
			}
		}
	}
	return tempArr.length;
}
