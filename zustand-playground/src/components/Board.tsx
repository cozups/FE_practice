import { calculateStatus, calculateTurns, calculateWinner } from "../lib/utils";
import { useGameStore } from "../store/game";
import Square from "./Square";

export default function Board() {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquare);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const player = xIsNext ? "X" : "O";
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const status = calculateStatus(winner, turns, player);

  const handleClick = (i: number) => {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <div className="my-4">{status}</div>
      <div className="grid grid-cols-3 grid-rows-3 w-48 h-48 gap-1">
        {squares.map((square, squareIndex) => (
          <Square key={squareIndex} value={square} onSquareClick={() => handleClick(squareIndex)} />
        ))}
      </div>
    </>
  );
}
