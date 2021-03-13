// Write a function called isSubsequence that takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check if characters from the first string appear anywhere in the second string, WITHOUT THEIR ORDER CHANGING.

// iterations
function isSubsequence(str1, str2) {
	var i = 0;
	var j = 0;
	if (!str1) return true;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
}
