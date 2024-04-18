"use client"
import { Project } from "@/types"
import ProjectsCard from "./projects-card"
import { memo, useMemo, useState } from "react"
import FadeinDiv from "@/framer-components/fadein-div"

const ProjectsSectionNav = ({ setFilter }: any) => {
	const filters = ["all", "frontend", "backend", "fullstack", "other"]
	const handleCLick = (c: string) => {
		if (c === "all") {
			setFilter(null)
		} else {
			setFilter(c)
		}
	}
	return (
		<nav className='relative top-8 flex justify-center gap-2 sm:gap-5'>
			{filters.map((f) => (
				<button
					key={f}
					className='text-primary text-base sm:text-lg font-bold capitalize hover:underline'
					onClick={() => handleCLick(f)}
				>
					{f}
				</button>
			))}
		</nav>
	)
}

interface Props {
	projects: Project[] | undefined
}

const projects = ({ projects }: Props) => {
	const [filter, setFilter] = useState()

	const filteredProjects = useMemo(() => {
		if (!projects) return []
		if (!filter) return projects
		return projects.filter((project) => project.tags.includes(filter))
	}, [projects, filter])

	return (
		<div className='max-w-[1800px] mx-auto'>
			<ProjectsSectionNav setFilter={setFilter} />
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(18rem,1fr)] place-content-center mt-16 gap-10'>
				{filteredProjects?.map((project, i) => (
					<ProjectsCard key={i} data={project} />
				))}
			</ul>
		</div>
	)
}

export default projects
