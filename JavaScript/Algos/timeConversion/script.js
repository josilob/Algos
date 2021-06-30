// Given a 12-hour time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
	// Write your code here
	// '12:00:00AM' => '00:00:00'
	// '12:00:00PM' => '24:00:00'
	const hours = s.substring(0, 2);

	// console.log(typeof hours);
	if (s.endsWith('PM')) {
		if (s.startsWith('12')) {
			return s.replace('PM', '');
		}
		return s.replace('PM', '').replace(hours, String(+hours + 12));
	} else if (s.endsWith('AM')) {
		if (s.startsWith('12')) {
			return s.replace('AM', '').replace(hours, '00');
		}
		return s.replace('AM', '');
	}
}
console.log(timeConversion('12:05:45PM'));
console.log(timeConversion('12:05:45AM'));
console.log(timeConversion('00:05:45PM'));
console.log(timeConversion('00:05:45AM'));
console.log(timeConversion('05:05:45AM'));
console.log(timeConversion('05:05:45AM'));
