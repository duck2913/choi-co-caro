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

	let className = `${classes.cell}`;
	value === "x" ? (className += ` ${classes.x}`) : (className += ` ${classes.o}`);
	return (
		<div className={className} onClick={clickHandler}>
			{value}
		</div>
	);
}
export default Cell;
