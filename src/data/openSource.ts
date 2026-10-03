interface OpenSourceContribution {
  project: string;
  repo: string;
  contribution: string;
  prLink?: string;
  paper?: string;
  tags: string[];
  impact: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: 'PixelStreamingInfrastructure',
    repo: 'https://github.com/EpicGames/PixelStreamingInfrastructure',
    contribution:
      'Opt in streamer token authentication on the signalling server, adding a security layer to Epic Games\u2019 WebRTC streaming infrastructure.',
    tags: ['WebRTC', 'C++', 'Authentication', 'Security'],
    impact: 'Merged into Epic Games\u2019 production streaming stack',
  },
  {
    project: 'freellmapi',
    repo: 'https://github.com/tashfeenahmed/freellmapi',
    contribution:
      'Admin hardening: stricter Content Security Policy, per IP rate limiting, and password gated API key export to prevent unauthorized access.',
    prLink: 'https://github.com/tashfeenahmed/freellmapi/pull/498',
    tags: ['Security', 'Rate Limiting', 'CSP', 'Node.js'],
    impact: 'Hardened admin panel against brute force and abuse',
  },
  {
    project: 'OPT MorphDAG',
    repo: 'https://github.com/s-uryansh/OPT-MorphDAG',
    contribution:
      'Workload aware DAG blockchain execution engine achieving 4.3× throughput, published at IEEE 2025.',
    paper: 'https://ieeexplore.ieee.org/document/11310865/',
    tags: ['Go', 'EVM', 'Concurrent Systems'],
    impact: 'IEEE Published',
  },
];
