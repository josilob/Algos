let dnaStrings = (str) => {
	let newString = '';
	let strArr = str.split('');
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i].toLowerCase() === 'a') {
			strArr[i] = 'T';
		} else if (strArr[i].toLowerCase() === 't') {
			strArr[i] = 'A';
		} else if (strArr[i].toLowerCase() === 'c') {
			strArr[i] = 'G';
		} else if (strArr[i].toLowerCase() === 'g') {
			strArr[i] = 'C';
		}
	}
	newString = strArr.join('');
	return newString;
};

let dnaStrings2 = (str) => {
	let newString = '';
	let strArr = str.split('');

	for (let i = 0; i < strArr.length; i++) {
		switch (strArr[i].toLowerCase()) {
			case 'a':
				strArr[i] = 'T';
				break;
			case 't':
				strArr[i] = 'A';
				break;
			case 'c':
				strArr[i] = 'G';
				break;
			case 'g':
				strArr[i] = 'C';
				break;
		}
	}
	return strArr.join('');
};
