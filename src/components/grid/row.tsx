import React, { FC } from 'react';

interface RowProps {
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  gutter?: number;
}

const Row: FC<RowProps> = (props) => {
  const { align = 'top', justify = 'start', gutter = 0, children } = props;

  return <div className="z-row">{children}</div>;
};

export default Row;
