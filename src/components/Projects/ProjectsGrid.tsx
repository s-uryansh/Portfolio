'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    category: 'frontend' | 'backend' | 'fullstack' | 'cybersecurity';
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
    video?: string;
    icon?: string;
    iconImage?: string;
}

interface ProjectsGridProps {
    projects: Project[];
}

// Category background themes
const categoryBackgrounds = {
    all: {
        gradient: 'bg-gradient-to-br from-slate-900/50 via-gray-900/50 to-black/50',
        particles: 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
        glow: 'shadow-blue-500/10'
    },
    fullstack: {
        gradient: 'bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40',
        particles: 'from-blue-400/30 via-purple-400/30 to-cyan-400/30',
        glow: 'shadow-blue-500/20'
    },
    frontend: {
        gradient: 'bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-teal-900/40',
        particles: 'from-green-400/30 via-emerald-400/30 to-teal-400/30',
        glow: 'shadow-green-500/20'
    },
    backend: {
        gradient: 'bg-gradient-to-br from-purple-900/40 via-violet-900/30 to-indigo-900/40',
        particles: 'from-purple-400/30 via-violet-400/30 to-indigo-400/30',
        glow: 'shadow-purple-500/20'
    },
    cybersecurity: {
        gradient: 'bg-gradient-to-br from-red-900/40 via-orange-900/30 to-yellow-900/40',
        particles: 'from-red-400/30 via-orange-400/30 to-yellow-400/30',
        glow: 'shadow-red-500/20'
    }
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
    const [filter, setFilter] = useState<string>('all');

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    const categories = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
        { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
        { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
        { id: 'cybersecurity', label: 'Cybersecurity', count: projects.filter(p => p.category === 'cybersecurity').length },
    ].filter(cat => cat.count > 0);

    const currentTheme = categoryBackgrounds[filter as keyof typeof categoryBackgrounds];

    // Fixed background particles with predefined positions
    const BackgroundParticles = () => {
        // Static positions that are consistent between server and client
        const particlePositions = [
            { top: 12, left: 18 },
            { top: 28, left: 82 },
            { top: 45, left: 12 },
            { top: 65, left: 88 },
            { top: 82, left: 25 },
            { top: 35, left: 65 },
            { top: 75, left: 78 },
            { top: 8, left: 55 },
            { top: 92, left: 68 },
            { top: 58, left: 38 },
            { top: 22, left: 8 },
            { top: 72, left: 92 }
        ];

        return (
            <div className="absolute inset-0 overflow-hidden opacity-30">
                {particlePositions.map((position, i) => (
                    <motion.div
                        key={`${filter}-particle-${i}`} // Include filter in key for re-animation
                        className={`absolute w-3 h-3 rounded-full bg-gradient-to-r ${currentTheme.particles}`}
                        style={{
                            top: `${position.top}%`,
                            left: `${position.left}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <motion.div 
            className="w-full relative"
            key={filter} // Re-render when filter changes
        >
            {/* Dynamic background overlay */}
            <motion.div
                className={`absolute inset-0 ${currentTheme.gradient} ${currentTheme.glow} rounded-3xl blur-3xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
            
            {/* Background particles */}
            <BackgroundParticles />

            <div className="relative z-10">
                {/* Filter buttons - Mobile responsive */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border touch-responsive ${
                                filter === category.id
                                    ? `bg-gradient-to-r ${getButtonGradient(category.id)} text-white shadow-lg border-white/20`
                                    : 'bg-white/10 text-white/80 hover:bg-white/20 border-white/20'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            layout
                        >
                            <span className="hidden sm:inline">{category.label}</span>
                            <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                            <span className="ml-1 sm:ml-2 text-xs opacity-70">({category.count})</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects grid - Mobile responsive */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    layout
                    key={`grid-${filter}`} // Force re-render on filter change
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-white/60 text-lg mb-2">No projects found</div>
                        <div className="text-white/40 text-sm">Try selecting a different category</div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

// Helper function to get button gradient based on category
function getButtonGradient(categoryId: string): string {
    switch (categoryId) {
        case 'fullstack':
            return 'from-blue-500 to-purple-500';
        case 'frontend':
            return 'from-green-500 to-emerald-500';
        case 'backend':
            return 'from-purple-500 to-violet-500';
        case 'cybersecurity':
            return 'from-red-500 to-orange-500';
        default:
            return 'from-blue-500 to-purple-500';
    }
}