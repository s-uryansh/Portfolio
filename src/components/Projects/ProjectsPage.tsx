'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectsGrid from './ProjectsGrid';

const projects = [
    {
        id: 9,
        title: 'GradPQC: Quantum Intelligence',
        description: 'Enterprise cryptographic governance platform built for the PNB PSB Hackathon 2026. Engineered a highly concurrent Go backend and Next.js dashboard that uses Monte Carlo simulations and ML clustering to predict exact quantum-breach probabilities.',
        techStack: ['Go', 'Next.js', 'Machine Learning', 'MySQL'],
        category: 'cybersecurity',
        githubUrl: 'https://github.com/s-uryansh/GradPQC',
        featured: true,
        projectName: 'GradPQC',
    },
    {
        id: 8,
        title: 'GradGuard: Adaptive Honeypot',
        description: 'An advanced SSH Honeypot engine using Machine Learning and eBPF kernel monitoring in Go. Dynamically mutates fake Docker environments to deceive attacker fingerprinting and includes an egress sinkhole.',
        techStack: ['Go', 'eBPF', 'Machine Learning', 'Docker'],
        category: 'cybersecurity',
        githubUrl: 'https://github.com/s-uryansh/GradGuard',
        featured: true,
        projectName: 'GradGuard',
    },
    {
        id: 6,
        title: 'MorphDAG',
        description: 'Orchestrated a highly concurrent execution engine for a DAG-based blockchain in Go, utilizing a hot account detection algorithm to mitigate state conflicts across parallel nodes.',
        techStack: ['Go'],
        category: 'cybersecurity',
        paper: 'https://ieeexplore.ieee.org/document/11310865',
        featured: true,
        projectName: 'MorphDAG',
    },
    {
        id: 1,
        title: 'GradLedger',
        description: 'Decentralized platform for alumni student resource sharing and mentorship using consensus, persistence, and liveness properties.',
        techStack: ['Next.js', 'Go', 'Python', 'Solidity'],
        category: 'cybersecurity',
        githubUrl: 'https://github.com/s-uryansh/GradLedger',
        featured: true,
        projectName: 'GradLedger',
        video: '/videos/GradLedger.mp4',
    },
    {
        id: 2,
        title: 'AI-Powered Medical Assistant',
        description: 'Engineered a secure, full-stack medical assistant platform in Next.js, implementing a centralized Data Access Layer (DAL) to strictly govern the retrieval of sensitive health profiles and chronic conditions.',
        techStack: ['Next.js', 'React', 'Mongo', 'Google SSO'],
        category: 'fullstack',
        githubUrl: 'https://github.com/s-uryansh/GladMeds',
        featured: true,
        projectName: 'GladMeds',
        video: '/videos/(Ready)GladMeds.mp4',
        liveUrl: 'https://gladmeds.vercel.app/'
    },
    {
        id: 3,
        title: 'E-commerce Platform',
        description: 'Frontend with dynamic product listings developed for a client e-commerce platform during internship.',
        techStack: ['Next.js', 'React', 'Tailwind CSS'],
        projectName: 'Apna Maali',
        category: 'frontend',
        video: '/videos/(Ready)ApnaMaali.mp4'
    },
    {
        id: 4,
        title: 'PortrayourPCB',
        description: 'Full-stack scalable website developed for a startup.',
        techStack: ['Next.js', 'React', 'Mongo'],
        category: 'fullstack',
        githubUrl: 'https://github.com/s-uryansh/PortayourPCB',
        projectName: 'PortrayourPCB',
        video: '/videos/(Ready) PortayourPCB.mp4',
        liveUrl:'https://portayourpcb.vercel.app/'
    },
    {
        id: 5,
        title: 'Krishi AI Sahayak',
        description: 'Smart SNU Hackathon’25 Winner (1st place): Delivered a high-performance agricultural application, reducing memory overhead and accelerating rendering pipelines through efficient widget state management.',
        techStack: ['Flutter', 'Dart'],
        category: 'frontend',
        githubUrl: 'https://github.com/Eros483/SIH25-Farmers/tree/main/Flutter',
        featured: true,
        projectName: 'Krishi AI Sahayak',
    },
];

export default function ProjectsPage() {
    const [filter, setFilter] = useState('ALL');
    const categories = ['ALL', 'CYBERSECURITY', 'FULLSTACK', 'FRONTEND', 'BACKEND'];

    const filteredProjects = filter === 'ALL' 
        ? projects 
        : projects.filter(p => p.category.toUpperCase() === filter);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#ff3366]">
            <section className="pt-40 pb-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h1 
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter mb-20"
                    >
                        Selected<br/>
                        <span className="text-white/10">Works.</span>
                    </motion.h1>

                    {/* Functional Filter Bar */}
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 border-b border-white/10 pb-6">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-xs font-mono tracking-widest transition-colors ${
                                    filter === cat ? 'text-[#ff3366]' : 'text-white/40 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <ProjectsGrid projects={filteredProjects} />
        </div>
    );
}