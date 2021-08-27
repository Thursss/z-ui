import React, { FC, useState } from 'react';
import Square from './Square';

const Board: FC<any> = () => {
  const [squareArr, setsquareArr] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [operate, setOperate] = useState<number>(0);

  const calculateWinner = (square: (string | null)[]): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[b] === square[c])
        return square[a];
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (squareArr[i] != null) return;
    const squareArrCopy = squareArr.slice();
    setOperate(operate + 1);
    squareArrCopy[i] = operate % 2 === 0 ? 'X' : 'O';
    setsquareArr(squareArrCopy);
    const winner = calculateWinner(squareArrCopy);
    if (winner) alert(`winner is ${winner}`);
  };

  const renderSquare = (i: number) => {
    return <Square val={squareArr[i]} onClick={() => handleClick(i)} />;
  };
  return (
    <div>
      <div className="status">{`Next player:  ${
        operate % 2 === 0 ? 'X' : 'O'
      }`}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
