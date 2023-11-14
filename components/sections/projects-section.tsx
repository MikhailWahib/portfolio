import { promises as fs } from "fs"
import path from "path"

import ProjectShowcaseCard from "../project-showcase-card"

import { Project } from "@/types"
import SectionHeading from "../section-heading"
import FadeinDiv from "@/framer-components/fadein-div"

const getData = async () => {
	try {
		const fileContents = await fs.readFile(
			path.join(process.cwd(), "data/projects") + "/showcaseProjects.json",
			"utf8"
		)
		return JSON.parse(fileContents) as Project[]
	} catch (error) {
		console.error(error)
	}
}
const Projects = async () => {
	const projects = await getData()
	return (
		<section id='projects'>
			<SectionHeading title='Projects' />
			<ul className='w-[min(100%,75rem)] mx-auto mt-16'>
				{projects?.map((project, i) => {
					return (
						<FadeinDiv key={i} className='relative mb-12 md:mb-24 last:mb-0'>
							<li className='relative grid grid-cols-12 items-center'>
								<ProjectShowcaseCard data={project} />
							</li>
						</FadeinDiv>
					)
				})}
			</ul>
		</section>
	)
}

export default Projects
