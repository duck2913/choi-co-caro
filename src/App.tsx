import "./App.scss";
import Board from "./Components/Board/Board";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
	const winner = useSelector((state: RootState) => state.gameSlice.winner);
	return (
		<div className="App">
			<Board />
			{winner && <p>The winner is {winner}</p>}
		</div>
	);
}

export default App;
