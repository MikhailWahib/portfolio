'use client'

import { useRef } from 'react'
import { Project } from '@/types'

import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import {
	BiLogoJavascript,
	BiLogoTypescript,
	BiLogoCss3,
	BiLogoReact,
	BiLogoTailwindCss,
	BiLogoNodejs,
	BiLogoMongodb,
	BiLogoPostgresql,
} from 'react-icons/bi'
import { FaPython, FaVuejs, FaGolang, FaRust } from 'react-icons/fa6'
import {
	SiExpress,
	SiRubyonrails,
	SiFlask,
	SiJest,
	SiRedis,
	SiPrisma,
	SiSqlite,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiRuby } from 'react-icons/di'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'

interface Props {
	data: Project
}

const iconsMap: Record<string, JSX.Element> = {
	'js': <BiLogoJavascript />,
	'ts': <BiLogoTypescript />,
	'py': <FaPython />,
	'ruby': <DiRuby />,
	'go': <FaGolang />,
	'rust': <FaRust />,
	'html': <AiFillHtml5 />,
	'css': <BiLogoCss3 />,
	'react': <BiLogoReact />,
	'next': <TbBrandNextjs />,
	'vue': <FaVuejs />,
	'tailwind': <BiLogoTailwindCss />,
	'node': <BiLogoNodejs />,
	'express': <SiExpress />,
	'rails': <SiRubyonrails />,
	'flask': <SiFlask />,
	'mongodb': <BiLogoMongodb />,
	'postgres': <BiLogoPostgresql />,
	'redis': <SiRedis />,
	'sqlite': <SiSqlite />,
	'prisma': <SiPrisma />,
	'jest': <SiJest />,
}

const ProjectsCard = ({ data }: Props) => {
	const reposDivRef = useRef<HTMLDivElement>(null)
	return (
		<li className='h-full animate-fade-in'>
			<CardContainer className='h-full w-full'>
				<CardBody className='flex flex-col relative group/card hover:shadow-glow bg-background border-primary/[0.25] max-w-[600px] w-full h-full rounded-xl p-6 border transition-all duration-300'>
					<CardItem translateZ='50' className='text-xl font-bold text-primary'>
						{data.title}
					</CardItem>
					<CardItem
						as='p'
						translateZ='60'
						className='text-sm max-w-sm mt-2 text-neutral-300'
					>
						{data.description}
					</CardItem>
					{/* <CardItem translateZ='100' className='w-full mt-4'>
					{data.imgPath ? (
						<Image
						src={data.imgPath}
						height='1000'
							width='1000'
							className='h-60 w-full object-fit rounded-xl group-hover/card:shadow-xl'
							alt='thumbnail'
						/>
					) : (
						<div className='w-full h-full text-center'>
						<h3 className='text-6xl font-extrabold'>API</h3>
						</div>
					)}
				</CardItem> */}
					<CardItem
						translateZ={20}
						as='ul'
						className='flex my-10 text-xl gap-x-2 text-primary'
					>
						{data.techstack.map((tech, i) => {
							return <span key={tech + i} className='transition-transform hover:scale-110'>{iconsMap[tech]}</span>
						})}
					</CardItem>
					<div className='flex justify-between items-center mt-auto'>
						{data.url && (
							<CardItem
								translateZ={20}
								as='button'
								className='px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-primary transition-colors duration-300'
							>
								<a href={data.url} target='_blank'>
									Live Demo →
								</a>
							</CardItem>
						)}
						<CardItem
							translateZ={20}
							as='div'
							className='text-white text-3xl font-bold ml-auto'
						>
							{typeof data.repo === 'string' ? (
								<a
									href={data.repo}
									target='_blank'
									className='transition-colors duration-300 hover:text-primary'
								>
									<AiFillGithub />
								</a>
							) : (
								<div className='relative'>
									<button
										className='hover:text-primary transition-colors duration-300'
										onClick={() => {
											reposDivRef.current?.classList.toggle('hidden')
											reposDivRef.current?.classList.toggle('flex')
										}}
									>
										<AiFillGithub />
									</button>
									<div
										className='hidden absolute right-10 top-2 gap-2 text-xs bg-black/80 backdrop-blur-sm p-2 rounded-lg border border-primary/20'
										ref={reposDivRef}
									>
										<a
											href={data.repo.frontend}
											target='_blank'
											className='hover:text-primary transition-colors duration-300'
										>
											Frontend
										</a>
										<a
											href={data.repo.backend}
											target='_blank'
											className='hover:text-primary transition-colors duration-300'
										>
											Backend
										</a>
									</div>
								</div>
							)}
						</CardItem>
					</div>
				</CardBody>
			</CardContainer>
		</li>
	)
}

export default ProjectsCard
