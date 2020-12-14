import React, { useState, useEffect } from "react";

import { Square } from "../Square";
import { StyledBoard } from "./Board.Styles";
import { checkIfPlayerWon } from "./Utils/checkIfPlayerWon";

export type TSign = "X" | "O";

export type IBoardState = [
  [TSign?, TSign?, TSign?],
  [TSign?, TSign?, TSign?],
  [TSign?, TSign?, TSign?]
];

export const Board = () => {
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [playerSign, setPlayerSign] = useState<TSign>("X");
  const [winner, setWinner] = useState<TSign | "None">("None");
  const [gameOver, setGameOver] = useState(false);
  const [markedSquares, setMarkedSquares] = useState(0);

  const [boardState, setBoardState] = useState<IBoardState>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);

  const markSquare = (row: number, col: number) => () => {
    const newBoardState = boardState;

    if (!boardState[row][col] && !gameOver) {
      newBoardState[row][col] = playerSign;

      setBoardState([...newBoardState]);

      if (checkIfPlayerWon(boardState, playerSign)) {
        setGameOver(true);
        setWinner(playerSign);

        return;
      }

      setMarkedSquares(markedSquares + 1);

      if (markedSquares === 8) {
        setGameOver(true);

        return;
      }

      changePlayer();
    }
  };

  const resetBoardState = () => {
    setBoardState([
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ]);

    setXIsPlaying(true);
    setGameOver(false);
    setWinner("None");
    setMarkedSquares(0);
  };

  const changePlayer = () => setXIsPlaying(!xIsPlaying);

  useEffect(() => {
    setPlayerSign(xIsPlaying ? "X" : "O");
  }, [xIsPlaying]);

  return (
    <StyledBoard>
      {gameOver ? (
        <div className="winner">Winner: {winner}</div>
      ) : (
        <div className="status">Next player: {playerSign}</div>
      )}

      <button onClick={resetBoardState}>Reset</button>

      <div className="board-container">
        {[0, 1, 2].map((row) => (
          <div key={`board-row-${row}`} className="board-row">
            {[0, 1, 2].map((col) => (
              <Square
                key={`board-col-${row}-${col}`}
                sign={boardState[row][col]}
                registerClick={markSquare(row, col)}
              />
            ))}
          </div>
        ))}
      </div>
    </StyledBoard>
  );
};
