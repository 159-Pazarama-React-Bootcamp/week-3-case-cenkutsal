import React from 'react';
import './_input.css';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name'> & {
    onChange?: React.ReactEventHandler<HTMLInputElement>;
    name: string;
    inputType?: 'email' | 'password';
};
function Input(props: InputProps) {
    const { inputType, ...rest } = props;
    return (
        <div className={'input-container'}>
            <input className={`input input--type--${inputType}`} {...rest} />
        </div>
    );
}

export default Input;
