// @flow

import React, { type Node } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type Props = {
  className?: string,
  onClick?: () => void,
  children: Node,
  disabled?: boolean,
  type?: string,
  isPrimary?: boolean,
  isSecondary?: boolean
};

const Button = ({
  className,
  onClick,
  children,
  disabled,
  type,
  isPrimary,
  isSecondary,
}: Props) => (
  <button
    disabled={disabled}
    className={`button ${isPrimary ? 'button--is_primary' : ''} ${
      isSecondary ? 'button--is_secondary' : ''
    } ${disabled ? 'button--is_disabled' : ''}  ${className || ''}`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

Button.defaultProps = {
  disabled: false,
  isPrimary: true,
  type: 'button',
};

export default Button;
