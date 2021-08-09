import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import cx from 'classnames';
import { BaseProps } from '../../type/BaseProps';

// 按钮尺寸
export type ButtonSize = 'lg' | 'sm';
// 按钮类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps extends BaseProps {
  size?: ButtonSize;
  btnType?: ButtonType;
  disabled?: boolean;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (prop) => {
  // 解构参数
  const { btnType, className, disabled, size, children, href, ...restProps } =
    prop;
  // 组建类名
  const classes = cx('z-btn', className, {
    [`z-btn-${size}`]: size,
    [`z-btn-${btnType}`]: btnType,
    disabled: btnType === 'link' && href && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};
export default Button;
