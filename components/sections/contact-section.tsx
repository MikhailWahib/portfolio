import FadeinDiv from "@/framer-components/fadein-div"
import LinkBtn from "../link-btn"
import SectionHeading from "../section-heading"

import { AiFillGithub } from "react-icons/ai"
const ContactSection = () => {
	return (
		<section id='contact' className='min-h-0 mb-20'>
			<FadeinDiv>
				<SectionHeading title="let's colaborate" />
				<div className='flex flex-col items-center gap-8 mx-auto w-[min(55rem,100%)] mt-16'>
					<p className='text-center text-lg'>
						I am actively seeking new opportunities to expand my skills and
						knowledge in the web development industry. My inbox is always open!
						If you have any inquiries or simply want to say hello, please don't
						hesitate to reach out to me via the email link below.
					</p>
					<LinkBtn title="Let's Chat!" href='mailto:mikhailwahib20@gmail.com' />
					<a
						href='https://github.com/MikhailWahib'
						target='_blank'
						className='transition hover:text-primary'
						aria-label='GitHub repository'
					>
						<AiFillGithub size={40} />
					</a>
				</div>
			</FadeinDiv>
		</section>
	)
}

export default ContactSection
