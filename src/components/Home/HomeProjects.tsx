'use client';
import Link from 'next/link';
import ProjectsGrid from '../Projects/ProjectsGrid';

const featuredProjects = [
    {
        id: 9,
        title: 'GradPQC',
        description: 'Enterprise cryptographic governance platform. Uses Go concurrency and Monte Carlo simulations to predict exact quantum-breach probabilities.',
        techStack: ['Go', 'Next.js', 'Machine Learning', 'MySQL'],
        category: 'cybersecurity',
        githubUrl: 'https://github.com/s-uryansh/GradPQC',
        projectName: 'GradPQC',
    },
    {
        id: 8,
        title: 'GradGuard: Adaptive Honeypot',
        description: 'Advanced SSH Honeypot engine using Machine Learning and eBPF kernel monitoring in Go. Mutates environments to deceive attacker fingerprinting.',
        techStack: ['Go', 'eBPF', 'Machine Learning', 'Docker'],
        category: 'cybersecurity',
        githubUrl: 'https://github.com/s-uryansh/GradGuard',
        projectName: 'GradGuard',
    },
    {
        id: 6,
        title: 'MorphDAG',
        description: 'Highly concurrent execution engine for a DAG-based blockchain in Go, mitigating state conflicts across parallel nodes.',
        techStack: ['Go'],
        category: 'cybersecurity',
        paper: 'https://ieeexplore.ieee.org/document/11310865',
        projectName: 'MorphDAG',
    }
];

export default function HomeProjects() {
    return (
        <section className="bg-black py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/30">Selected Works</h2>
                <Link href="/projects" className="text-sm font-bold uppercase tracking-widest hover:text-[#ff3366] transition-colors">
                    View All →
                </Link>
            </div>
            <ProjectsGrid projects={featuredProjects} />
        </section>
    );
}