import { AiFillGithub } from "react-icons/ai"

import { Project } from "@/types"
import FadeinDiv from "@/framer-components/fadein-div"

interface Props {
	data: Project
}

const OtherProjectCard = ({ data }: Props) => {
	return (
		<FadeinDiv className='relative border-2 border-primary before:content-[""] before:absolute before:top-3 before:left-3 before:w-full before:h-full before:border-2 before:border-primary before:-z-10 before:transition-all hover:before:left-2 hover:before:top-2'>
			<li className='bg-background h-full'>
				<div className='flex flex-col gap-5 h-full p-5'>
					<div className='flex items-center justify-between'>
						{data.url ? (
							<a href={data.url} target='_blank'>
								<h3 className='text-lg text-primary font-bold hover:underline'>
									{data.title}
								</h3>
							</a>
						) : (
							<h3 className='text-lg text-primary font-bold'>{data.title}</h3>
						)}
						<div className='transition hover:text-primary'>
							<a
								href={data.repo}
								target='_blank'
								aria-label='GitHub repository'
							>
								<AiFillGithub size={32} />
							</a>
						</div>
					</div>
					<p>{data.description}</p>
					<div className='text-primary mt-auto'>
						{data.techstack.join(", ")}
					</div>
				</div>
			</li>
		</FadeinDiv>
	)
}

export default OtherProjectCard
