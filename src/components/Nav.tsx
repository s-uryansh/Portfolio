'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollToResume = () => {
    setOpen(false);
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#080c12]/80 backdrop-blur-xl border-b border-white/5 anim-fade-in">
      <nav className="h-16 px-6 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-space font-semibold text-lg text-white tracking-[-0.04em]">
            S<span className="text-[var(--violet)]">·</span>R
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollToResume}
            className="text-sm font-medium px-5 py-2 rounded-full border border-[var(--violet)]/40 text-[var(--violet)] hover:bg-[var(--violet-dim)] transition-all"
          >
            Resume →
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-[var(--text-secondary)] hover:text-white hover:bg-white/5 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#080c12]/95 backdrop-blur-xl px-6 py-3 anim-fade-in">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors px-3 py-3 rounded-md hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
