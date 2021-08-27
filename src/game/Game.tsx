import React, { FC } from 'react';
import Board from './Board';
import './css.scss';

const Game: FC<any> = () => {
  return (
    <div>
      <Board />
    </div>
  );
};

export default Game;
