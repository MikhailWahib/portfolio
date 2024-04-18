import Hero from "@/components/sections/hero-section"
import About from "@/components/sections/about-section"
import Projects from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
	return (
		<main className='min-h-screen pt-[70px]'>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	)
}
