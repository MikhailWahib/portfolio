'use client'
import { Project } from '@/types'
import ProjectsCard from './projects-card'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'


const ProjectsSectionNav = ({ setFilter }: { setFilter: (f: string | null) => void }) => {
	const [activeFilter, setActiveFilter] = useState<string>('all')
	const filters: string[] = ['all', 'frontend', 'backend', 'fullstack', 'systems programming']

	const handleClick = (c: string) => {
		setActiveFilter(c)
		if (c === 'all') {
			setFilter(null)
		} else {
			setFilter(c)
		}
	}

	return (
		<nav className='relative top-8 flex justify-center flex-wrap gap-2 sm:gap-5'>
			{filters.map((f) => (
				<button
					key={f}
					onClick={() => handleClick(f)}
					className={cn(
						"relative px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300",
						"hover:text-primary",
						activeFilter === f ? "text-primary" : "text-white/60",
						"group"
					)}
				>
					<span className="relative z-10 capitalize">{f}</span>
					{activeFilter === f && (
						<>
							<span className="absolute inset-0 bg-primary/10 rounded-lg transition-all duration-300" />
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300" />
						</>
					)}
					<span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</button>
			))}
		</nav>
	)
}

interface Props {
	projects: Project[] | undefined
}

const Projects = ({ projects }: Props) => {
	const [filter, setFilter] = useState<string | null>(null)

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

export default Projects
