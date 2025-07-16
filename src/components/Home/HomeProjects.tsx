'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '../Projects/ProjectCard';

// Featured projects (IDs 1 and 2)
const featuredProjects = [
    {
        id: 1,
        title: 'AI-Powered Medical Assistant Platform',
        description: 'Developed a full-stack AI-powered health platform offering personalized support through features like medicine safety scanning via barcode/QR, emergency videos, hospital locator, and medical data export.',
        techStack: ['Next.js', 'React', 'MySQL', 'Google SSO'],
        category: 'fullstack' as const,
        projectName: 'GladMeds',
        iconImage: '/icons/icon.png',
        githubUrl: 'https://github.com/s-uryansh/GladMeds',
        featured: true,
        video: '/videos/(Ready)GladMeds.mp4'
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        description: 'During my internship, I created a frontend with dynamic product listings for a client e-commerce platform.',
        techStack: ['Next.js', 'React', 'Tailwind CSS'],
        projectName: 'Apna Maali',
        category: 'frontend' as const,
        iconImage: '/icons/apnaMaaliLogo.png',
        video: '/videos/(Ready)ApnaMaali.mp4'
    }
];

export default function HomeProjects() {
    return (
        <section className="relative py-responsive">
            <div className="container-responsive max-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-responsive-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: '6rem' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-white/70 text-responsive-base max-w-2xl mx-auto">
                        Explore my latest projects showcasing full-stack development and cybersecurity expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard 
                                project={project} 
                                index={index}
                            />
                        </motion.div>
                    ))}
                </div>
                
                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link href="/projects">
                        <motion.button
                            className="glass-box px-8 py-4 rounded-full border border-purple-400/50 hover:border-purple-400 transition-all duration-300 bg-gradient-to-r from-purple-400/10 to-pink-400/10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-purple-300 font-medium text-lg">View More Projects →</span>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}