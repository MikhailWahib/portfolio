import { FaLocationDot } from "react-icons/fa6"
import LinkBtn from "../link-btn"
import FadeinDiv from "@/framer-components/fadein-div"
import PopupSpan from "@/framer-components/popup-span"
import { Spotlight } from "../ui/spotlight"

const HeroSection = () => {
	return (
		<section className='flex items-center pt-0 w-full text-[1rem] sm:text-[1.35rem] font-bold'>
			<Spotlight
				className='-top-40 left-0 md:left-60 md:-top-20'
				fill='white'
			/>
			<div className='flex flex-col items-start w-[65rem] mx-auto'>
				<PopupSpan>
					<p className='text-[1em]'>Welcome! 🙋🏽‍♂️ My name is...</p>
				</PopupSpan>
				<PopupSpan delay={0.2}>
					<h1 className='text-[2em] md:text-[3em] leading-[1.25] md:leading-[1.5] font-bold text-primary'>
						Mikhail Wahib
					</h1>
				</PopupSpan>
				<PopupSpan delay={0.4}>
					<h2 className='text-[1em] md:text-[1.75em]'>Full-Stack Developer</h2>
				</PopupSpan>
				<PopupSpan delay={0.6}>
					<div className='flex items-center gap-4 text-sm my-5'>
						<FaLocationDot className='text-primary' /> Cairo, Egypt
					</div>
				</PopupSpan>
				<PopupSpan delay={0.8}>
					<p className='text-base sm:text-base md:text-xl leading-[1.5] pr-10 font-normal'>
						I'm a Full-Stack Developer who's dedicated to crafting accessible
						and performant web applications. With a keen eye for detail and an
						insatiable passion for learning, I'm always seeking ways to improve
						the web for all users. Let's work together to create outstanding
						digital solutions!
					</p>
				</PopupSpan>
				<PopupSpan delay={1}>
					<LinkBtn
						title='check out my projects'
						href='#projects'
						className='mt-8'
					/>
				</PopupSpan>
			</div>
		</section>
	)
}

export default HeroSection
