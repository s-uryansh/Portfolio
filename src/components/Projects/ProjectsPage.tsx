'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectsGrid from './ProjectsGrid';
import { useMouseParallax } from '@/hooks/useMouseParallax';

const projects = [
    {
        id: 1,
        title: 'AI-Powered Medical Assistant Platform',
        description: 'Developed a full-stack AI-powered health platform offering personalized support through features like medicine safety scanning via barcode/QR, emergency videos, hospital locator, and medical data export.',
        techStack: ['Next.js', 'React', 'MySQL', 'Google SSO'],
        category: 'fullstack' as const,
        githubUrl: 'https://github.com/s-uryansh/GladMeds',
        featured: true,
        icon:'icons/logo.svg',
        iconImage:'/icons/icon.png',
        projectName: 'GladMeds',
        video: '/videos/(Ready)GladMeds.mp4'
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        description: 'During my internship, I created a frontend with dynamic product listings for a client e-commerce platform.',
        techStack: ['Next.js', 'React', 'Tailwind CSS'],
        iconImage:'/icons/apnaMaaliLogo.png',
        projectName: 'Apna Maali',
        category: 'frontend' as const,
        video: '/videos/(Ready)ApnaMaali.mp4'
    },
    {
        id: 3,
        title: 'Smart City Transport System',
        description: 'Developed a transport management system with interactive frontends and RESTful APIs for effective route and schedule management.',
        techStack: ['Go', 'Gin', 'MySQL', 'React', 'REST APIs'],
        category: 'fullstack' as const,
        iconImage:'/icons/sctsLogo.png',
        projectName: 'Smart City Transport',
        githubUrl: 'https://github.com/s-uryansh/Smart-City-Transport'
    },
    {
        id: 4,
        title: 'ToDo List Backend',
        description: 'Built a robust ToDo backend logic with Go and Gin framework, featuring user authentication and persistent data storage.',
        techStack: ['Go', 'Gin', 'MySQL', 'MongoDB', 'JWT'],
        iconImage:'/icons/ToDoLOGO.png',
        category: 'backend' as const,
        projectName: 'ToDo List',
        githubUrl: 'https://github.com/s-uryansh/ToDo'
    }
];

export default function ProjectsPage() {
    const starsRef = useMouseParallax(0.01);

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
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                <div ref={starsRef} className="stars-layer" aria-hidden="true" />
                
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center px-responsive">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="container-responsive max-2xl text-center">
                            <motion.h1
                                className="text-responsive-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Projects
                            </motion.h1>
                            
                            <motion.div
                                className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 sm:mb-8"
                                initial={{ width: 0 }}
                                animate={{ width: '6rem' }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                            
                            <motion.p
                                className="text-responsive-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.2 }}
                            >
                                Explore my{' '}
                                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">
                                    projects
                                </span>{' '}
                                and see what I&apos;ve been building
                            </motion.p>
                        </div>
                    </motion.div>
                     
                            {/* Scroll indicator */}
                            <motion.div
                                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <motion.div
                                            className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2"
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                </section>

                {/* Projects Section */}
                <section className="relative py-responsive">
                    <div className="container-responsive max-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-8 sm:mb-12 text-center"
                        >
                            
                            <h2 className="text-responsive-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-white/70 text-responsive-base max-w-2xl mx-auto">
                                Full-stack applications, AI integrations, and more.
                            </p>
                        </motion.div>
                        
                        <ProjectsGrid projects={projects} />
                    </div>
                </section>
            </motion.div>
        </div>
    );
}