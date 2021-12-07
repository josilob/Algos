// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example
// arr = [1,1,2,2,3]
// There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

// Function Description

// Complete the migratoryBirds function in the editor below.

// migratoryBirds has the following parameter(s):

// int arr[n]: the types of birds sighted
// Returns

// int: the lowest type id of the most frequently sighted birds
// Input Format

// The first line contains an integer, , the size of .
// The second line describes  as  space-separated integers, each a type number of the bird sighted.

function migratoryBirds(arr) {
	let map = {},
		maxCount = 0,
		output = [];
	for (let i = 0; i < arr.length; i++) {
		map[arr[i]] = map[arr[i]] + 1 || 1;
		// getting max count
		if (map[arr[i]] > maxCount) {
			maxCount = map[arr[i]];
		}
	}
	for (let j = 0; j < arr.length; j++) {
		if (map[arr[j]] === maxCount) {
			output.push(arr[j]);
		}
	}
	return Math.min(...output);
}
