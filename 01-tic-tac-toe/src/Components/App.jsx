import { useState } from "react";
import Board from "./Board";
import HistoryList from "./History";
import calculateTheWinner from "./helper/calculateTheWinner";
import "./styles/App.css";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentHistory = history[currentMove];
  const turn = currentMove % 2 == 0 ? "X" : "O";

  const [winner, squaresHighlight] = calculateTheWinner(currentHistory);

  function handleSquareClick(index) {
    if (currentHistory[index] || winner) return;

    const move = currentHistory.slice();
    move[index] = turn;

    const nextHistory = [...history.slice(0, currentMove + 1), move];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleHistoryClick(index) {
    setCurrentMove(index);
  }

  return (
    <>
      <header>
        <h1 className="title">Tic Tac Toe</h1>
        <p className={`game-status ${winner ? "win" : ""}`}>
          {winner ? `Winner: ${winner}` : `Turn: ${turn}`}
        </p>
        <button
          className="reset-btn"
          onClick={() => {
            setHistory([Array(9).fill(null)]);
            setCurrentMove(0);
          }}
        >
          Reset Game
        </button>
      </header>
      <main className="game-app">
        <Board
          currentHistory={currentHistory}
          onSquareClick={handleSquareClick}
          squaresHighlight={squaresHighlight}
        />
        <HistoryList history={history} onHistoryClick={handleHistoryClick} />
      </main>
    </>
  );
}
