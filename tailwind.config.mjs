/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Esto permite usar 'dark:' en clases
	theme: {
		extend: {
			//      ### Fonts
			fontFamily: {
				// #### Headings, Call- to - actions, Header Navigation
				"sans": ['"SF Pro Display"', 'sans-serif'], // Usando la fuente personalizada
				// #### Body
				// "serif": ['"Open Sans"', "serif"], // Otra fuente para el cuerpo
			},

			fontSize: {

				// #### Body Copy
				"body": "14px",

			},
			colors: {
				'hub-title': '#121020',
				'hub-subtitle': '#888888',
				'hub-light-bg-2': '#FAFAFA',
				'hub-border': '#EDEDED',
				'hub-inactive': '#B0B0B0',
				'hub-background': '#FFFFFF',
				'hub-color': '#FFFFFF',
				'icons': '#6E6E6E',
			},
			backgroundImage: {
				'btn-gradient': 'linear-gradient(to right, #825BDD, #5327BA)', // Gradiente para botones
			},
		},

	},
	plugins: [require('tailwindcss-animate')],

}
