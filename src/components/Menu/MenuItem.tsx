import React, { useContext } from 'react';
import cx from 'classnames';
import { MenuContent } from './menu';
import { BaseProps } from '../../type/BaseProps';

export interface MenuProps extends BaseProps {
  index?: number;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const MenuItem: React.FC<MenuProps> = (props) => {
  const { className, children, style, disabled, index } = props;
  const content = useContext(MenuContent);
  const classes = cx('z-menu-item', className, {
    disabled,
    active: content.index === index,
  });

  const handleClick = () => {
    if (content.onSelect) content.onSelect(index ?? 0);
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
