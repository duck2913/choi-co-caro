import classes from "./Cell.module.scss";
import { useDispatch } from "react-redux";
import { move, changePlayer, checkWinner } from "../../store/gameSlice";

interface Props {
	value: string;
	index: number;
}

function Cell({ value, index }: Props) {
	const dispatch = useDispatch();

	function clickHandler() {
		dispatch(move(index));
		dispatch(changePlayer());
		dispatch(checkWinner());
	}

	return (
		<div className={classes.cell} onClick={clickHandler}>
			{value}
		</div>
	);
}
export default Cell;
