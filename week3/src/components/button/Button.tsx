import React from 'react';
import './_button.css';

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'children'> & {
    children: React.ReactNode;
    isDisabled?: boolean;
    size?: 'medium' | 'large' | 'small';
    buttonType?: 'primary' | 'secondary';
};

function Button(props: ButtonProps) {
    const { onClick, isDisabled, children, size, buttonType, ...rest } = props;
    return (
        <button
            className={`button button--size--${size} button--type--${buttonType}`}
            {...rest}
            disabled={isDisabled}
            onClick={handleClick}
        >
            {children}
        </button>
    );
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (onClick && !isDisabled) {
            onClick(event);
        }
    }
}

export default Button;
