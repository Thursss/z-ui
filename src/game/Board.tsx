import React, { FC, useState } from 'react';
import Square from './Square';

interface historyProps {
  point: number;
  old: null | string;
  new: null | string;
}

const Board: FC<any> = () => {
  const [history, setHistory] = useState<historyProps[]>([]);
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
    squareArrCopy[i] = operate % 2 === 0 ? 'X' : 'O';
    history[operate] = {
      point: i,
      old: squareArr[i],
      new: squareArrCopy[i],
    };
    setOperate(operate + 1);
    setHistory(history);
    setsquareArr(squareArrCopy);
    const winner = calculateWinner(squareArrCopy);
    if (winner) alert(`winner is ${winner}`);
  };

  const goBack = (index: number) => {
    let operateCopy = 0;
    if (index <= operate) operateCopy = operate - index;
    const squareArrCopy = squareArr.slice();
    for (let i = history.length - 1; i >= operateCopy; i--) {
      squareArrCopy[history[i].point] = history[i].old;
    }
    setOperate(operateCopy);
    setsquareArr(squareArrCopy);
  };

  const renderSquare = (i: number) => {
    return <Square val={squareArr[i]} onClick={() => handleClick(i)} />;
  };
  return (
    <div>
      <div className="status">
        {`Next player:  ${operate % 2 === 0 ? 'X' : 'O'}`}
      </div>
      <button
        disabled={operate <= 0}
        type="button"
        onClick={() => {
          goBack(1);
        }}
      >
        悔棋
      </button>
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
