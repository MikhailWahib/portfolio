"use client"

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
import {
	SiExpress,
	SiRubyonrails,
	SiFlask,
	SiJest,
	SiRedis,
	SiPrisma,
	SiSqlite,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { DiRuby } from "react-icons/di"
import { CardContainer, CardBody, CardItem } from "./ui/3d-card"
// import Image from "next/image"

interface Props {
	data: Project
}

const iconsMap: { [key: string]: any } = {
	js: <BiLogoJavascript />,
	ts: <BiLogoTypescript />,
	py: <FaPython />,
	ruby: <DiRuby />,
	html: <AiFillHtml5 />,
	css: <BiLogoCss3 />,
	react: <BiLogoReact />,
	next: <TbBrandNextjs />,
	vue: <FaVuejs />,
	tailwind: <BiLogoTailwindCss />,
	node: <BiLogoNodejs />,
	express: <SiExpress />,
	rails: <SiRubyonrails />,
	flask: <SiFlask />,
	mongodb: <BiLogoMongodb />,
	postgres: <BiLogoPostgresql />,
	redis: <SiRedis />,
	sqlite: <SiSqlite />,
	prisma: <SiPrisma />,
	jest: <SiJest />,
}

const ProjectsCard = ({ data }: Props) => {
	return (
		<FadeinLi className='h-full'>
			<CardContainer className='h-full'>
				<CardBody className='flex flex-col bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-primary/[0.25] max-w-[600px] w-auto h-full rounded-xl p-6 border'>
					<CardItem translateZ='50' className='text-xl font-bold text-primary'>
						{data.title}
					</CardItem>
					<CardItem
						as='p'
						translateZ='60'
						className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
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
						{data.techstack.map((tech) => {
							return iconsMap[tech]
						})}
					</CardItem>
					<div className='flex justify-between items-center mt-auto'>
						{data.url && (
							<CardItem
								translateZ={20}
								as='button'
								className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-primary'
							>
								<a href={data.url} target='_blank'>
									Live Demo →
								</a>
							</CardItem>
						)}
						<CardItem
							translateZ={20}
							as='div'
							className='text-white text-3xl font-bold hover:text-primary ml-auto'
						>
							<a href={data.repo} target='_blank'>
								<AiFillGithub />
							</a>
						</CardItem>
					</div>
				</CardBody>
			</CardContainer>
		</FadeinLi>
	)
}

export default ProjectsCard
