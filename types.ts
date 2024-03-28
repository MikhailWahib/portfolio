type Repo = string | { frontend: string; backend: string }

export interface Project {
	id: number
	title: string
	description: string
	url: string
	repo: Repo
	techstack: string[]
	loginCredintials?: {
		email: string
		password: string
	}
	imgPath: string
	tags: Tags
}

export type Tags = "frontend" | "backend" | "fullstack" | "other"
