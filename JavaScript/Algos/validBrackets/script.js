// Implement function isValid(text) which verified whether parenthesis within the text are correctly nested. Three kinds need to be considered: (), [], <>, and ONLY these kinds.

function isValid(str) {
	if (str.length === 0) return true;

	let matchingOpeningBracket, char;
	let stack = [];

	let openingBrackets = ['[', '<', '('];
	let closingBrackets = [']', '>', ')'];

	for (let i = 0; i < str.length; i++) {
		char = str[i];

		if (closingBrackets.indexOf(char) > -1) {
			matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
			if (stack.length == 0 || stack.pop() != matchingOpeningBracket) {
				return false;
			}
		} else if (openingBrackets.indexOf(char) > -1) {
			stack.push(char);
		}
	}

	return stack.length == 0;
}
