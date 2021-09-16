// Task
// You will be given a string of English digits "stuck" together, like this:

// "zeronineoneoneeighttwoseventhreesixfourtwofive"

// Your task is to split the string into separate digits:

// "zero nine one one eight two seven three six four two five"

// Examples
// "three"              -->  "three"
// "eightsix"           -->  "eight six"
// "fivefourseven"      -->  "five four seven"
// "ninethreesixthree"  -->  "nine three six three"
// "fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"

function uncollapse(digits) {
	const regNums =
		/(zero)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|(ten)/;
	return digits.split(regNums).filter(Boolean).join(' ');
}

function uncollapse2(digits) {
	const digitsMap = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine'
	];

	return digits.match(new RegExp(digitsMap.join('|'), 'g')).join(' ');
}
