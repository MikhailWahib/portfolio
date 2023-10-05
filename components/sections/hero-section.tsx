import { FaLocationDot } from 'react-icons/fa6'
import LinkBtn from '../link-btn'

const Hero = () => {
	return (
		<section className='flex items-center w-full text-[1rem] sm:text-[1.35rem] font-bold'>
			<div className='flex flex-col items-start w-[65rem] mx-auto'>
				<p className='text-[1em]'>Welcome! 🙋🏽‍♂️ My name is...</p>
				<h1 className='text-[2em] md:text-[3em] leading-[1.25] md:leading-[1.5] font-bold text-primary'>
					Mikhail Wahib
				</h1>
				<h2 className='text-[1em] md:text-[1.75em]'>Front End Developer</h2>
				<div className='flex items-center gap-4 text-[.75em] my-5'>
					<FaLocationDot color='#12feaa' /> Cairo, Egypt
				</div>
				<p className='text-xl leading-[1.5] pr-10 font-normal'>
					A Front-End Software developer who focuses on creating accessible and
					performant user experiences on the web. With a fine eye for detail and
					a passion for learning, I am always searching for ways to improve the
					quality of the web for all users.
				</p>
				<LinkBtn
					title='check out my projects'
					href='#projects'
					className='mt-8'
				/>
			</div>
		</section>
	)
}

export default Hero
