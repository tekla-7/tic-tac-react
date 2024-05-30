import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare , activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectSguare(rowIndex, colIndex) {
    setGameBoard((prevGameboard) => {
        const updatedBoard=[...prevGameboard.map(innerArray=>[...innerArray])]
        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return  updatedBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSguare(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
