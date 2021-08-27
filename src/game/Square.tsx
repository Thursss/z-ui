import React, { FC } from 'react';

interface SquareProps {
  val?: string | null;
  onClick?: () => void;
}

const Square: FC<SquareProps> = (props) => {
  const { val = '', onClick } = props;

  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <div onClick={handleClick} className="square">
      {val}
    </div>
  );
};

export default Square;
