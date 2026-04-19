import { type TimelineItemData } from './expJourneyCert';

export const timelineData: TimelineItemData[] = [
    {
        id: 17,
        type: 'project',
        title: 'GradPQC',
        company: 'PNB PSB Hackathon 2026',
        date: '2026',
        description: 'Developed an enterprise-grade cryptographic governance platform. Engineered a highly concurrent Go backend and Next.js dashboard utilizing Monte Carlo simulations to predict exact quantum-breach probabilities.',
        skills: ['Go', 'Next.js', 'Machine Learning', 'Cryptography'],
        githubUrl: 'https://github.com/s-uryansh/GradPQC'
    },
    {
        id: 16,
        type: 'project',
        title: 'GradGuard',
        company: 'Cybersecurity Project',
        date: '2026',
        description: 'Built an advanced SSH Honeypot engine using Machine Learning and eBPF kernel monitoring in Go to dynamically mutate fake Docker environments and deceive attacker fingerprinting.',
        skills: ['Go', 'eBPF', 'Docker', 'Machine Learning'],
        githubUrl: 'https://github.com/s-uryansh/GradGuard'
    },
    {
        id: 15,
        type: 'project',
        title: 'GradLedger',
        company: 'Blockchain Project',
        date: '2025',
        description: 'Decentralized platform for alumni student resource sharing and mentorship using fundamental blockchain properties.',
        skills: ['Next.js', 'Solidity', 'Go', 'Python' ],
        githubUrl: 'https://github.com/s-uryansh/GradLedger'
    },
    {
        id: 11,
        type: 'research',
        title: 'MorphDAG: A Workload-Aware Elastic DAG-Based Blockchain',
        company: 'Shiv Nadar University',
        date: 'March 2025 - December 2025',
        description: 'Enhancing DAG-based blockchain performance. Achieved 17.48% reduction in latency.',
        skills: ['Go Concurrency', 'Blockchain', 'DAG', 'Performance Optimization'],
        githubUrl: 'https://github.com/s-uryansh/OPT-MorphDAG',
        paper: 'https://ieeexplore.ieee.org/document/11310865/footnotes#full-text-header'
    },
    {
        id: 9,
        type: 'experience',
        title: 'Software Development Intern',
        company: 'CodeClowns',
        date: 'May 2025 - Aug 2025',
        description: 'Architected a high-throughput recommendation engine for the Dwij AI test-prep platform using Neo4j and Redis edge caching.',
        skills: ['React', 'Next.js', 'NestJS', 'MongoDB', 'Neo4j', 'Redis'],
        paper: '/assets/Internship/letter.pdf'
    },
    {
        id: 1,
        type: 'education',
        title: 'B.Tech in Computer Science',
        company: 'Shiv Nadar University (6.27 CGPA)',
        date: '2023 - 2027',
        description: 'Emphasis on contemporary web technologies and real-world implementation.',
    },
    {
        id: 14,
        type: 'certification',
        title: 'Smart SNU Hackathon 2025 Winner',
        company: 'GDG Shiv Nadar University',
        date: '2025',
        description: 'Smart SNU Hackathon’25 Winner (1st place): Delivered a high-performance agricultural application, reducing memory overhead and accelerating rendering pipelines through efficient widget state management.',
        skills: ['Flutter', 'Dart']
    }
];