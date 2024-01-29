import { AiFillGithub, AiFillHtml5 } from "react-icons/ai"

import { Project } from "@/types"
import FadeinLi from "@/framer-components/fadein-li"
import {
	BiLogoJavascript,
	BiLogoTypescript,
	BiLogoCss3,
	BiLogoReact,
	BiLogoTailwindCss,
	BiLogoNodejs,
	BiLogoMongodb,
	BiLogoPostgresql,
} from "react-icons/bi"
import { FaPython, FaVuejs } from "react-icons/fa6"
import { SiExpress } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaExternalLinkAlt } from "react-icons/fa"

interface Props {
	data: Project
}

const iconsMap: { [key: string]: any } = {
	js: <BiLogoJavascript />,
	ts: <BiLogoTypescript />,
	py: <FaPython />,
	html: <AiFillHtml5 />,
	css: <BiLogoCss3 />,
	react: <BiLogoReact />,
	next: <TbBrandNextjs />,
	vue: <FaVuejs />,
	tailwind: <BiLogoTailwindCss />,
	node: <BiLogoNodejs />,
	express: <SiExpress />,
	mongodb: <BiLogoMongodb />,
	postgres: <BiLogoPostgresql />,
}

const ProjectsCard = ({ data }: Props) => {
	return (
		<FadeinLi className='relative border-2 border-primary before:content-[""] before:absolute before:top-3 before:left-3 before:w-full before:h-full before:border-2 before:border-primary before:-z-10 before:transition-all hover:before:left-2 hover:before:top-2'>
			<div className='flex flex-col gap-5 h-full p-5 bg-background'>
				<div className='flex items-center justify-between'>
					{data.url ? (
						<a href={data.url} target='_blank'>
							<h3 className='inline-block text-lg text-primary font-bold hover:underline'>
								{data.title}
							</h3>
							<span className='inline-block ml-2 text-primary text-sm'>
								<FaExternalLinkAlt />
							</span>
						</a>
					) : (
						<h3 className='text-lg text-primary font-bold'>{data.title}</h3>
					)}
					<div className='transition hover:text-primary'>
						<a
							// @ts-ignore
							href={data.repo}
							target='_blank'
							aria-label='GitHub repository'
						>
							<AiFillGithub size={32} />
						</a>
					</div>
				</div>
				<p>{data.description}</p>
				<div className='flex gap-2 text-2xl text-primary mt-auto'>
					{data.techstack.map((tech) => (
						<span key={tech}>{iconsMap[tech]}</span>
					))}
				</div>
			</div>
		</FadeinLi>
	)
}

export default ProjectsCard
