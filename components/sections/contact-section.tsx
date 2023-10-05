import LinkBtn from '../link-btn'
import SectionHeading from '../section-heading'

import { AiFillGithub } from 'react-icons/ai'
const ContactSection = () => {
	return (
		<section id='contact' className='min-h-0 mb-20'>
			<div>
				<SectionHeading title="let's colaborate" />
				<div className='flex flex-col items-center gap-8 mx-auto w-[min(55rem,100%)] mt-16'>
					<p className='text-center text-lg'>
						I am currently looking for opportunies to learn and grow in the web
						development industry, my inbox is always open! If you have any
						questions or just want to say hello, please feel free to contact me
						with the email link below.
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
			</div>
		</section>
	)
}

export default ContactSection
