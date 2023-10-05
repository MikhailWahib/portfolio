import { promises as fs } from 'fs'
import path from 'path'

import ProjectShowcaseCard from '../project-showcase-card'

import { Project } from '@/types'
import SectionHeading from '../section-heading'

const getData = async () => {
	try {
		const fileContents = await fs.readFile(
			path.join(process.cwd(), 'data/projects') + '/showcaseProjects.json',
			'utf8'
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
			<div>
				<SectionHeading title='Projects' />
				<ul className='w-[min(100%,75rem)] mx-auto mt-16'>
					{projects?.map((project, i) => {
						return (
							<li
								key={i}
								className='relative grid grid-cols-12 items-center mb-12 md:mb-24 last:mb-0'
							>
								<ProjectShowcaseCard key={i} data={project} />
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default Projects
