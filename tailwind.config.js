module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Fira Code', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
                gray: {
                    DEFAULT: '#F2F2F1',
                },
				blue: {
                    DEFAULT: '#0376A3',
				},
				brown: {
					DEFAULT: '#835730',
				},
				brownlight: {
					DEFAULT: '#E3D6C7',
				},
			},
		},
	},
	plugins: [],
}