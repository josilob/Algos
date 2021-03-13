//  RECURSION
// -Taking one problem over and over again on a smaller(changing) piece until the endpoint.
// A process (function in this case) that calls itself.

// Call Stack - data structure that manages what happens when functions are invoked (important for recursion)
// Any time the function is invoked it is placed (pushed) on the top of the call stack
// When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop) it from callstack

// Unlike regular functions, recursive functions keep pushing new functions onto the  call stack!

// 1st Piece - BASE CASE (The condition when the recursion ends)
// 2nd Piece - Change of input

function countDown(num) {
	if (num <= 0) {
		console.log('All done!');
		return;
	}
	console.log(num);
	countDown(num - 1);
}
// countDown(10);

function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}

function factorial(num) {
	if (num === 1) return 1;
	return num * factorial(num - 1);
}

/* RECURSION PITFALLS:
 1) No basecase
 2) Forgetting to return, or returning wrong thing
 3) Stack overflow (too many functions trying to be called, recursion not stopping)
*/

// Design pattern used with recursion : HELPER METHOD RECURSION
// Outside (non recursive) function with (inside, recursive) helper function

function outer(input) {
	let outerScopedVariable = [];

	function helper(helperInput) {
		// modify the OuterScopedVariable
		helper(helperInput--);
	}

	helper(input);
	return outerScopedVariable;
}

// Example: Collect all of the odd values in an array!
function collectOddValues(arr) {
	// define result outside of helper function so we can keep its values
	// if we kept re-running function with this line, array would always start empty
	let result = [];

	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		// Reinvoke helper method with previously called number removed
		// This is done by making copy of the array without previously used value
		helper(helperInput.slice(1));
	}

	helper(arr);

	return result;
}

// PURE RECURSION

// Tip: For arrays, use methods like slice, spread operator, and concat that make copies of arrays so they are not mutated.
// Tip: Remember that strings are immutable, so methods like slice or substring will be needed to create copies of strings
// Tip: To make copies of objects, use Object.assign, or the spread operator

function collectOddValues2(arr) {
	let newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	return newArr;
}
