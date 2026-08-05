export function Sidebar() {
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Navigation
      </p>
      <div className="mt-4 space-y-2 text-sm text-zinc-600">
        <p>Dashboard</p>
        <p>AI Content Generator</p>
        <p>Knowledge Base</p>
        <p>Product Manager</p>
        <p>Content Calendar</p>
        <p>AI Agents</p>
        <p>Settings</p>
      </div>
    </aside>
  );
}
