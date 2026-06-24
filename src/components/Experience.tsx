'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '@/data/experience';

function Entry({ entry, index }: { entry: (typeof experience)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLast = index === experience.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 * index }}
      className="relative pl-10"
    >
      {/* Vertical line */}
      {!isLast && (
        <span className="absolute left-3 top-3 bottom-[-1.25rem] w-px bg-[var(--border)]" />
      )}

      {/* Dot */}
      <span
        className={`absolute left-[7px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--violet)] ${
          entry.current
            ? 'ring-2 ring-[var(--violet)]/30 ring-offset-2 ring-offset-[var(--bg-base)]'
            : ''
        }`}
      />

      <div className="pb-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
          <h3 className="font-space font-semibold text-white text-lg tracking-[-0.02em]">
            {entry.company}
          </h3>
          {entry.current && (
            <span className="text-[10px] font-mono text-[var(--cyan)] bg-[var(--cyan-dim)] px-2 py-0.5 rounded-full">
              Current
            </span>
          )}
          <span className="text-xs font-mono text-[var(--text-muted)] ml-auto">
            {entry.period}
          </span>
        </div>
        <p className="text-sm text-[var(--text-secondary)] mb-3">{entry.role}</p>
        <ul className="space-y-2">
          {entry.bullets.map((b, i) => (
            <li
              key={i}
              className="text-sm text-[var(--text-secondary)] leading-relaxed flex gap-2"
            >
              <span className="text-[var(--violet)] shrink-0 mt-1.5 leading-none">›</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto"
    >
      <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--cyan)] mb-2">
        / Experience
      </p>
      <h2 className="text-2xl md:text-3xl font-space font-semibold text-white tracking-[-0.03em] mb-8">
        Where I&apos;ve worked.
      </h2>

      <div>
        {experience.map((entry, i) => (
          <Entry key={`${entry.company}-${entry.period}`} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
