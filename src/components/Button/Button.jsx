import React from 'react';
import './Button.css';

function Button({
  text,
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const buttonContent = children || text;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      data-variant={variant}
      {...props}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
