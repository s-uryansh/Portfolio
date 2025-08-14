'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { FaUser, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import AboutImages from './AboutImages';
import ExpJourneyCert, { type TimelineItemData } from './expJourneyCert';

const FloatingIcons = dynamic(() => import('@/components/Global/FloatingIcons'), {
    ssr: false,
});

const timelineData: TimelineItemData[] = [
    {
        id: 1,
        type: 'education',
        title: 'B.Tech in Computer Science (6.0/10.0 CGPA)',
        company: 'Shiv Nadar University, Noida, Delhi-NCR',
        date: '2023 - 2027',
        description: 'Establishing a solid foundation in software development, algorithms, and computer science with an emphasis on contemporary web technologies and real-world implementation.',
        skills: ['C/C++', 'Java', 'MySQL', 'OS', 'DSA']
    },
    {
        id: 2,
        type: 'education',
        title: 'Class XII - Science (86%)',
        company: 'GOVT SR SEC SCHOOL, Chamrori, Haryana',
        date: '2022 - 2023',
        description: 'Finished Class XII, concentrating on the fundamental science courses for the JEE examination.',
        skills: []
    },
    {
        id: 3,
        type: 'education',
        title: 'Class X (91%)',
        company: 'D.A.V CENT PUBLIC SCHOOL',
        date: '2020 - 2021',
        description: 'Completed Class X with a solid academic background, getting ready to enroll in senior secondary school Non-Medical stream.',
        skills: []
    },
   {
        id: 4,
        type: 'project',
        title: 'AI-Powered Medical Assistant Platform.',
        company: 'Personal Project',
        date: '2025',
        description: 'Developed a full-stack AI-powered health platform offering personalized support through features like medicine safety scanning via barcode/QR, emergency SOS with real-time location, hospital locator, and medical data export. Integrated user profiles, medical history, and Google SSO with a dynamic onboarding and dashboard experience.',
        skills: ['Next.js', 'React', 'MongoDB', 'Google SSO'],
        githubUrl: 'https://github.com/s-uryansh/GladMeds',
        liveUrl: 'https://gladmeds.vercel.app/',
        isFullStack: true
    },
    {
        id: 5,
        type: 'project',
        title: 'E-commerce Platform',
        company: 'CodeClowns Project',
        date: '2025',
        description: 'Built a full-featured e-commerce platform for a client during my internship.',
        skills: ['Next.js', 'React']
    },
   {
        id: 6,
        type: 'project',
        title: 'Smart City Transport System.',
        company: 'Personal Project.',
        date: '2025',
        description: 'Developed a transport management system with interactive frontends and RESTful APIs for effective route and schedule management.',
        skills: ['Go', 'Gin', 'MySQL', 'React', 'REST APIs', 'Full-Stack Development'],
        githubUrl: 'https://github.com/s-uryansh/Smart-City-Transport',
        isFullStack: true
    },
   {
        id: 7,
        type: 'project',
        title: 'ToDo List.',
        company: 'CodeClowns Project.',
        date: '2023',
        description: 'Built a ToDo backend logic with Go and Gin.',
        skills: ['Go', 'Gin', 'MySQL', 'MongoDB', 'Backend Development'],
        githubUrl: 'https://github.com/s-uryansh/ToDo'
    },
    {
        id: 8,
        type: 'certification',
        title: 'C Programming for Beginners',
        company: 'Udemy',
        date: '2024',
        description: 'Finished a beginning C programming course that covered fundamental ideas like variables, control structures, functions, and memory management.',
        skills: ['C Programming Language']
    },
    {
        id: 9,
        type: 'experience',
        title: 'Software Development Intern',
        company: 'CodeClowns',
        date: 'May 2025 - Present',
        description: 'Studying the system architecture, feature workflows, and development methodologies of Dwij, an AI-driven test-prep platform, through practical instruction. helped create a client-facing e-commerce site responsive frontend, which included dynamic product listings and smooth backend API integration.',
        skills: ['React', 'Next.js', 'NestJS', 'REST APIs', 'MongoDB', 'Neo4j', 'Redis']
    },
    {
        id: 10,
        type: 'experience',
        title: 'Backend Development Intern',
        company: 'CodeClowns',
        date: 'May 2024 - Oct 2024',
        description: 'REST APIs were developed and optimized, leading to a 25% increase in response time and overall backend performance. built a ToDo app that stores data indefinitely and allows user authentication. obtained hands-on experience in database integration and scalable backend development..',
        skills: ['Go', 'Gin', 'MongoDB', 'MariaDB', 'REST APIs', 'Authentication']
    },
    {
        id: 11,
        type: 'research',
        title: 'MorphDAG: A Workload-Aware Elastic DAG-Based Blockchain',
        company: 'OUR in Shiv Nadar University',
        date: 'March 2025 - Current',
        description: 'Contributed to a research project on MorphDAG under the guidance of Prof. Sweta Kumar, focusing on enhancing DAG-based blockchain performance. Implemented hot account detection and refined classification logic, achieving a 17.48% reduction in latency under concurrent workloads.',
        skills: ['Go Concurrency', 'Blockchain', 'DAG', 'Performance Optimization'],
        githubUrl: 'https://github.com/s-uryansh/OPT-MorphDAG',
        paper: '/assets/ResearchPaper/paper.pdf'
    },
   {
        id: 12,
        type: 'project',
        title: 'PortrayourPCB',
        company: 'Startup Project',
        date: '2025',
        description: 'Developed a full-stack scalable website for a startup.',
        skills: ['Next.js', 'React', 'MongoDB', 'Google SSO'],
        githubUrl: 'https://github.com/s-uryansh/PortayourPCB',
        liveUrl:'https://portayourpcb.vercel.app/',
        isFullStack: true
    },
];

export default function AboutPage() {
    const starsRef = useMouseParallax(0.01);

    // Tech icons for floating animation - reduced for mobile
    const techIcons = [
        { icon: FaUser, delay: 0.1, color: 'text-blue-400' },
        { icon: FaCode, delay: 0.2, color: 'text-green-400' },
        { icon: FaGraduationCap, delay: 0.3, color: 'text-purple-400' },
        { icon: FaBriefcase, delay: 0.4, color: 'text-pink-400' },
    ];

    return (
        <div className="min-h-screen bg-animate-gradient relative overflow-hidden">
            {/* Background layers */}
            <div 
                className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 pointer-events-none"
                aria-hidden="true"
            />
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }} 
                className="relative z-10"
            >
                <div ref={starsRef} className="stars-layer" aria-hidden="true" />
                
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <FloatingIcons />
                        
                        {/* Floating Tech Icons - hidden on small mobile */}
                        <div className="absolute inset-0 pointer-events-none hidden sm:block">
                            {techIcons.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${item.color}`}
                                    style={{
                                        top: `${20 + index * 15}%`,
                                        left: `${10 + index * 20}%`,
                                    }}
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ 
                                        opacity: [0.3, 0.8, 0.3],
                                        y: [0, -10, 0], 
                                        rotate: [0, 5, -5, 0] 
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: item.delay,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <item.icon size={24} className="sm:w-8 sm:h-8" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="relative z-10"
                        >
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0, scale: 0.9 }} 
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }} 
                            >
                                About Me
                            </motion.h1>
                            
                            <motion.div
                                className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 sm:mb-8"
                                initial={{ width: 0 }}
                                animate={{ width: '4rem' }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            />
                            
                            <motion.p
                                className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4"
                                initial={{ opacity: 0, y: 15 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }} 
                            >
                                Passionate{' '}
                                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">
                                    full-stack developer
                                </span>{' '}
                                and keen interest in{' '}
                                <span className="text-transparent bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text font-semibold">
                                    cybersecurity,
                                </span>{' '}
                                with hands-on experience in building scalable web applications
                            </motion.p>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }} 
                        >
                            <motion.div
                                className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
                                animate={{ y: [0, 3, 0] }} 
                                transition={{ duration: 1.5, repeat: Infinity }} 
                            >
                                <motion.div
                                    className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <div className="relative z-10 pb-8 sm:pb-16 px-4">
                    <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
                        
                        {/* About Me Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} 
                            viewport={{ once: true }}
                            className="glass-box p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                                <div className="order-2 md:order-1 flex justify-center">
                                    <AboutImages />
                                </div>
                                
                                <div className="order-1 md:order-2 space-y-6 sm:space-y-8">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                    >
                                        My Journey
                                    </motion.h2>
                                    
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }} 
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="space-y-4 sm:space-y-6 text-white/80 leading-relaxed text-base sm:text-lg"
                                    >
                                        <p>
                                            I&apos;m Suryansh Rohil, an enthusiastic full-stack developer who can create scalable web apps and has a keen interest in cybersecurity.
                                        </p>
                                        <p>
                                            With practical experience and increasing skills in cloud platforms, React, and Next.js, I build creative solutions that strike a balance between functionality and user experience.
                                        </p>
                                        <p className="hidden sm:block">
                                            Curiosity drives me to constantly experiment with new tools and trends, keeping aware of developing technologies to hone my skills and provide superior solutions.
                                        </p>
                                    </motion.div>
                                    
                                    <motion.a
                                        initial={{ opacity: 0, y: 15 }} 
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        href="/assets/Resume/resume.pdf"
                                        download
                                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/40 hover:via-purple-500/40 hover:to-pink-500/40 border border-white/30 hover:border-white/60 backdrop-filter backdrop-blur-lg text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-base sm:text-lg" // Faster: duration-300 → duration-200
                                    >
                                        Download CV
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        <ExpJourneyCert timelineData={timelineData} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}