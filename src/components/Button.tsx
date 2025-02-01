import React from 'react';

interface ButtonProps {
	text: string;
	background: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, background, onClick }) => {
	return (
		<button
			className={`mt-10 inline-block px-6 py-3 ${background} text-sm text-white rounded-lg hover:${background}-500`}
			style={{ fontWeight: 500 }}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;