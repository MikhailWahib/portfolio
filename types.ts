type Repo = string | { frontend: string; backend: string }

export interface Project {
	id: number
	title: string
	description: string
	url: string
	repo: string
	techstack: string[]
	tags: string[]
	imgPath?: string
}
