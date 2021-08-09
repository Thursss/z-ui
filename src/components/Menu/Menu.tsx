import React, { useState, createContext } from 'react';
import cx from 'classnames';
import { BaseProps } from '../../type/BaseProps';

type MenuMode = 'horizontal' | 'vertical';

export interface MenuProps extends BaseProps {
  defaultIndex?: number;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

export interface MenuContentProps {
  index: number;
  onSelect?: (selectedIndex: number) => void;
}

export const MenuContent = createContext<MenuContentProps>({
  index: 0,
});

const Menu: React.FC<MenuProps> = (props) => {
  const { className, children, style, mode, defaultIndex, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = cx('z-menu', className, {
    'menu-vertical': mode === 'vertical',
  });
  const handleClick = (index: number) => {
    console.log(index);
    setActive(index);
    if (onSelect) onSelect(index);
  };
  const passedContext: MenuContentProps = {
    index: currentActive ?? 0,
    onSelect: handleClick,
  };

  return (
    <ul className={classes} style={style}>
      <MenuContent.Provider value={passedContext}>
        {children}
      </MenuContent.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;
