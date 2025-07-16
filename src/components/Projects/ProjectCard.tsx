'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaLaptopCode, FaShieldAlt, FaPlay, FaArrowRight, FaArrowLeft, FaTimes } from 'react-icons/fa';

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
    projectName?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

// Define proper type for theme
interface ThemeType {
    gradient: string;
    border: string;
    glow: string;
    icon: React.ComponentType<{ className?: string }>;
    iconColor: string;
    badge: string;
    accentColor: string;
    particleColors: string[];
}

// Helper function to get particle colors based on theme and index
function getParticleColors(theme: ThemeType, index: number): string {
    const colors = {
        fullstack: ['#60a5fa', '#a855f7', '#06b6d4'],
        frontend: ['#34d399', '#10b981', '#14b8a6'],
        backend: ['#a855f7', '#8b5cf6', '#6366f1'],
        cybersecurity: ['#f87171', '#fb923c', '#fbbf24']
    };
    
    const categoryColors = colors[theme.iconColor?.includes('blue') ? 'fullstack' : 
                               theme.iconColor?.includes('green') ? 'frontend' :
                               theme.iconColor?.includes('purple') ? 'backend' : 'cybersecurity'];
    
    return categoryColors[index % categoryColors.length];
}

// Category themes for flash cards
const categoryThemes: Record<string, ThemeType> = {
    fullstack: {
        gradient: 'from-slate-900/95 via-blue-900/90 to-purple-900/95',
        border: 'border-blue-500/30',
        glow: 'shadow-blue-500/25',
        icon: FaCode,
        iconColor: 'text-blue-400',
        badge: 'bg-gradient-to-r from-blue-500 to-purple-500',
        accentColor: 'text-blue-300',
        particleColors: ['bg-blue-400', 'bg-purple-400', 'bg-cyan-400']
    },
    frontend: {
        gradient: 'from-slate-900/95 via-green-900/90 to-emerald-900/95',
        border: 'border-green-500/30',
        glow: 'shadow-green-500/25',
        icon: FaLaptopCode,
        iconColor: 'text-green-400',
        badge: 'bg-gradient-to-r from-green-500 to-emerald-500',
        accentColor: 'text-green-300',
        particleColors: ['bg-green-400', 'bg-emerald-400', 'bg-teal-400']
    },
    backend: {
        gradient: 'from-slate-900/95 via-purple-900/90 to-violet-900/95',
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/25',
        icon: FaServer,
        iconColor: 'text-purple-400',
        badge: 'bg-gradient-to-r from-purple-500 to-violet-500',
        accentColor: 'text-purple-300',
        particleColors: ['bg-purple-400', 'bg-violet-400', 'bg-indigo-400']
    },
    cybersecurity: {
        gradient: 'from-slate-900/95 via-red-900/90 to-orange-900/95',
        border: 'border-red-500/30',
        glow: 'shadow-red-500/25',
        icon: FaShieldAlt,
        iconColor: 'text-red-400',
        badge: 'bg-gradient-to-r from-red-500 to-orange-500',
        accentColor: 'text-red-300',
        particleColors: ['bg-red-400', 'bg-orange-400', 'bg-yellow-400']
    }
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    
    const theme = categoryThemes[project.category];
    const IconComponent = theme.icon;

    // Predefined particle positions that are consistent between server and client
    const BackgroundParticles = () => {
        const particlePositions = [
            { top: 15, left: 20 },
            { top: 35, left: 80 },
            { top: 60, left: 15 },
            { top: 25, left: 90 },
            { top: 80, left: 30 },
            { top: 45, left: 60 },
            { top: 70, left: 85 },
            { top: 10, left: 50 },
            { top: 90, left: 70 },
            { top: 55, left: 40 },
            { top: 30, left: 10 },
            { top: 75, left: 95 }
        ];

        return (
            <div className="absolute inset-0 overflow-hidden opacity-20">
                {particlePositions.map((position, i) => (
                    <motion.div
                        key={`${project.category}-${i}`}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            top: `${position.top}%`,
                            left: `${position.left}%`,
                            background: `linear-gradient(45deg, ${getParticleColors(theme, i)})`
                        }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        );
    };

    // Category-specific background patterns
    const CategoryBackground = () => {
        switch (project.category) {
            case 'fullstack':
                return (
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-2 left-2 text-blue-400/30 text-xs font-mono">&lt;/&gt;</div>
                        <div className="absolute top-2 right-2 text-purple-400/30 text-xs font-mono">&#123; &#125;</div>
                        <div className="absolute bottom-2 left-2 text-green-400/30 text-xs font-mono">API</div>
                        <div className="absolute bottom-2 right-2 text-cyan-400/30 text-xs font-mono">DB</div>
                    </div>
                );
            
            case 'frontend':
                return (
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-3 left-3 w-4 h-1 bg-green-400/40 rounded"></div>
                        <div className="absolute top-3 right-3 w-3 h-3 bg-emerald-400/40 rounded-full"></div>
                        <div className="absolute bottom-3 left-3 w-5 h-1 bg-teal-400/40 rounded"></div>
                        <div className="absolute bottom-3 right-3 text-green-400/30 text-xs font-mono">UI</div>
                    </div>
                );
                
            case 'backend':
                return (
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-3 left-3 w-2 h-4 bg-purple-400/40 rounded"></div>
                        <div className="absolute top-3 right-3 w-2 h-4 bg-violet-400/40 rounded"></div>
                        <div className="absolute bottom-3 left-3 w-3 h-3 bg-indigo-400/40 rounded-full"></div>
                        <div className="absolute bottom-3 right-3 text-purple-400/30 text-xs font-mono">DB</div>
                    </div>
                );
                
            case 'cybersecurity':
                return (
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-3 left-3 text-red-400/40 text-xs">🛡️</div>
                        <div className="absolute top-3 right-3 text-orange-400/40 text-xs">🔒</div>
                        <div className="absolute bottom-3 left-3 text-yellow-400/40 text-xs">🔍</div>
                        <div className="absolute bottom-3 right-3 text-red-400/40 text-xs">🚨</div>
                    </div>
                );
                
            default:
                return null;
        }
    };

    // Get project icon
    const getProjectIcon = () => {
        if (project.iconImage) {
            return (
                <Image 
                    src={project.iconImage} 
                    alt={`${project.title} icon`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain opacity-60"
                />
            );
        }
        
        if (project.icon) {
            return (
                <div className="text-4xl opacity-60">
                    {project.icon}
                </div>
            );
        }
        
        return <IconComponent className={`text-4xl ${theme.iconColor} opacity-60`} />;
    };

    // Handle video controls
    const handlePlayVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowVideo(true);
    };

    const handleStopVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowVideo(false);
    };

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
        >
            <motion.div
                className={`relative w-full overflow-hidden rounded-2xl backdrop-blur-xl border ${theme.border} ${theme.glow} shadow-2xl cursor-pointer`}
                animate={{
                    height: isExpanded ? 'auto' : '384px'
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                }}
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
                <CategoryBackground />
                <BackgroundParticles />
                
                <div className="relative z-10 p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <motion.div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${theme.badge}`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <IconComponent className="text-sm" />
                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </motion.div>
                        
                        <div className="flex items-center gap-2">
                            {project.featured && (
                                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                                    Featured
                                </div>
                            )}
                            
                            <motion.div
                                className="text-white/50 text-sm"
                                animate={{ rotate: isExpanded ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaArrowRight />
                            </motion.div>
                        </div>
                    </div>

                    {/* Video/Preview Area */}
                    <div className="flex items-center justify-center mb-4 h-40">
                        <AnimatePresence mode="wait">
                            {showVideo && project.video ? (
                                <motion.div
                                    key="video"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative w-full h-40 rounded-lg overflow-hidden"
                                >
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-40 object-cover shadow-lg"
                                    >
                                        <source src={project.video} type="video/mp4" />
                                    </video>
                                    
                                    <div className="absolute top-2 right-2 flex gap-2">
                                        <motion.button
                                            onClick={handleStopVideo}
                                            className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            title="Back to icon view"
                                        >
                                            <FaTimes className="text-sm" />
                                        </motion.button>
                                    </div>

                                    <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                                        {project.projectName || project.title}
                                    </div>
                                </motion.div>
                            ) : project.video ? (
                                <motion.div
                                    key="icon"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative w-full h-40 rounded-lg bg-black/30 flex items-center justify-center group border border-white/10"
                                >
                                    <div className="text-center">
                                        {getProjectIcon()}
                                        <div className="text-white/60 text-sm mt-2">
                                            {project.projectName || project.title}
                                        </div>
                                    </div>
                                    
                                    <motion.button
                                        onClick={handlePlayVideo}
                                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-lg"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Play demo video"
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <FaPlay className="text-white text-3xl" />
                                            <span className="text-white text-xs font-medium">Watch Demo</span>
                                        </div>
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="no-video"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-40 rounded-lg bg-black/20 flex items-center justify-center border border-white/10"
                                >
                                    <div className="text-center">
                                        {getProjectIcon()}
                                        <div className="text-white/60 text-sm mt-2">
                                            {project.projectName || project.title}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold text-white mb-3 ${theme.accentColor} text-center line-clamp-2`}>
                        {project.title}
                    </h3>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25
                                }}
                                className="overflow-hidden"
                            >
                                <motion.div
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.05 }}
                                    className="mb-4"
                                >
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="mb-4"
                                >
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 8).map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 text-xs rounded-lg border transition-all duration-150 bg-white/10 text-white/80 border-white/20 hover:bg-white/20 ${theme.glow}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 8 && (
                                            <span className="px-2 py-1 text-xs rounded-lg bg-white/5 text-white/60">
                                                +{project.techStack.length - 8}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.15 }}
                                    className="flex items-center gap-3"
                                >
                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-150 bg-white/10 text-white/80 hover:bg-white/20 flex-1 justify-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaGithub className="text-sm" />
                                            Code
                                        </motion.a>
                                    )}
                                    
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-150 bg-gradient-to-r ${theme.badge} text-white shadow-lg flex-1 justify-center`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaExternalLinkAlt className="text-sm" />
                                            Live
                                        </motion.a>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-center mt-4"
                                >
                                    <div className="text-white/50 text-xs flex items-center justify-center gap-1">
                                        <FaArrowLeft className="text-xs" />
                                        Click to collapse
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!isExpanded && (
                        <div className="text-center">
                            <div className="text-white/50 text-xs flex items-center justify-center gap-1">
                                Click to expand
                                <FaArrowRight className="text-xs" />
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}