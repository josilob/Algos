## Directions:

1. Complete the task in weave/queue.js
2. Implement the 'weave' function.

Weave recieves two queues as arguments and combines the contents of each into a new, third queue.
The third queue should contain the _alternating_ content of the two queues.
The function should handle queues of different lengths without inserting 'undefined' into the new one.
Do NOT access the array inside of any queue, only use the 'add', 'remove' and 'peek' functions

Example:

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2)
