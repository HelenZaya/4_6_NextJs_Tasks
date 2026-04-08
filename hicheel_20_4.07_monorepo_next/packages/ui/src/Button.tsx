import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{
        padding: '10px 16px',
        borderRadius: '12px',
        border: 'none',
        background: '#3b82f6',
        color: 'white',
        fontWeight: 700,
        cursor: 'pointer'
      }}
      {...props}
    >
      {children}
    </button>
  );
};
