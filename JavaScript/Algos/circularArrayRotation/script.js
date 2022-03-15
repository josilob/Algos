function circularArrayRotation(a, k, queries) {
	// rotate the elements by pushing in the elements from the end of the arr
	while (k > 0) {
		a.unshift(a.pop());
		k--;
	}
	// declare array that we will return
	// return elements that are indexed in queries array
	const arr = [];
	for (let i = 0; i < queries.length; i++) {
		arr.push(a[queries[i]]);
	}
	return arr;
}
