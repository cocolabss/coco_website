module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Fira Code', 'sans-serif'],
			},
			colors: {
				teal: {
					DEFAULT: '#00C2D0',
				},
				teallight: {
					DEFAULT: '#A4D7DC',
				},
				tealbg: {
					DEFAULT: '#c8e7ea',
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