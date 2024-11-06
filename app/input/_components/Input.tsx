import React from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = {
    size?: "small" | 'medium' | 'small';
} & React.InputHTMLAttributes<HTMLInputElement>;

const sizeStyles: {[key:string]:string} = {
    small: 'w-24 h-8',
    medium: 'w-40 h-10',
    large: 'w-64 h-12'
};

const Input: React.FC<InputProps> = ({ size = 'medium', ...rest }) => {
    const inputClassName = twMerge(
        `border text-gray-800 border-blue-500 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300`,
        sizeStyles[size]
    );

    return <input className={inputClassName} {...rest} />;
};

export default Input;
