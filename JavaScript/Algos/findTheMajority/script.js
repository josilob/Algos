// Goal
// Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

// If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

// Example
// majority(["A", "B", "A"]) returns "A"
// majority(["A", "B", "B", "A"]) returns null

function majority(arr) {
	let s = arr.reduce((acc, val) => ((acc[val] = acc[val] + 1 || 1), acc), {});
	let n = Math.max(...Object.values(s));
	let a = Object.keys(s).filter((x) => s[x] == n);
	return a.length != 1 ? null : a[0];
}

const majority2 = (arr) => {
	const MAJORITY = Object.entries(
		arr.reduce(
			(acc, item) => (acc[item] ? acc[item]++ : (acc[item] = 1), acc),
			{}
		)
	).sort((a, b) => b[1] - a[1]);
	const X = MAJORITY.length ? MAJORITY.shift() : [];
	const Y = MAJORITY.length ? MAJORITY.pop() : [];
	return X[1] === Y[1] ? null : X[0];
};
