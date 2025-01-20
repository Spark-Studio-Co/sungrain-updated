/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#F38810',
				secondary: '#223137',
				tertiary: '#D25127',
			},
			fontFamily: {
				'gotham': ['Gotham Pro', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'unisans': ['Uni Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
