interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Abacus Desk',
    role: 'Software Engineering Intern',
    period: 'May 2026 – Aug 2026',
    bullets: [
      'Built Microtek IDM, a 10 module serial level warehouse platform (Node.js/Express + React 19 + PostgreSQL + Redis).',
      'Implemented deny by default RBAC with warehouse scoped permission checks, gating every route by requirePermission.',
      'Hardened production endpoints with Redis backed rate limiting and versioned, idempotent PostgreSQL migrations.',
    ],
  },
  {
    company: 'CodeClowns',
    role: 'Software Development Intern',
    period: 'May 2025 – Aug 2025',
    bullets: [
      'Designed a high throughput graph based recommendation engine for Dwij AI using Neo4j and Redis edge caching on GCP.',
      'Reduced backend API call frequency by 15% and cut retrieval latency by 20% via query optimization and cache layer tuning.',
    ],
  },
  {
    company: 'CodeClowns',
    role: 'Backend Development Intern',
    period: 'May 2024 – Oct 2024',
    bullets: [
      'Refactored 12+ Go (Gin) microservices using Goroutines and mutex guarded shared state; restructured MongoDB/MariaDB schemas.',
      'Achieved 35% reduction in end to end API latency and 25% increase in data throughput via profiling with Go pprof.',
    ],
  },
];
