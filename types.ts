export interface Project {
	id: number
	title: string
	description: string
	url: string
	repo: string
	techstack: string[]
	loginCredintials?: {
		email: string
		password: string
	}
	imgPath: string
}
