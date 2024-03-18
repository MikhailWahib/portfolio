"use client"
import { useState } from "react"
import { Project, ProjectCategories } from "@/types"
import ProjectsCard from "./projects-card"

interface Props {
	projects: Project[] | undefined
}

const Projects = ({ projects }: Props) => {
	const [filter, setFilter] = useState<ProjectCategories | null>()
	return (
		<>
			<ProjectsSectionNav setFilter={setFilter} />
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(18rem,1fr)] place-content-center h-full gap-10 gap-y-10 mt-16'>
				{filter
					? projects
							?.filter((project) => project.category === filter)
							?.map((project, i) => <ProjectsCard key={i} data={project} />)
					: projects?.map((project, i) => (
							<ProjectsCard key={i} data={project} />
					  ))}
			</ul>
		</>
	)
}

const ProjectsSectionNav = ({ setFilter }: any) => {
	const cats = ["all", "frontend", "backend", "fullstack", "other"]
	const handleCLick = (c: string) => {
		if (c === "all") {
			setFilter(null)
		} else {
			setFilter(c)
		}
	}
	return (
		<nav className='relative top-8 flex justify-center gap-2 sm:gap-5'>
			{cats.map((c) => (
				<button
					className='text-primary text-base sm:text-lg font-bold capitalize hover:underline'
					onClick={() => handleCLick(c)}
				>
					{c}
				</button>
			))}
		</nav>
	)
}

export default Projects
