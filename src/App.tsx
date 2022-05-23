import "./App.scss";
import Board from "./Components/Board/Board";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
	const winner = useSelector((state: RootState) => state.gameSlice.winner);

	function replayHandler() {
		window.location.reload();
	}
	return (
		<div className="App">
			<Board />
			{winner && (
				<div className="notification">
					The winner is {winner}
					<button onClick={replayHandler}>Play again</button>
				</div>
			)}
		</div>
	);
}

export default App;
