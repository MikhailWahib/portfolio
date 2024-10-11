import fs from "fs/promises"
import path from "path"
import SectionHeading from "../section-heading"
import Projects from "../projects"
import { Project } from "@/types"

const getData = async () => {
	try {
		const fileContents = await fs.readFile(
			path.join(process.cwd(), "data/projects.json"),
			"utf8"
		)
		return JSON.parse(fileContents) as Project[]
	} catch (error) {
		console.error(error)
	}
}

const ProjectsSection = async () => {
	const projects = await getData()
	return (
		<section className='min-h-0 mb-16' id='projects'>
			<SectionHeading title='Projects' />
			<div className='max-w-[1800px] mx-auto'>
				<Projects projects={projects} />
			</div>
		</section>
	)
}

export default ProjectsSection
