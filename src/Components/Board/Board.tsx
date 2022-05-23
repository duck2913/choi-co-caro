import Cell from "../Cell/Cell";
import classes from "./Board.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Board() {
	const board = useSelector((state: RootState) => state.gameSlice.board);

	return (
		<div className={classes.board}>
			{board.map((value, idx) => (
				<Cell key={idx} value={value} index={idx} />
			))}
		</div>
	);
}

export default Board;
