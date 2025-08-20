import React from 'react';
import './Card.css';

function Card ({
  title,
  subtitle,
  children,
  variant = 'default',
  size = 'medium',
  className = '',
  onClick,
  ...props
}) {
  const cardClasses = [
    'card',
    `card--${variant}`,
    `card--${size}`,
    onClick ? 'card--clickable' : '',
    className,
  ].filter(Boolean).join(' ');

  const CardElement = onClick ? 'button' : 'div';

  return (
    <CardElement
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {(title || subtitle) && (
        <div className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card__content">
        {children}
      </div>
    </CardElement>
  );
}

export default Card;
