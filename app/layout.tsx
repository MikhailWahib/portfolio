import './globals.css'
import Header from '@/components/header'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'

const roboto = Roboto_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
	title: 'Mikhail Wahib - Frontend Developer',
	description:
		"Explore a web developer's portfolio featuring a collection of web projects and front-end expertise. Discover a passion for web development and software engineering in this curated showcase of creativity and code.",
	keywords: [
		'web development',
		'front-end development',
		'software engineering',
		'web projects',
		'web developer portfolio',
		'HTML',
		'CSS',
		'JavaScript',
		'React',
		'Node.js',
		'TypeScript',
		'web design',
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<Header />
				{children}
				<Analytics />
			</body>
		</html>
	)
}
