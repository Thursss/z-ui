import React, { FC, CSSProperties, ReactNode } from 'react';
import cx from 'classnames';

interface CardProps {
  bordered?: boolean;
  hoverable?: boolean;
  title?: string;
  extra?: ReactNode;
  foot?: ReactNode;
}

const Card: FC<CardProps> = (props) => {
  const {
    bordered = false,
    hoverable = false,
    title,
    extra,
    children,
    foot,
  } = props;
  const className = cx('z-card', {
    'z-card_hoverable': hoverable,
    'z-card_bordered': bordered,
  });
  return (
    <div className={className}>
      {(title || extra) && (
        <div className="z-card-head">
          <div className="z-card-head-title">{title}</div>
          <div className="z-card-extra">{extra}</div>
        </div>
      )}
      <div className="z-card-body">{children}</div>
      {foot && <div className="z-card-foot">{foot}</div>}
    </div>
  );
};

export default Card;
