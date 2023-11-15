import { promises as fs } from "fs"
import path from "path"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types"
import FadeinDiv from "@/framer-components/fadein-div"

interface Props {
	data: Project
}

const ProjectShowcaseCard = ({ data }: Props) => {
	return (
		<li className='mb-12 md:mb-24 last:mb-0'>
			<FadeinDiv className='relative grid grid-cols-12 items-center'>
				<div
					className={`hidden md:block relative row-span-full h-[400px] rounded overflow-hidden ${
						data.id % 2 === 0 ? "col-[6/13]" : "col-[1/8]"
					}`}
				>
					<Image src={data.imgPath} alt={data.title} fill />
				</div>
				<div
					className={`relative row-span-full col-span-full px-7 py-5 bg-black rounded ${
						data.id % 2 === 0 ? "md:col-[1/8]" : "md:col-[6/13]"
					}`}
				>
					<h3 className='text-2xl text-primary font-bold mb-2'>{data.title}</h3>
					<p>{data.description}</p>
					<div className='my-3'>
						<span className='text-primary text-lg font-bold'>Techstack:</span>{" "}
						{data.techstack.join(", ")}
					</div>
					{data.loginCredintials && (
						<div className='my-3'>
							<span className='text-primary text-lg font-bold'>Login:</span>{" "}
							<span>
								{data.loginCredintials.email} , {data.loginCredintials.password}
							</span>
						</div>
					)}
					<div className='w-fit mt-2 text-primary'>
						<a href={data.url} target='_blank' className='mr-4 hover:underline'>
							Live Demo
						</a>
						<a href={data.repo} target='_blank' className='hover:underline'>
							Source Code
						</a>
					</div>
				</div>
			</FadeinDiv>
		</li>
	)
}

export default ProjectShowcaseCard
