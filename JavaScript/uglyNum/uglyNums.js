// pseudocode
// GET number
// DEFINE prime numbers
// LOOP through primeNumsArr
// FOREACH check is num arg is divisible
// WHILE quotient  ===0
// NUM may be isUgly
// ENDWHILE
// code
// take in a number
// return a boolean

// input number
// if 1 then true
// else check if divisible by 2
// if true divide by 2 refactor
// else check if divisible by 3
// if true divide by 3 refactor
// else check if divisible by 5
// if true divide by 5 refactor
// else return false

let isUgly1 = (num) => {
	const list = [2, 3, 5];
	// 1st case
	if (num <= 0) return false;
	//2nd case
	if (num === 1) return true;
	//3rd case
	if (list.includes(num)) {
		return true;
	} else {
		for (let i of list) {
			// recursion case
			if (num % i === 0) return isUgly(num / i);
		}
	}
	return false;
};

let isUgly2 = (num) => {
	if (num <= 0) return false;
	if (num === 1) return true;
	if ([2, 3, 5].includes(num)) {
		return true;
	}
	while (num % 2 === 0) num /= 2;
	while (num % 3 === 0) num /= 3;
	while (num % 5 === 0) num /= 5;
	return num === 1;
};

for (let i = 1; i < 30; i += 1) {
	console.log(`num: ${i}`, isUgly(i));
}

//RECURSIVE SOLUTION

let isUglyRecursive = function (num) {
	//if the number is divisible by 2, divide it by 2 and repeat this function, return the result
	if (num % 2 === 0) return isUglyRecursive(num / 2);
	//if the number is divisible by 3, divide it by 3 and repeat this function, return the result
	if (num % 3 === 0) return isUglyRecursive(num / 3);
	//if the number is divisible by 5, divide it by 5 and repeat this function, return the result
	if (num % 5 === 0) return isUglyRecursive(num / 5);
	//If the remaining number is equal to 1 return true
	return num === 1;
};

for (let i = 1; i < 31; i += 1) {
	console.log(`num: ${i}`, isUglyRecursive(i));
}

//OTHER SOLUTIONS:

const uglyNum = (number) => {
	if (number === 1) {
		return true;
	} else {
		if (number % 2 === 0) {
			newNumber = number / 2;
			return uglyNum(newNumber);
		} else if (number % 3 === 0) {
			newNumber = number / 3;
			return uglyNum(newNumber);
		} else if (number % 5 === 0) {
			newNumber = number / 5;
			return uglyNum(newNumber);
		} else {
			return false;
		}
	}
};
for (let i = 1; i <= 30; i += 1) {
	console.log(`number: ${i}`, uglyNum(i));
}

const isUgly3 = (num) => {
	let primeArr = [2, 3, 5];
	primeArr.forEach((prime) => {
		while (num && num % prime === 0) {
			num /= prime;
		}
	});
	return num === 1;
};
//check
for (let i = 1; i < 30; i += 1) {
	console.log(`num: ${i}`, isUgly(i));
}
