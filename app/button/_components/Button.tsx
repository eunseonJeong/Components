import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    children: React.ReactNode;
    color?: 'green' | 'blue' | 'red'; // theme colors
    size?: 'medium' | 'small';
    outline?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 사이즈
const sizeStyles = {
    medium: 'h-9 text-base px-4',
    small: 'h-7 text-sm px-3',
    wMedium: 'h-9 w-40 text-base px-4 flex justify-center items-center'
};

// 색상
const colorStyles = {
    green: 'bg-green-500 text-white hover:bg-green-400 active:bg-green-600',
    blue: 'bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600',
    red: 'bg-red-500 text-white hover:bg-red-400 active:bg-red-600'
};

// 테두리
const outlineColorStyles = {
    green: 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
    blue: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    red: 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
};

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           color = 'green',
                                           size = 'medium',
                                           outline = false,
                                           ...rest
                                       }) => {
    const selectedColor = outline ? outlineColorStyles[color] : colorStyles[color];
    const sizeClass = sizeStyles[size];

    const buttonClassName = twMerge(
        `inline-flex items-center font-bold rounded px-4 cursor-pointer`,
        selectedColor,
        sizeClass
    );

    return (
        <button className={buttonClassName} {...rest}>
            {children}
        </button>
    );
};

export default Button;
