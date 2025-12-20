import './globals.css'
import Header from '@/components/header'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
import Snowfall from '@/components/snowfall'

const roboto = Roboto_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
	title: 'Mikhail Wahib - Software Developer',
	description: "I'm Mikhail, a software developer with interests in backend and fullstack development. I love learning new things and exploring different technologies."
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
				<Snowfall />
				<Header />
				{children}
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	)
}
