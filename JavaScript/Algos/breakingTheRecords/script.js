function breakingRecords(scores) {
	const recordsCount = [0, 0];
	const records = [scores[0], scores[0]];

	scores.forEach((score) => {
		if (score > records[0]) {
			recordsCount[0] += 1;
			records[0] = score;
		}
		if (score < records[1]) {
			recordsCount[1] += 1;
			records[1] = score;
		}
	});
	return recordsCount;
}

function average(table) {
	if (!table) return 0;
	const sum = table.reduce((sum, num) => sum + num, 0);
	return sum / table.length;
}

console.log(average([1, 2, 4, 5, 6, 7]));
