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
				background: "#141414",
				// backgroundSecondary: "black",
				lightText: "#fff",
			},
			boxShadow: {
				linkBtnShadow: "-4px 4px 0px #12feaa",
				'glow': '0 0 20px rgba(18, 254, 170, 0.3)',
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-out forwards",
				"slide-up": "slideUp 0.5s ease-out forwards",
				"pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"spin-slow": "spin 20s linear infinite",
				"spin-slow-reverse": "spinReverse 20s linear infinite",
				"float": "float 6s ease-in-out infinite",
				"glow": "glow 2s ease-in-out infinite",
				"orbit": "orbit 20s linear infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				pulse: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				glow: {
					"0%, 100%": { boxShadow: "0 0 20px rgba(18, 254, 170, 0.3)" },
					"50%": { boxShadow: "0 0 30px rgba(18, 254, 170, 0.5)" },
				},
				spinReverse: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(-360deg)" },
				},
				orbit: {
					"0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
					"100%": { transform: "rotate(360deg) translateX(150px) rotate(-360deg)" },
				},
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
			perspective: {
				'1000': '1000px',
			},
			transformStyle: {
				'3d': 'preserve-3d',
			},
			rotate: {
				'x-90': 'rotateX(90deg)',
				'-x-90': 'rotateX(-90deg)',
				'y-90': 'rotateY(90deg)',
				'-y-90': 'rotateY(-90deg)',
				'y-180': 'rotateY(180deg)',
			},
			translate: {
				'z-150': 'translateZ(150px)',
				'-z-150': 'translateZ(-150px)',
				'z-160': 'translateZ(160px)',
				'-z-160': 'translateZ(-160px)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
export default config
