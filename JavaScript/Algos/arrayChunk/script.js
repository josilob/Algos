function chunk(arr, size) {
	return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
	);
}
// console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));

function chunk2(arr, size) {
	const chunked = [];
	for (let element of arr) {
		const last = chunked[chunked.length - 1];

		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	return chunked;
}
// console.log(chunk2([1, 2, 3, 4, 5, 6, 7], 3));

function chunk3(arr, size) {
	const chunked = [];
	let index = 0;
	while (index < arr.length) {
		chunked.push(arr.slice(index, index + size));
		index += size;
	}
	return chunked;
}
// console.log(chunk3([1, 2, 3, 4, 5, 6, 7], 3));
