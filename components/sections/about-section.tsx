import FadeinDiv from "@/framer-components/fadein-div"
import SectionHeading from "../section-heading"
import Technologies from "../technologies"
const AboutSection = () => {
	return (
		<section id='about'>
			<SectionHeading title='About' />
			<FadeinDiv className='max-w-[1800px] mx-auto'>
				<div className='mt-16'>
					<h3 className='text-xl text-primary'>Who am I</h3>
					<p className='text-base sm:text-base md:text-xl mt-5'>
						I'm <span className='text-primary'>Mikhai</span>, a full-stack
						software developer fueled by an insatiable thirst for knowledge.{" "}
						<br /> I relish the opportunity to tackle new challenges and thrive
						on continuous growth in the dynamic world of technology. <br /> With
						a passion for crafting elegant solutions, I'm dedicated to pushing
						the boundaries of what's possible. <br /> Let's{" "}
						<a href='#contact' className='text-primary hover:underline'>
							connect
						</a>{" "}
						and build something remarkable together.
					</p>
				</div>
				<div className='mt-24'>
					<h3 className='text-lg text-primary'>Technologies</h3>
					<Technologies />
				</div>
			</FadeinDiv>
		</section>
	)
}

export default AboutSection
