// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

let num = function (digit) {
	return function (operation) {
		return operation ? operation(digit) : digit;
	};
};
let zero = num(0);
let one = num(1);
let two = num(2);
let three = num(3);
let four = num(4);
let five = num(5);
let six = num(6);
let seven = num(7);
let eight = num(8);
let nine = num(9);

function plus(r) { return function (l) { return l + r; }; }
function minus(r) { return function (l) { return l - r; }; }
function times(r) { return function (l) { return l * r; }; }
function dividedBy(r) { return function (l) { return Math.floor(l / r); }; }

console.log(five(times(six()))); //=> 30
console.log(nine(dividedBy(four()))); //=> 2
console.log(seven(plus(eight()))); //=> 15
console.log(four(minus(one()))); //=> 3

// ANOTHER SOLUTION

// function expression(number, operation) {
// 	if (!operation) return number;
// 	return operation(number);
// }

// function zero(operation) {
// 	return expression(0, operation);
// }
// function one(operation) {
// 	return expression(1, operation);
// }
// function two(operation) {
// 	return expression(2, operation);
// }
// function three(operation) {
// 	return expression(3, operation);
// }
// function four(operation) {
// 	return expression(4, operation);
// }
// function five(operation) {
// 	return expression(5, operation);
// }
// function six(operation) {
// 	return expression(6, operation);
// }
// function seven(operation) {
// 	return expression(7, operation);
// }
// function eight(operation) {
// 	return expression(8, operation);
// }
// function nine(operation) {
// 	return expression(9, operation);
// }

// function plus(x) {
// 	return function (y) {
// 		return y + x;
// 	};
// }
// function minus(x) {
// 	return function (y) {
// 		return y - x;
// 	};
// }
// function times(x) {
// 	return function (y) {
// 		return y * x;
// 	};
// }
// function dividedBy(x) {
// 	return function (y) {
// 		return Math.floor(y / x);
// 	};
// }

/////////////////////////////////////
// For later : analyze this solution:
/////////////////////////////////////

// [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ]
// .forEach(function (name, n) { this[name] = function (f) { return f ? f(n) : n; }; });

// function plus(n) {
// 	return function (a) {
// 		return a + n;
// 	};
// }
// function minus(n) {
// 	return function (a) {
// 		return a - n;
// 	};
// }
// function times(n) {
// 	return function (a) {
// 		return a * n;
// 	};
// }
// function dividedBy(n) {
// 	return function (a) {
// 		return a / n;
// 	};
// }