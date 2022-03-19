function cutTheSticks(arr) {
	const remainingSticks = [arr.length];
	while (arr.length >= 1) {
		const minStick = Math.min(...arr);
		arr = arr.map((el) => el - minStick);
		arr = arr.filter((el) => el >= 1);
		arr.length > 0 && remainingSticks.push(arr.length);
	}
	return remainingSticks;
}
