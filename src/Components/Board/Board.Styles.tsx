import styled from "@emotion/styled";

export const StyledBoard = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;

  .status,
  .winner {
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
  }

  button {
    margin-top: 15px;
    margin-bottom: 16px;
    width: 80px;
    height: 40px;
    background-color: #8acaca;
    color: white;
    font-size: 16px;
  }

  .board-container {
    background-color: #eee;
    width: 208px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border: 3px #eee solid;

    .board-row {
      display: flex;

      .square {
        width: 60px;
        height: 60px;
        background-color: #ddd;
        margin: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: white;
      }
    }
  }
`;
