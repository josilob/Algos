// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strings) => {
	if (!strings || strings.length === 0) return '';

	let sortedArr = strings.sort((a, b) => a.length - b.length);

	let shortestStr = sortedArr[0];

	while (!strings.every((str) => str.startsWith(shortestStr))) {
		if (shortestStr.length === 0) return;

		shortestStr = shortestStr.slice(0, -1);
	}

	return shortestStr;
};

console.log(
	longestCommonPrefix(['monocle', 'monologue', 'monotony', 'monorail'])
);
