function squareDigits(num) {
	//convert to string so we can split digits 1 by 1
	const tempArr = num.toString().split('');
	//mutate each digit to the power of 2, and join back to single string
	squareNum = tempArr.map((num) => num ** 2).join('');
	//return string converted to integer
	return parseInt(squareNum);
}
