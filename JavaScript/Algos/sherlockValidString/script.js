function isValid(s) {
	const cache = {};
	s.split``.forEach((char) => {
		cache[char] = (cache[char] || 0) + 1;
	});

	const cacheMin = Math.min(...Object.values(cache));
	const cacheMax = Math.max(...Object.values(cache));
	const cacheValues = Object.values(cache);

	// if all the values are the same => YES
	if (cacheMax === cacheMin) return 'YES';

	// if max values is by 1 bigger than min && that's the only max value in the array
	if (
		cacheMax - cacheMin === 1 &&
		cacheValues.indexOf(cacheMax) === cacheValues.lastIndexOf(cacheMax)
	) {
		return 'YES';
	}

	// if there's only one MIN value in the array with multiple MAX values
	if (
		cacheValues.indexOf(cacheMin) === cacheValues.lastIndexOf(cacheMin) &&
		cacheValues.indexOf(cacheMax) !== cacheValues.lastIndexOf(cacheMax)
	) {
		return 'YES';
	}

	return 'NO';
}

console.log(isValid('aabbccddeefghi'));
console.log(isValid('abcdefghhgfedecba'));
