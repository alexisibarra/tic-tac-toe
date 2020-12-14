import { IBoardState, TSign } from "../Board";

const checkIfPlayerWonRow = (
  boardState: IBoardState,
  sign: TSign,
  row: number
) => boardState[row].filter((col) => col === sign).length === 3;

const checkIfPlayerWonColumn = (
  boardState: IBoardState,
  sign: TSign,
  col: number
) =>
  [0, 1, 2].map((row) => boardState[row][col]).filter((row) => row === sign)
    .length === 3;

const checkIfPlayerWonDiagonal = (boardState: IBoardState, sign: TSign) =>
  [0, 1, 2]
    .map((index) => boardState[index][index])
    .filter((row) => row === sign).length === 3;

const checkIfPlayerWonReverseDiagonal = (
  boardState: IBoardState,
  sign: TSign
) =>
  [0, 1, 2]
    .map((index) => boardState[index][2 - index])
    .filter((row) => row === sign).length === 3;

export const checkIfPlayerWon = (boardState: IBoardState, sign: TSign) => {
  const playerWonAnyRow =
    checkIfPlayerWonRow(boardState, sign, 0) ||
    checkIfPlayerWonRow(boardState, sign, 1) ||
    checkIfPlayerWonRow(boardState, sign, 2);

  const playerWonAnyColumn =
    checkIfPlayerWonColumn(boardState, sign, 0) ||
    checkIfPlayerWonColumn(boardState, sign, 1) ||
    checkIfPlayerWonColumn(boardState, sign, 2);

  return (
    playerWonAnyRow ||
    playerWonAnyColumn ||
    checkIfPlayerWonDiagonal(boardState, sign) ||
    checkIfPlayerWonReverseDiagonal(boardState, sign)
  );
};
