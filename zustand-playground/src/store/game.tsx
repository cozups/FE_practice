import type { Square } from "../types";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useGameStore = create(
  combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
    return {
      setSquare: (nextSquares: Square[] | ((squares: Square[]) => Square[])) => {
        set((state) => ({ squares: typeof nextSquares === "function" ? nextSquares(state.squares) : nextSquares }));
      },
      setXIsNext: (nextXIsNext: boolean | ((xIsNext: boolean) => boolean)) => {
        set((state) => ({ xIsNext: typeof nextXIsNext === "function" ? nextXIsNext(state.xIsNext) : nextXIsNext }));
      },
    };
  })
);
