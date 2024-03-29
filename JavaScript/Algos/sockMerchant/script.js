// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

function sockMerchant(n, ar) {
	let pair = 0;
	ar.sort();
	for (let i = 0; i < n; i++) {
		if (ar[i] == ar[i + 1]) {
			// increment the pairs by 1 and skip next element's iteration so it doesn't repeat
			i++;
			pair++;
		}
	}
	return pair;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])); // => 2 pairs
