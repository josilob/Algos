
// Perimeter of squares in a rectangle
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:
//  http://i.imgur.com/EYcuB1wm.jpg

function perimeter(n) {
	let arr = [1, 1];
	for (let i = 0; i < n - 1; i++) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	}
	return 4 * arr.reduce((sum, num) => sum + num, 0);
}

function perimeter(n) {
	var total = 0;
	var first = 1;
	var second = 1;
	var third;
	for (let i = 0; i < n + 1; i++) {
		third = first + second;
		total += first;

		console.log('first=', first);
		console.log('second=', second);
		console.log('third=', third);
		console.log('total=', total);
		console.log('------------');

		first = second;
		second = third;
	}
	return total * 4;
}