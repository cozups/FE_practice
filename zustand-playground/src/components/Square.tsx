interface SquareProps {
  value: "X" | "O" | null;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button onClick={onSquareClick} className="bg-white border font-bold flex items-center justify-center w-16 h-16">
      {value}
    </button>
  );
}
