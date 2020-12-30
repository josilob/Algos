function spiralMatrix(num) {
	const results = [];

	for (let i = 0; i < num; i++) {
		results.push([]);
	}

	let counter = 1;
	let startCol = 0;
	let endCol = num - 1;
	let startRow = 0;
	let endRow = num - 1;

	while (startCol <= endCol && startRow <= endRow) {
		//top row
		for (let i = startCol; i <= endCol; i++) {
			results[startRow][i] = counter;
			counter++;
		}
		startRow++;

		//right column
		for (let i = startRow; i <= endRow; i++) {
			results[i][endCol] = counter;
			counter++;
		}
		endCol--;

		//bottom row
		for (let i = endCol; i >= startCol; i--) {
			results[endRow][i] = counter;
			counter++;
		}
		endRow--;

		//start column
		for (let i = endRow; i >= startRow; i--) {
			results[i][startCol] = counter;
			counter++;
		}
		startCol++;
	}
	return results;
}
console.log(spiralMatrix(5));
