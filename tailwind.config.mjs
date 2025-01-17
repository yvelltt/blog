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
				"serif": ['"Open Sans"', "serif"], // Otra fuente para el cuerpo
			},

			fontSize: {

				// #### Body Copy
				"body": "14px",

			},
			colors: {
				'hub-title': '#121020',
				'hub-subtitle': '#888888',
				'hub-border': '#EDEDED',
				'hub-inactive': '#B0B0B0',
				'hub-background': '#FFFFFF',
				'hub-color': '#FFFFFF',
				'icons': '#6E6E6E',
			},
			backgroundImage: {
				'btn-gradient': 'linear-gradient(to right, #825BDD, #5327BA)', // Gradiente para botones
			},

			// colors: {
			// 	// ### Primary
			// 	"dark-blue-1": "hsl(217, 28%, 15%)", //(intro and email sign up background)
			// 	"dark-blue-2": "hsl(218, 28%, 13%)", //(main background)
			// 	"dark-blue-3": "hsl(216, 53%, 9%)", //(footer background)
			// 	"dark-blue-4": "hsl(219, 30%, 18%)", //(testimonials background)
			// 	// ### Accent
			// 	"cyan": "hsl(176, 68%, 64%)",
			// 	"blue": "hsl(198, 60%, 50%)",
			// 	"light-red": "hsl(0, 100%, 63%)",
			// 	// ### Neutral
			// 	"white-neutral": "hsl(0, 0%, 100%)"
			// },
			// // ## Shadows
			// boxShadow: {

			// 	"testimonial": "0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
			// },
		},

	},
	plugins: [],
}
