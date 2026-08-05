import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Sidebar } from "@/components/layout/Sidebar";
import { appRoutes } from "@/lib/constants";

const modules = [
  { title: "Dashboard", href: appRoutes.dashboard },
  { title: "AI Content Generator", href: appRoutes.aiContentGenerator },
  { title: "Knowledge Base", href: appRoutes.knowledgeBase },
  { title: "Product Manager", href: appRoutes.productManager },
  { title: "Content Calendar", href: appRoutes.contentCalendar },
  { title: "AI Agents", href: appRoutes.aiAgents },
  { title: "Settings", href: appRoutes.settings },
];

export default function HomePage() {
  return (
    <AppShell>
      <div className="grid flex-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <Sidebar />
        <main className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            ARISLE Content OS
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-950">
            Scalable architecture ready for premium brand operations
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            The workspace now includes organized App Router modules, shared UI primitives, and feature-level folders for future product development.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {modules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950"
              >
                {module.title}
              </Link>
            ))}
          </div>
        </main>
      </div>
    </AppShell>
  );
}
