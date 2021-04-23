// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
	const getWins = makeGetWins(board);
	return getWins(1) ? 1 : getWins(2) ? 2 : emptySlots(board) ? -1 : 0;
}

const makeGetWins = (board) => (key) =>
	[
		horizontalWin(board, key),
		verticalWin(board, key),
		leftDiagWin(board, key),
		rightDiagWin(board, key),
	].some((_) => Boolean(_));

const emptySlots = (board) =>
	board.map((x) => x.some((_) => _ === 0)).some((_) => Boolean(_));

const horizontalWin = (board, key) =>
	board.map((x) => x.every((_) => _ === key)).some((_) => Boolean(_));

const verticalWin = (board, key) => horizontalWin(rotateBoard(board), key);

const leftDiagWin = (board, key) =>
	[0, 1, 2]
		.map((winIdx, rowIdx) => board[rowIdx][winIdx] === key)
		.every((_) => Boolean(_));

const rightDiagWin = (board, key) =>
	[2, 1, 0]
		.map((winIdx, rowIdx) => board[rowIdx][winIdx] === key)
		.every((_) => Boolean(_));

const rotateBoard = (board) =>
	Array(board[0].length)
		.fill(null)
		.map((x, idx) => board.map((_) => _[idx]));
