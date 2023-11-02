import SectionHeading from "../section-heading"
import Technologies from "../technologies"
const About = () => {
	return (
		<section id='about'>
			<div>
				<SectionHeading title='About' />
				<div className='mt-16'>
					<h3 className='text-xl text-primary'>Who am I</h3>
					<p className='text-xl mt-3 pr-4 leading-[1.75]'>
						I'm a <span className='text-primary'>Full-Stack developer</span>,
						dedicated to creating engaging and user-friendly web interfaces.{" "}
						<br /> My passion lies in turning design concepts into interactive
						web experiences. <br /> I thrive on continuous learning and
						exploring new fields, constantly expanding my knowledge and skills.{" "}
						<br /> I understand the importance of clean code, effective
						communication, and collaboration in delivering exceptional digital
						solutions. <br />
						let's{" "}
						<a
							href='#contact'
							className='text-primary underline transition hover:opacity-70'
						>
							connect
						</a>{" "}
						and explore exciting web development opportunities together.
					</p>
				</div>
				<div className='mt-24'>
					<h3 className='text-lg text-primary'>Technologies</h3>
					<Technologies />
				</div>
			</div>
		</section>
	)
}

export default About
