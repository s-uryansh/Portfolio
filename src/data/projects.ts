export type ProjectCategory =
  | 'Security'
  | 'Systems'
  | 'Full Stack'
  | 'Blockchain'
  | 'Crypto';

export interface Project {
  name: string;
  tagline: string;
  category: ProjectCategory;
  tags: string[];
  github: string;
  paper?: string;
  demo?: string;
  highlight?: boolean;
  badge?: string;
}

export const projects: Project[] = [
  {
    name: 'GradGuard',
    tagline:
      'ML powered adaptive SSH honeypot that mutates its environment in real time to defeat attacker fingerprinting.',
    category: 'Security',
    tags: ['Go', 'eBPF', 'Docker', 'ML', 'Linux'],
    github: 'https://github.com/s-uryansh/GradGuard',
    highlight: true,
  },
  {
    name: 'CipherFault',
    tagline:
      'Binary crypto misuse evidence engine. Recognizes classical and post quantum primitives in stripped binaries via GNN.',
    category: 'Security',
    tags: ['Python', 'Ghidra', 'PyTorch Geometric', 'GNN', 'CycloneDX'],
    github: 'https://github.com/s-uryansh/CipherFault',
    highlight: true,
  },
  {
    name: 'AuthChain',
    tagline:
      'Hackathon project. Solo blockchain developer. Built a human oversight layer for autonomous AI: routes security sensitive tool calls through a custom blockchain pipeline for immutable, auditable, permissioned approval.',
    category: 'Blockchain',
    tags: ['Go', 'React', 'FastAPI', 'Blockchain', 'LLM'],
    github: 'https://github.com/s-uryansh/AuthChain',
    highlight: true,
  },
  {
    name: 'Vanguard Linux PoC',
    tagline:
      'Hardware anchored TPM 2.0 attestation path for Linux, closing the relay attack via RFC 9266 TLS channel binding.',
    category: 'Security',
    tags: ['Go', 'C', 'eBPF', 'TPM 2.0', 'QEMU/KVM'],
    github: 'https://github.com/s-uryansh/Vanguard',
  },
  {
    name: 'GradPQC',
    tagline:
      'Enterprise quantum breach prediction platform: Monte Carlo simulations + ML Shadow IT detection for NIST IR 8547 compliance.',
    category: 'Full Stack',
    tags: ['Go', 'Next.js', 'MySQL', 'Monte Carlo'],
    github: 'https://github.com/s-uryansh/GradPQC',
    badge: 'PNB PSB Hackathon 2026',
  },
  {
    name: 'Microtek IDM',
    tagline:
      '10 module serial level warehouse ops system. Deny by default RBAC, versioned PostgreSQL migrations, Redis rate limiting.',
    category: 'Full Stack',
    tags: ['Node.js', 'React 19', 'PostgreSQL', 'Redis', 'Zod'],
    github: '#',
  },
  {
    name: 'Auth: PQ Crypto Protocol',
    tagline:
      'ML KEM 768 + AES 256 GCM hybrid registration/auth protocol (FIPS 203) with split knowledge enforcement in C++17.',
    category: 'Crypto',
    tags: ['C++17', 'OpenSSL', 'liboqs', 'ML KEM 768', 'GTest'],
    github: 'https://github.com/s-uryansh/Auth',
  },
  {
    name: 'GradLedger',
    tagline:
      'Decentralized alumni mentorship platform on Ethereum with face verification, Solidity access control, and JWT gated APIs.',
    category: 'Blockchain',
    tags: ['Solidity', 'Go', 'Python', 'Next.js', 'MongoDB'],
    github: 'https://github.com/s-uryansh/GradLedger',
  },
  {
    name: 'gladmeds',
    tagline:
      'Privacy first AI healthcare platform: medicine scanner, emergency SOS, nearby hospital locator, and PDF health export.',
    category: 'Full Stack',
    tags: ['React', 'AI', 'Google SSO', 'PDF export'],
    github: '#',
    demo: 'http://gladmeds.vercel.app/',
  },
];

export const categoryColor: Record<ProjectCategory, string> = {
  Security: 'var(--violet)',
  Systems: 'var(--cyan)',
  'Full Stack': 'var(--amber)',
  Blockchain: 'var(--green)',
  Crypto: 'var(--green)',
};
