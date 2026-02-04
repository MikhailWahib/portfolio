import fs from "fs/promises";
import path from "path";

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

export async function getProjects(): Promise<Project[]> {
    try {
        const fileContents = await fs.readFile(
            path.join(process.cwd(), "data/projects.json"),
            "utf8"
        );
        return JSON.parse(fileContents) as Project[];
    } catch (error) {
        console.error("Failed to load projects:", error);
        return [];
    }
}

export function getRepoUrl(repo: Project["repo"]): string {
    return typeof repo === "string" ? repo : repo?.frontend ?? "#";
}
