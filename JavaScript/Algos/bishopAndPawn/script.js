// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

// For bishop = "a1" and pawn = "c3", the output should be true.
// For bishop = "h1" and pawn = "h3", the output should be false.

// Input/Output
// [input] string bishop

// Coordinates of the white bishop in the chess notation.

// [input] string pawn

// Coordinates of the black pawn in the same notation.

// [output] a boolean value

// true if the bishop can capture the pawn, false otherwise.

function bishopAndPawn(bishop, pawn) {
	const board = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };

	const bishopX = board[bishop[0]];
	const bishopY = parseInt(bishop[1]);

	const pawnX = board[pawn[0]];
	const pawnY = parseInt(pawn[1]);

	if (
		bishopX + bishopY === pawnX + pawnY ||
		bishopX + pawnY === bishopY + pawnX
	) {
		return true;
	}
	return false;
}

console.log(bishopAndPawn('g4', 'c7'));

function bishopAndPawn2(bishop, pawn) {
	return (
		Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) ===
		Math.abs(bishop[1] - pawn[1])
	);
}
