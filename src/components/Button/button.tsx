import React, { FC } from 'react';
import cx from 'classnames';
import { BaseProps } from '../../type/BaseProps';

// 按钮尺寸
export type ButtonSize = 'lg' | 'sm';
// 按钮类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps extends BaseProps {
  size?: ButtonSize;
  type?: ButtonType;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

export const Button: FC<BaseButtonProps> = (prop) => {
  // 解构参数
  const { type, className, disabled, size, children, href, onClick } = prop;
  // 组建类名
  const classNames = cx('z-btn', className, {
    [`z-btn-${size}`]: size,
    [`z-btn-${type}`]: type,
    disabled: type === 'link' && href && disabled,
  });

  if (type === 'link' && href) {
    return (
      <a className={classNames} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={() => {
        console.log('button click');
        if (onClick) onClick();
      }}
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
};
