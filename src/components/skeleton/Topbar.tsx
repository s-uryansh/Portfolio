'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Topbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="glass-box px-4 py-2 rounded-full backdrop-blur-lg bg-white/5 border border-white/15">
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 hover:text-white hover:bg-white/10",
                  isActive ? "text-white" : "text-white/70"
                )}
              >
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}