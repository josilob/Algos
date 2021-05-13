// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"

function sumStr(a, b) {
	return String(Number(a) + Number(b));
}

// simple conversion
function sumStr2(a, b) {
	return +a + +b + '';
}

function sumStr3(a, b) {
	return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}
