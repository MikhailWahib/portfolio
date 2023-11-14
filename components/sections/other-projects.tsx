import fs from "fs/promises"
import path from "path"

import SectionHeading from "../section-heading"
import OtherProjectsCard from "../other-projects-card"

interface Project {
	id: number
	title: string
	description: string
	url: string
	repo: string
	techstack: string[]
	imgPath: string
}

const getData = async () => {
	try {
		const fileContents = await fs.readFile(
			path.join(process.cwd(), "data/projects") + "/otherProjects.json",
			"utf8"
		)
		return JSON.parse(fileContents) as Project[]
	} catch (error) {
		console.error(error)
	}
}

const OtherProjects = async () => {
	const projects = await getData()

	return (
		<section className='min-h-0 mb-16'>
			<div>
				<SectionHeading title='Other Projects' />
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(18rem,1fr)] place-content-center h-full gap-10 gap-y-10 mt-16'>
					{projects?.map((project, i) => (
						<OtherProjectsCard key={i} data={project} />
					))}
				</ul>
			</div>
		</section>
	)
}

export default OtherProjects
