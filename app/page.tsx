import { FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import LinkBtn from '@/components/link-btn'
import SectionHeading from '@/components/section-heading'
import Technologies from '@/components/technologies'
import Projects from '@/components/projects'
import fs from 'fs/promises'
import path from 'path'
import { Project } from '@/types'
import { cn } from '@/lib/utils'

const getData = async () => {
	try {
		const fileContents = await fs.readFile(
			path.join(process.cwd(), "data/projects.json"),
			"utf8"
		)
		return JSON.parse(fileContents) as Project[]
	} catch (error) {
		console.error(error)
	}
}

export default async function Home() {
	const projects = await getData()

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
				{/* Background Elements */}
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background' />
				<div className='absolute inset-0 bg-[linear-gradient(to_right,#12feaa0a_1px,transparent_1px),linear-gradient(to_bottom,#12feaa0a_1px,transparent_1px)] bg-[size:4rem_4rem]' />

				{/* Content */}
				<div className='relative container mx-auto px-4 md:px-8'>
					<div className='max-w-4xl mx-auto text-center space-y-8'>
						{/* Main Content */}
						<div className='space-y-8 animate-fade-in'>
							<div className='space-y-4'>
								<p className='text-primary/80 font-mono text-sm md:text-base animate-slide-up'>
									Hi, I'm ...
								</p>
								<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold animate-slide-up delay-100'>
									<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50'>
										Mikhail Wahib
									</span>
								</h1>
								<h2 className='text-2xl md:text-3xl lg:text-4xl text-white/70 animate-slide-up delay-200'>
									Software Developer
								</h2>
							</div>

							<div className='flex items-center justify-center gap-4 text-white/60 animate-slide-up delay-300'>
								<FaLocationDot className='text-primary' />
								<span>Cairo, Egypt</span>
							</div>

							<div className='flex justify-center gap-4 animate-slide-up delay-500'>
								<LinkBtn
									title='View Projects'
									href='#projects'
									variant="primary"
								/>
								<LinkBtn
									title='Contact Me'
									href='#contact'
									variant="secondary"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='relative py-20'>
				<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
				<div className='container mx-auto px-4 md:px-8 relative'>
					<SectionHeading title='About' />
					<div className='mt-16 max-w-4xl mx-auto'>
						<div className='prose prose-invert max-w-none animate-fade-in'>
							<h3 className='text-xl text-primary mb-6'>Who am I</h3>
							<p className='text-base md:text-lg text-white/70 leading-relaxed'>
								I'm <span className='text-primary'>Mikhail</span>, a software developer with interests in backend and fullstack development. I love learning new things and exploring different technologies. Let's{" "}
								<a href='#contact' className='text-primary hover:underline'>
									connect
								</a>{" "}
								and build something remarkable together.
							</p>
						</div>
						<div className='mt-24'>
							<h3 className='text-lg text-primary mb-8'>Technologies</h3>
							<Technologies />
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id='projects' className='py-20 relative'>
				<div className='absolute inset-0 bg-[linear-gradient(to_right,#12feaa0a_1px,transparent_1px),linear-gradient(to_bottom,#12feaa0a_1px,transparent_1px)] bg-[size:4rem_4rem]' />
				<div className='container mx-auto px-4 md:px-8 relative'>
					<SectionHeading title='Projects' />
					<div className='mt-16'>
						<Projects projects={projects} />
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id='contact' className='py-20 relative'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background' />
				<div className='container mx-auto px-4 md:px-8 relative'>
					<div className='max-w-3xl mx-auto text-center'>
						<SectionHeading title="let's Connect" />
						<div className='mt-16 space-y-8 animate-fade-in'>
							<p className='text-base md:text-lg text-white/70'>
								I am actively seeking new opportunities to expand my skills and
								knowledge in the web development industry. My inbox is always open!
								If you have any inquiries or simply want to say hello, please don't
								hesitate to reach out to me via the email link below.
							</p>
							<div className='flex flex-col items-center gap-6'>
								<LinkBtn
									title="Let's Chat!"
									href='mailto:mikhailwahib20@gmail.com'
									variant="primary"
								/>
								<div className="flex space-x-4">
									<a
										href='https://github.com/MikhailWahib'
										target='_blank'
										className={cn(
											"text-4xl text-white/70 hover:text-primary transition-all duration-300"
										)}
										aria-label='GitHub repository'
									>
										<AiFillGithub />
									</a>
									<a
										href='https://www.linkedin.com/in/mikhail-wahib/'
										target='_blank'
										className={cn(
											"text-4xl text-white/70 hover:text-primary transition-all duration-300"
										)}
										aria-label='LinkedIn profile'
									>
										<FaLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
