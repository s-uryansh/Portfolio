'use client';

import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

// Highlighted work first, rest follow — no filter, all scannable at a glance.
const ordered = [...projects].sort(
  (a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight))
);

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto"
    >
      <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--cyan)] mb-2">
        / Projects
      </p>
      <h2 className="text-2xl md:text-3xl font-space font-semibold text-white tracking-[-0.03em] mb-6">
        Things I&apos;ve shipped.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ordered.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
