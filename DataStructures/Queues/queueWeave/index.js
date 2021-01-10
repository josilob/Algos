// Example:
// const queueOne = new Queue();
// queueOne.add(1);
// queueOne.add(2);
// const queueTwo = new Queue();
// queueTwo.add('Hi');
// queueTwo.add('There');
// const q = weave(queueOne, queueTwo);
// q.remove(); // 1
// q.remove(); // 'Hi'
// q.remove(); // 2
// q.remove(); // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
	const q = new Queue();
	// as long as sourceOne or sourceTwo returns value that is NOT undefined (not empty), we keep running loop
	while (sourceOne.peek() || sourceTwo.peek()) {
		if (sourceOne.peek()) {
			q.add(sourceOne.remove());
		}
		if (sourceTwo.peek()) {
			q.add(sourceTwo.remove());
		}
	}
	return q;
}
console.log(weave([1, 2, 3], [4, 5, 6]));
