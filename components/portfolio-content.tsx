import Link from "next/link";
import { Project, getRepoUrl } from "@/lib/projects";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { TABS, FILTERS, type Tab, type Filter } from "@/lib/constants";

function ProjectCard({ data }: { data: Project }) {
  const demoUrl = data.url?.trim() ? data.url : null;
  const repoUrl = getRepoUrl(data.repo);

  return (
    <article className="h-full flex flex-col rounded-lg border border-white/10 bg-white/[0.02] p-4 md:p-5 hover:border-primary/30 hover:bg-white/[0.04] transition-colors">
      <div className="flex flex-col gap-2 flex-1 min-h-0">
        <h3 className="font-semibold text-white">{data.title}</h3>
        <p className="text-sm text-white/70 leading-relaxed">
          {data.description}
        </p>
        <div className="mt-auto">
          <div className="h-[1px] w-1/4 bg-primary/15" />
          <div className="flex flex-wrap gap-2 text-xs text-white/60 my-4 shrink-0">
            {data.techstack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10 shrink-0">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <FaGithub className="w-3.5 h-3.5" />
              Code
            </a>
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-2"
              >
                Live demo
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

interface Props {
  projects: Project[];
  activeTab?: Tab;
  domainFilter?: Filter;
}

export default function PortfolioContent({
  projects,
  activeTab = "about",
  domainFilter = "all",
}: Props) {
  const buildHref = (overrides: { tab?: string; filter?: string }) => {
    const tab = overrides.tab ?? activeTab;
    const filter = "filter" in overrides ? overrides.filter : domainFilter;
    const params = new URLSearchParams();
    if (tab) params.set("tab", tab);
    if (filter && filter !== "all") params.set("filter", filter);
    const qs = params.toString();
    return qs ? `?${qs}` : "/";
  };

  const filteredProjects =
    domainFilter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(domainFilter));

  return (
    <>
      <nav className="flex justify-center gap-1 border-b border-white/10 px-4 pt-4">
        {TABS.map((tab) => (
          <Link
            key={tab}
            href={buildHref({ tab })}
            className={cn(
              "px-4 py-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px",
              activeTab === tab
                ? "text-primary border-primary"
                : "text-white/60 border-transparent hover:text-white/80"
            )}
          >
            {tab}
          </Link>
        ))}
      </nav>

      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {activeTab === "about" && (
          <div className="flex flex-col items-center justify-center min-h-full px-6 text-center">
            <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Mikhail Wahib
            </h1>
            <p className="mt-3 text-sm font-mono text-white/50 tracking-wide">
              Software Developer · Cairo, Egypt
            </p>
            <div className="h-px w-12 bg-primary/80 mx-auto mt-8 mb-8" />
            <p className="text-white/70 text-base max-w-md leading-relaxed mx-auto">
              A software developer with interests in systems, backend and
              fullstack development. I love learning new things and exploring
              different technologies.
            </p>
            <p className="mt-10 text-xs font-mono text-white/40 tracking-wider">
              Go · TypeScript · Python · Rust · Node · PostgreSQL · React ·
              Next.js
            </p>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="flex flex-col min-h-0 px-4 md:px-8 py-6">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {FILTERS.map((filter) => (
                <Link
                  key={filter}
                  href={buildHref({
                    tab: "projects",
                    filter: filter === "all" ? undefined : filter,
                  })}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded transition-colors capitalize",
                    domainFilter === filter
                      ? "bg-primary text-background"
                      : "text-white/60 hover:text-white border border-white/20 hover:border-white/40"
                  )}
                >
                  {filter}
                </Link>
              ))}
            </div>
            <div className="overflow-y-auto flex-1 min-h-0 pr-2 -mr-2">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto pb-8 auto-rows-fr">
                {filteredProjects.map((p, i) => (
                  <li key={`${p.title}-${i}`} className="min-h-0">
                    <ProjectCard data={p} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="flex flex-col items-center justify-center px-6 py-8 text-center">
            <div className="max-w-md space-y-6">
              <p className="text-white/70 text-base leading-relaxed mb-5">
                Open to new opportunities. Feel free to reach out via Email or
                LinkedIn.
              </p>
              <a
                href="mailto:mikhailwahib20@gmail.com"
                className="text-primary hover:underline underline-offset-4 text-lg"
              >
                mikhailwahib20@gmail.com
              </a>
              <div className="flex items-center justify-center gap-6 pt-4">
                <a
                  href="https://github.com/MikhailWahib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mikhail-wahib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
