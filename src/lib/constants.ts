export const TABS = ["about", "projects", "contact"] as const;
export const FILTERS = [
  "all",
  "frontend",
  "backend",
  "fullstack",
  "systems programming",
] as const;

export type Tab = (typeof TABS)[number];
export type Filter = (typeof FILTERS)[number];
