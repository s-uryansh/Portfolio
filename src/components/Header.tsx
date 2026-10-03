'use client';

import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa6';
import toast from 'react-hot-toast';

const roles = [
  'Systems Engineer',
  'Security Researcher',
  'Go / eBPF Developer',
  'Full Stack Builder',
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/s-uryansh', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/suryansh-rohil', Icon: FaLinkedin },
  { label: 'Instagram', href: 'https://instagram.com/suryansh.rohil', Icon: FaInstagram },
];

const credentials = [
  'Software Engineer · Go · Linux · C/C++',
  'IEEE Published',
  'Ex SWE Intern @ Abacus Desk & CodeClowns',
  "SNU CSE '27",
];

export default function Header() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(swap);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const copyDiscord = () => {
    navigator.clipboard?.writeText('gladflashislive');
    toast.success('Discord handle copied: gladflashislive');
  };

  return (
    <section
      id="top"
      className="relative px-6 md:px-10 lg:px-16 pt-28 pb-14 border-b border-[var(--border)]"
      style={{
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      <div className="max-w-4xl">
        <span
          className="anim-fade-up inline-flex items-center gap-2 text-xs font-mono text-[var(--cyan)] bg-[var(--cyan-dim)] border border-[var(--cyan)]/20 px-3 py-1 rounded-full mb-5"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-pulse" />
          Open to roles · India / Remote
        </span>

        {/* Name */}
        <h1
          className="anim-fade-up font-space font-semibold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.0] tracking-[-0.04em] mb-3"
          style={{ animationDelay: '0.1s' }}
        >
          Suryansh Rohil
        </h1>

        {/* Animated role line */}
        <p
          className="anim-fade-up text-lg sm:text-xl text-[var(--text-secondary)] font-space mb-5 h-7"
          style={{ animationDelay: '0.2s' }}
        >
          <span
            className="text-white transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {roles[index]}
          </span>
          <span className="inline-block w-0.5 h-5 bg-[var(--violet)] ml-0.5 align-middle animate-[cursorBlink_1s_step-end_infinite]" />
        </p>

        {/* One-line summary */}
        <p
          className="anim-fade-up text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-6"
          style={{ animationDelay: '0.3s' }}
        >
          CS undergrad building secure infrastructure from the kernel up: eBPF monitors,
          TPM&nbsp;2.0 attestation, cryptographic misuse engines, and full-stack platforms.
          Three internships across backend, full-stack, and security. IEEE published.
        </p>

        {/* Contact + socials row */}
        <div
          className="anim-fade-up flex flex-wrap items-center gap-2.5 mb-6"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="mailto:suryanshrohilwork@gmail.com"
            className="inline-flex items-center gap-2 bg-[var(--violet-dim)] border border-[var(--violet)]/30 text-white hover:border-[var(--violet)]/60 hover:bg-[var(--violet)]/20 font-medium px-4 py-2 rounded-full transition-all text-sm"
          >
            <Mail size={15} /> suryanshrohilwork@gmail.com
          </a>
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-white transition-colors px-3 py-2 rounded-full border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-white/5"
            >
              <Icon size={15} /> {label}
            </a>
          ))}
          <button
            onClick={copyDiscord}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-white transition-colors px-3 py-2 rounded-full border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-white/5"
          >
            <FaDiscord size={15} /> Discord
          </button>
        </div>

        {/* Credential chips */}
        <div
          className="anim-fade-in flex flex-wrap gap-x-2 gap-y-1.5"
          style={{ animationDelay: '0.55s' }}
        >
          {credentials.map((c) => (
            <span
              key={c}
              className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border)] px-2.5 py-1 rounded-md"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
