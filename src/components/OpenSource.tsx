'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { openSourceContributions } from '@/data/openSource';

function ContributionCard({
  entry,
  index,
}: {
  entry: (typeof openSourceContributions)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 * index }}
      className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-6 hover:bg-[var(--bg-elevated)] hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-space font-semibold text-white text-lg tracking-[-0.02em]">
            {entry.project}
          </h3>
          <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
            {entry.impact}
          </p>
        </div>
        <a
          href={entry.prLink ?? entry.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-white border border-[var(--border)] hover:border-[var(--border-hover)] px-3 py-1.5 rounded-full transition-colors"
        >
          <FaGithub size={13} />
          {entry.prLink ? 'PR' : 'Repo'}
          <ArrowUpRight size={11} />
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        {entry.contribution}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {entry.tags.map((t) => (
          <span
            key={t}
            className="text-xs font-mono bg-[var(--bg-base)] border border-[var(--border)] px-2 py-0.5 rounded-md text-[var(--text-muted)]"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Paper link */}
      {entry.paper && (
        <div className="mt-3 pt-3 border-t border-[var(--border)]">
          <a
            href={entry.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            <FileText size={13} /> Paper <ArrowUpRight size={11} />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="py-14 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto"
    >
      <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--cyan)] mb-2">
        / Open Source
      </p>
      <h2 className="text-2xl md:text-3xl font-space font-semibold text-white tracking-[-0.03em] mb-6">
        Contributions to public projects.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {openSourceContributions.map((entry, i) => (
          <ContributionCard key={entry.project} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
