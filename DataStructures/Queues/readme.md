# Queues

Queues can be thought of as a container of sort where records(pieces of data) enter on one side of container, and exit on the other.

Think of it as a queue/waiting line in front of ticket counter on a bus station

Order of entering queue also dictates the sequence of leaving it/coming out

There is no way of 'skipping line'

Entering the queue we refer as Enqueueing or adding
Leaving is Dequeueing or removing

Queues follow what we refer to as First-In-First-Out principle (FIFO)

Having records of: A and B
If we attempt to insert records in that sequence, it will also be the sequence they must leave.

In Javascript we do not have rudimentary queues. We have arrays that can cover that functionality
Equivalent would be next example:

```Javascript
let nums = [1,2,3,4,5]
// for adding to queue we will be using
nums.unshift() // we are adding something to the front of the array
// for removing from queue we will be relying on:
nums.pop() // we are removing something from the end of the array

// To create a new empty queue:
const q = new Queue();

// To add a record to a queue:
q.add(1);

// To remove record at the end of a queue:
q.remove()
```
