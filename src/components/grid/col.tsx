import React, { FC } from 'react';
import cx from 'classnames';

interface ColProps {
  offset?: number;
  flex?: string | number;
  span?: number;
}

const Col: FC<ColProps> = (props) => {
  const { offset = 0, flex, span, children } = props;
  const className = cx('z-col', { [`z-col-${span}`]: span });
  return <div className={className}>{children}</div>;
};

export default Col;
