import "./globals.css";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Roboto_Mono, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
});

const syne = Syne({
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	variable: "--font-syne",
});

export const metadata: Metadata = {
	title: "Mikhail Wahib - Software Developer",
	description:
		"I'm Mikhail, a software developer with interests in backend and fullstack development. I love learning new things and exploring different technologies. Let's connect and build something remarkable together.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} ${syne.variable} bg-background text-white overflow-x-hidden font-sans antialiased`}
			>
				<Header />
				{children}
				{process.env.NODE_ENV === "production" && <Analytics />}
			</body>
		</html>
	);
}
