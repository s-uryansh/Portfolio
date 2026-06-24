'use client';

import { ArrowUpRight, FileText, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Project, categoryColor } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const accent = categoryColor[project.category];
  const hasRepo = project.github && project.github !== '#';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-[var(--bg-surface)] border rounded-2xl p-6 transition-all duration-300 hover:bg-[var(--bg-elevated)] hover:-translate-y-0.5"
      style={{
        borderColor: project.highlight ? 'rgba(124,92,252,0.30)' : 'var(--border)',
        boxShadow: project.highlight
          ? '0 0 24px rgba(124,92,252,0.08)'
          : 'none',
      }}
    >
      {/* Header: accent dot + category + badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <span
            className="text-xs font-mono"
            style={{ color: accent }}
          >
            {project.category}
          </span>
        </div>
        {project.badge && (
          <span className="text-[10px] font-mono text-[var(--amber)] bg-[var(--amber)]/10 border border-[var(--amber)]/20 px-2 py-0.5 rounded-full">
            {project.badge}
          </span>
        )}
      </div>

      {/* Name + tagline */}
      <h3 className="font-space font-semibold text-lg text-white mb-2 tracking-[-0.02em]">
        {project.name}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
        {project.tagline}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs font-mono bg-[var(--bg-base)] border border-[var(--border)] px-2 py-0.5 rounded-md text-[var(--text-muted)]"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer links */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
        {hasRepo && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            <FaGithub size={14} /> GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            <Globe size={14} /> Live <ArrowUpRight size={12} />
          </a>
        )}
        {project.paper && (
          <a
            href={project.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            <FileText size={14} /> Paper <ArrowUpRight size={12} />
          </a>
        )}
        {!hasRepo && !project.demo && !project.paper && (
          <span className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
            <FaGithub size={14} /> Private
          </span>
        )}
      </div>
    </motion.div>
  );
}
