import { createSlice } from "@reduxjs/toolkit";

function hasSubarray(master, arr) {
	return arr.every((arrEl) => master.includes(arrEl));
}

const initialState = {
	currState: "x",
	board: Array(9).fill(""),
	xMoves: [],
	oMoves: [],
	winner: "",
};

const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		move: (state, action) => {
			if (state.board[action.payload] !== "") return;
			// action payload will be dispatched with the clicked cell's index
			state.board[action.payload] = state.currState;
			if (state.currState === "x") {
				state.xMoves.push(action.payload);
			} else {
				state.oMoves.push(action.payload);
			}
		},
		changePlayer: (state) => {
			if (state.currState === "x") state.currState = "o";
			else {
				state.currState = "x";
			}
		},
		checkWinner: (state) => {
			const xWins =
				hasSubarray(state.xMoves, [0, 1, 2]) ||
				hasSubarray(state.xMoves, [3, 4, 5]) ||
				hasSubarray(state.xMoves, [6, 7, 8]) ||
				hasSubarray(state.xMoves, [0, 3, 6]) ||
				hasSubarray(state.xMoves, [1, 4, 7]) ||
				hasSubarray(state.xMoves, [2, 5, 8]) ||
				hasSubarray(state.xMoves, [0, 4, 8]) ||
				hasSubarray(state.xMoves, [2, 4, 6]);
			const oWins =
				hasSubarray(state.oMoves, [0, 1, 2]) ||
				hasSubarray(state.oMoves, [3, 4, 5]) ||
				hasSubarray(state.oMoves, [6, 7, 8]) ||
				hasSubarray(state.oMoves, [0, 3, 6]) ||
				hasSubarray(state.oMoves, [1, 4, 7]) ||
				hasSubarray(state.oMoves, [2, 5, 8]) ||
				hasSubarray(state.oMoves, [0, 4, 8]) ||
				hasSubarray(state.oMoves, [2, 4, 6]);
			if (xWins) state.winner = "X";
			if (oWins) state.winner = "O";
		},
	},
});

export default gameSlice.reducer;
export const { move, changePlayer, checkWinner } = gameSlice.actions;
