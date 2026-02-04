import PortfolioContent from "@/components/portfolio-content";
import { getProjects } from "@/lib/projects";
import { TABS, FILTERS, type Tab, type Filter } from "@/lib/constants";

function validateTab(tab: string | null): Tab {
  if (!tab) return "about";
  return TABS.includes(tab as Tab) ? (tab as Tab) : "about";
}

function validateFilter(filter: string | null): Filter {
  if (!filter) return "all";
  return FILTERS.includes(filter as Filter) ? (filter as Filter) : "all";
}

interface HomeProps {
  searchParams?: Promise<{ tab?: string; filter?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const projects = await getProjects();
  const activeTab = validateTab(params?.tab ?? null);
  const domainFilter = validateFilter(params?.filter ?? null);

  return (
    <main className="h-screen overflow-hidden flex flex-col bg-background text-white pt-[52px]">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] pt-[52px]"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative flex-1 flex flex-col min-h-0">
        <PortfolioContent
          projects={projects}
          activeTab={activeTab}
          domainFilter={domainFilter}
        />
      </div>
    </main>
  );
}
