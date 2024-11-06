import React from 'react';
import { twMerge } from 'tailwind-merge';

type SelectBoxProps = {
    options: { label: string; value: string }[];
    size?: keyof typeof sizeStyles;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const sizeStyles: {[key:string]:string} = {
    small: 'w-24 h-8',
    medium: 'w-40 h-10',
    large: 'w-64 h-12'
};

const SelectBox: React.FC<SelectBoxProps> = ({ options, size = 'medium', ...rest }) => {
    const selectClassName = twMerge(
        `border text-gray-800 border-blue-500 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300`,
        sizeStyles[size]
    );

    return (
        <select className={selectClassName} {...rest}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
