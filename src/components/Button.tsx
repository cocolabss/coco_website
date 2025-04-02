import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    variant?: 'blue' | 'white';
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    variant = 'blue'
}) => {
    const baseClasses = `py-3 px-8 rounded-none font-medium
        shadow-[-4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[-6px_6px_0_0_rgba(0,0,0,0.2)]
        transition-all duration-200 ease-in-out flex items-center gap-2 group
        disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

    const variantClasses = variant === 'blue'
        ? 'bg-blue text-white'
        : 'bg-white text-blue';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses}`}
        >
            {text}
            <FaChevronRight className={`w-3 h-3 group-hover:translate-x-2 transition-transform duration-500 ${variant === 'blue' ? 'text-white' : 'text-blue'
                }`} />
        </button>
    );
};

export default Button;