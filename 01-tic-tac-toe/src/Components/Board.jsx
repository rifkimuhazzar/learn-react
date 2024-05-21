/* eslint-disable react/prop-types */
import "./styles/Board.css";

export default function Board({
  currentHistory,
  onSquareClick,
  squaresHighlight,
}) {
  return (
    <section className="board">
      <div className="row">
        <Square
          isWin={squaresHighlight.some((element) => element === 0)}
          val={currentHistory[0]}
          onClick={() => onSquareClick(0)}
        />
        <Square
          isWin={squaresHighlight.some((element) => element === 1)}
          val={currentHistory[1]}
          onClick={() => onSquareClick(1)}
        />
        <Square
          isWin={squaresHighlight.some((element) => element === 2)}
          val={currentHistory[2]}
          onClick={() => onSquareClick(2)}
        />
      </div>
      <div className="row">
        <Square
          isWin={squaresHighlight.some((element) => element === 3)}
          val={currentHistory[3]}
          onClick={() => onSquareClick(3)}
        />
        <Square
          isWin={squaresHighlight.some((element) => element === 4)}
          val={currentHistory[4]}
          onClick={() => onSquareClick(4)}
        />
        <Square
          isWin={squaresHighlight.some((element) => element === 5)}
          val={currentHistory[5]}
          onClick={() => onSquareClick(5)}
        />
      </div>
      <div className="row">
        <Square
          isWin={squaresHighlight.some((element) => element === 6)}
          val={currentHistory[6]}
          onClick={() => onSquareClick(6)}
        />
        <Square
          isWin={squaresHighlight.some((element) => element === 7)}
          val={currentHistory[7]}
          onClick={() => onSquareClick(7)}
        />
        <Square
          isWin={squaresHighlight.some((element) => element === 8)}
          val={currentHistory[8]}
          onClick={() => onSquareClick(8)}
        />
      </div>
    </section>
  );
}

function Square({ val, onClick, isWin }) {
  return (
    <button className={`square ${isWin ? "win" : ""}`} onClick={onClick}>
      {val}
    </button>
  );
}
