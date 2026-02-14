import projectsData from "../../data/projects.json";

export interface Project {
  id?: number;
  title: string;
  description: string;
  url?: string;
  repo: string | { frontend: string; backend: string };
  techstack: string[];
  tags: string[];
  imgPath?: string;
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getRepoUrl(repo: Project["repo"]): string {
  return typeof repo === "string" ? repo : repo?.frontend ?? "#";
}
