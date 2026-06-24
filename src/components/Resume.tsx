'use client';

import { ExternalLink } from 'lucide-react';

const RESUME = '/Resume/Resume_SDE.pdf';

export default function Resume() {
  return (
    <section id="resume" className="py-14 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--cyan)]">
          / Resume
        </p>
        <a
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border border-[var(--violet)]/40 text-[var(--violet)] hover:bg-[var(--violet-dim)] transition-all"
        >
          Open in new tab <ExternalLink size={14} />
        </a>
      </div>

      <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)]">
        <object
          data={`${RESUME}#toolbar=0&navpanes=0&view=FitH`}
          type="application/pdf"
          className="w-full h-[85vh]"
        >
          {/* Fallback for browsers that block inline PDF rendering */}
          <div className="p-8 text-center text-sm text-[var(--text-secondary)]">
            Your browser can&apos;t display the PDF inline.{' '}
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--violet)] hover:underline"
            >
              Open the resume here
            </a>
            .
          </div>
        </object>
      </div>
    </section>
  );
}
