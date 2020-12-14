import React from "react";
import { TSign } from "./Board/Board";

interface IProps {
  sign?: TSign;
  registerClick: () => void;
}

export const Square = (props: IProps) => {
  const { sign, registerClick } = props;

  return (
    <div className="square" onClick={registerClick}>
      {sign}
    </div>
  );
};
