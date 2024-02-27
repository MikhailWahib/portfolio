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
				background: "#000",
				backgroundSecondary: "#1c1c1c",
				lightText: "#fff",
			},
			boxShadow: {
				linkBtnShadow: "-4px 4px 0px #12feaa",
			},
		},
	},
	plugins: [],
}
export default config
