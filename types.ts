type Repo = string | { frontend: string; backend: string }

export interface Project {
	id?: number
	title: string
	description: string
	url: string
	repo: string | { frontend: string; backend: string }
	techstack: string[]
	tags: string[]
	imgPath?: string
}

export type Tags = "frontend" | "backend" | "fullstack" | "other"
