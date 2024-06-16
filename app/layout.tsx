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
	title: 'Mikhail Wahib - Fullstack Developer',
	description:
		"Explore a web developer's portfolio featuring a collection of software projects and full-stack expertise. Discover a passion for software engineering in this curated showcase of creativity and code.",
	keywords: [
		'software engineering',
		'web development',
		'fullstack developer',
		'web projects',
		'portfolio',
		'web design',
		'web development',
		'HTML',
		'CSS',
		'JavaScript',
		'React',
		'Node.js',
		'Express',
		'TypeScript',
		'Next.js',
		'Vue.js',
		'Ruby on Rails',
		'Ruby',
		'python',
		'Flask',
		'PostgreSQL',
		'MongoDB',
		'Prisma',
		'Figma',
		'Adobe XD',
		'Vercel',
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.className} bg-background text-white overflow-x-hidden`}
			>
				<Header />
				{children}
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	)
}
