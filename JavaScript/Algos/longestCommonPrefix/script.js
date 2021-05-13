// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strings) {
	if (!strings || strings.length === 0) return '';

	let sortedArr = strings.sort((a, b) => a.length - b.length);

	let shortestStr = sortedArr[0];

	while (!strings.every((str) => str.startsWith(shortestStr))) {
		if (shortestStr.length === 0) return;

		shortestStr = shortestStr.slice(0, -1);
	}

	return shortestStr;
}

console.log(
	longestCommonPrefix3(['monocle', 'monologue', 'monotony', 'monorail'])
);

function longestCommonPrefix2(strings) {
	if (!strings.length) return '';

	for (let i = 0; i < strings[0].length; i++) {
		for (let str of strings) {
			if (str[i] !== strings[0][i]) {
				return str.slice(0, i);
			}
		}
	}

	return strings[0];
}

function longestCommonPrefix3(strs) {
	// 'use strict';
	if (strs === undefined || strs.length === 0) {
		return '';
	}

	return strs.reduce((prev, next) => {
		let i = 0;
		while (prev[i] && next[i] && prev[i] === next[i]) i++;
		return prev.slice(0, i);
	});
}
