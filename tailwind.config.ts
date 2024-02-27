import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#12feaa",
				secondary: "#232323",
				background: "black",
				// backgroundSecondary: "black",
				lightText: "#fff",
			},
			boxShadow: {
				linkBtnShadow: "-4px 4px 0px #12feaa",
			},
			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
			},
			keyframes: {
				spotlight: {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
}
export default config
