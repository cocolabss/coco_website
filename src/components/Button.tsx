interface ButtonProps {
	text: string;
	background: string;
}

const Button: React.FC<ButtonProps> = ({ text, background }) => {
	return (
		<button
			className={`mt-10 inline-block px-6 py-3 ${background} text-sm text-white rounded-lg hover:${background}-500`}
			style={{ fontWeight: 500 }}>
			{text}
		</button>
	);
};

export default Button;