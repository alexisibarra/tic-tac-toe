import React, { FC } from "react";
import { Board } from "./Board/Board";

const Game: FC = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
