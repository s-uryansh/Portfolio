'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaAward, FaCode, FaTrophy, FaFilter, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Icon mapping for different types
const iconMap = {
    education: FaGraduationCap,
    experience: FaBriefcase,
    certification: FaCertificate,
    research: FaAward,
    project: FaCode,
    achievement: FaTrophy,
};

interface TimelineItemData {
    id: number;
    type: keyof typeof iconMap;
    title: string;
    company: string;
    date: string;
    description: string;
    skills?: string[];
    color?: string;
    githubUrl?: string;
    liveUrl?: string;
    isFullStack?: boolean;
}

interface TimelineItemProps {
    item: TimelineItemData;
    index: number;
    totalItems: number;
    isVisible: boolean;
}

function TimelineItem({ item, index, totalItems, isVisible }: TimelineItemProps) {
    const ref = useRef(null);
    const Icon = iconMap[item.type] || FaBriefcase;

    // Scroll-based progress for timeline line
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Transform values based on scroll progress
    const lineHeight = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "100%"]);
    const dotScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const dotRotate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-180, 0, 0, 180]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const contentX = useTransform(
        scrollYProgress, 
        [0, 0.2, 0.8, 1], 
        [index % 2 === 0 ? -30 : 30, 0, 0, index % 2 === 0 ? -30 : 30]
    );
    const contentY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);
    const badgeScale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.8, 1, 1, 0.8]);
    const badgeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const skillsOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const skillsY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, 10]);
    
    // Dynamic colors based on type
    const getTypeColor = (type: string) => {
        const colors = {
            education: 'from-green-400 to-emerald-500',
            experience: 'from-blue-400 to-cyan-500',
            certification: 'from-purple-400 to-violet-500',
            research: 'from-yellow-400 to-orange-500',
            project: 'from-pink-400 to-rose-500',
            achievement: 'from-indigo-400 to-blue-500',
        };
        return colors[type as keyof typeof colors] || 'from-blue-400 to-purple-400';
    };

    // Detect project type based on skills and title
    const getProjectType = (item: TimelineItemData) => {
        if (item.isFullStack) return 'fullstack';
        
        const skills = item.skills?.join(' ').toLowerCase() || '';
        const title = item.title.toLowerCase();
        
        // Backend detection
        if (skills.includes('go') || skills.includes('gin') || skills.includes('backend') || 
            title.includes('backend') || title.includes('api') || title.includes('todo') ||
            skills.includes('node.js') || skills.includes('express')) {
            return 'backend';
        }
        
        // Frontend detection
        if (title.includes('frontend') || title.includes('e-commerce') || title.includes('dashboard') ||
            (skills.includes('react') && !skills.includes('backend') && !item.isFullStack)) {
            return 'frontend';
        }
        
        return 'general';
    };

    // Simplified project backgrounds for mobile
    const ProjectBackground = ({ type }: { type: string }) => (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] sm:opacity-[0.08]">
                <div className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1 h-full w-full p-2 ${
                    type === 'fullstack' ? 'text-blue-400' :
                    type === 'backend' ? 'text-purple-400' :
                    'text-green-400'
                }`}>
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div
                            key={i}
                            className={`rounded-sm ${
                                type === 'fullstack' ? 
                                    (i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-green-400' : 'bg-purple-400') :
                                type === 'backend' ?
                                    (i % 2 === 0 ? 'bg-purple-400' : 'bg-violet-400') :
                                    (i % 2 === 0 ? 'bg-green-400' : 'bg-emerald-400')
                            }`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Simplified floating elements for mobile */}
            <div className="absolute inset-0 opacity-10 sm:opacity-15">
                <div className="absolute top-3 left-4 text-xs font-mono animate-pulse">
                    {type === 'fullstack' ? '{ "stack": "full" }' :
                     type === 'backend' ? 'func main() {' :
                     '<Component />'}
                </div>
                <div className="absolute bottom-3 right-4 text-xs font-mono animate-pulse delay-300">
                    {type === 'fullstack' ? '</fullstack>' :
                     type === 'backend' ? '</backend>' :
                     '</Component>'}
                </div>
            </div>
            
            <div className={`absolute top-2 right-2 bg-gradient-to-r ${
                type === 'fullstack' ? 'from-blue-500/20 to-purple-500/20' :
                type === 'backend' ? 'from-purple-500/20 to-violet-500/20' :
                'from-green-500/20 to-emerald-500/20'
            } rounded-full px-2 py-1 text-[8px] sm:text-[10px] text-white/60 font-mono`}>
                {type === 'fullstack' ? 'FULL STACK' :
                 type === 'backend' ? 'BACKEND' :
                 'FRONTEND'}
            </div>
        </div>
    );

    const projectType = item.type === 'project' ? getProjectType(item) : null;
    const isLastItem = index === totalItems - 1;

    if (!isVisible) return null;

    return (
        <motion.div
            ref={ref}
                className="relative flex items-start justify-center mb-12 sm:mb-16 md:mb-20 last:mb-0 w-full min-h-[250px] sm:min-h-[300px] z-10"
            style={{
                opacity: contentOpacity,
                x: contentX
            }}
        >
            {/* Progressive timeline line - only show if not last item */}
            {!isLastItem && (
                <>
                   <div className="absolute left-1/2 top-12 sm:top-16 w-0.5 sm:w-1 h-full bg-white/20 -translate-x-1/2 rounded-full z-0" />
                    <motion.div 
                        className={`absolute left-1/2 top-12 sm:top-16 w-0.5 sm:w-1 bg-gradient-to-b ${getTypeColor(item.type)} -translate-x-1/2 origin-top rounded-full z-0`}
                        style={{ height: lineHeight }}
                    />
                </>
            )}
            
            {/* Timeline dot */}
            <motion.div
                className={`absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${getTypeColor(item.type)} rounded-full flex items-center justify-center z-10 shadow-lg border-2 sm:border-4 border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-110`}
                style={{
                    scale: dotScale,
                    rotate: dotRotate
                }}
            >
                <Icon className="text-white text-sm sm:text-base md:text-xl" />
                
                {/* Glow ring on hover */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getTypeColor(item.type)} opacity-0 hover:opacity-30 blur-md scale-150 transition-all duration-500 -z-10`} />
            </motion.div>
            
            {/* Content */}
            <div className={`w-full max-w-xs sm:max-w-sm md:max-w-lg ${index % 2 === 0 ? 'mr-auto pr-2 sm:pr-4 md:pr-8 text-right' : 'ml-auto pl-2 sm:pl-4 md:pl-8 text-left'} mt-24 sm:mt-20`}>
                <motion.div 
                    className={`relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group ${
                        item.type === 'project' && projectType === 'fullstack'
                            ? 'bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-xl border border-blue-500/30' 
                            : item.type === 'project' && projectType === 'backend'
                            ? 'bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-violet-900/95 backdrop-blur-xl border border-purple-500/30'
                            : item.type === 'project' && projectType === 'frontend'
                            ? 'bg-gradient-to-br from-slate-900/95 via-green-900/90 to-emerald-900/95 backdrop-blur-xl border border-green-500/30'
                            : 'glass-box'
                    } p-4 sm:p-6`}
                    style={{
                        y: contentY
                    }}
                >
                    {/* Project backgrounds */}
                    {item.type === 'project' && projectType && <ProjectBackground type={projectType} />}
                    
                    {/* Content wrapper */}
                    <div className="relative z-10">
                        {/* Type badge */}
                        <motion.div
                            className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold mb-2 sm:mb-3 bg-gradient-to-r ${getTypeColor(item.type)} text-white shadow-lg`}
                            style={{
                                scale: badgeScale,
                                opacity: badgeOpacity
                            }}
                        >
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            {item.type === 'project' && projectType === 'fullstack' && (
                                <span className="ml-1 text-yellow-300">⚡</span>
                            )}
                        </motion.div>
                        
                        {/* Title and links */}
                        <div className={`flex items-start ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-2 gap-2 sm:gap-3`}>
                            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 leading-tight">
                                    {item.title}
                                </h3>
                            </div>
                            
                            {/* Project links */}
                            {item.type === 'project' && (item.githubUrl || item.liveUrl) && (
                                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                                    {item.githubUrl && (
                                        <motion.a
                                            href={item.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-blue-300 transition-all duration-300 hover:scale-110"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub className="text-xs sm:text-sm" />
                                        </motion.a>
                                    )}
                                    {item.liveUrl && (
                                        <motion.a
                                            href={item.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-green-300 transition-all duration-300 hover:scale-110"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                        </motion.a>
                                    )}
                                </div>
                            )}
                        </div>
                        
                        <p className={`text-blue-300 font-medium mb-2 text-sm sm:text-base lg:text-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.company}</p>
                        <p className={`text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.date}</p>
                        <p className={`text-white/80 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.description}</p>
                        
                        {/* Skills tags */}
                        {item.skills && item.skills.length > 0 && (
                            <motion.div
                                className={`flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                                style={{
                                    opacity: skillsOpacity,
                                    y: skillsY
                                }}
                            >
                                {item.skills.slice(0, 6).map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-2 py-1 text-xs rounded-lg border transition-all duration-300 hover:scale-105 ${
                                            item.type === 'project' && projectType === 'fullstack'
                                                ? 'bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30'
                                                : item.type === 'project' && projectType === 'backend'
                                                ? 'bg-purple-500/20 text-purple-200 border-purple-400/30 hover:bg-purple-500/30'
                                                : item.type === 'project' && projectType === 'frontend'
                                                ? 'bg-green-500/20 text-green-200 border-green-400/30 hover:bg-green-500/30'
                                                : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20'
                                        }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                                {item.skills.length > 6 && (
                                    <span className="px-2 py-1 text-xs rounded-lg bg-white/5 text-white/60 border border-white/10">
                                        +{item.skills.length - 6}
                                    </span>
                                )}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

interface ExpJourneyCertProps {
    timelineData: TimelineItemData[];
    title?: string;
    className?: string;
}

export default function ExpJourneyCert({ 
    timelineData, 
    title = "Experience, Journey & Certifications",
    className = ""
}: ExpJourneyCertProps) {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState<string>('education');
    
    // Scroll progress for timeline section
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end start"]
    });

    // Transform values for section animations
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    const sectionY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [20, 0, 0, 20]);

    // Auto-sort timeline by date (newest first)
    const sortedData = [...timelineData].sort((a, b) => {
        const dateA = new Date(a.date.split(' - ')[0] || a.date);
        const dateB = new Date(b.date.split(' - ')[0] || b.date);
        return dateB.getTime() - dateA.getTime();
    });

    // Filter data based on active filter
    const filteredData = activeFilter === 'all' 
        ? sortedData 
        : sortedData.filter(item => item.type === activeFilter);

    // Get unique types for filter options
    const availableTypes = ['all', ...Array.from(new Set(timelineData.map(item => item.type)))];

    // Get type color for filter buttons
    const getTypeColor = (type: string) => {
        const colors = {
            all: 'from-gray-400 to-gray-600',
            education: 'from-green-400 to-emerald-500',
            experience: 'from-blue-400 to-cyan-500',
            certification: 'from-purple-400 to-violet-500',
            research: 'from-yellow-400 to-orange-500',
            project: 'from-pink-400 to-rose-500',
            achievement: 'from-indigo-400 to-blue-500',
        };
        return colors[type as keyof typeof colors] || 'from-blue-400 to-purple-400';
    };

    const getTypeIcon = (type: string) => {
        if (type === 'all') return FaFilter;
        return iconMap[type as keyof typeof iconMap] || FaBriefcase;
    };

    return (
        <div className="w-full flex justify-center">
            <motion.div
                ref={timelineRef}
                className={`glass-box p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-3xl shadow-2xl relative max-w-7xl mx-auto w-full ${className}`}
                style={{
                    opacity: sectionOpacity,
                    y: sectionY
                }}
            >
                {/* Title */}
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-4"
                    style={{
                        opacity: titleOpacity,
                        y: titleY
                    }}
                >
                    {title}
                </motion.h2>

                {/* Filter Menu */}
                <motion.div
                    className="flex justify-center items-center mb-6 sm:mb-8 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="glass-box p-3 sm:p-4 rounded-2xl border border-white/30 w-full max-w-5xl hover:border-white/50 transition-all duration-300">
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-sm text-center">Filter by Type</h3>
                        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                            {availableTypes.map((type) => {
                                const IconComponent = getTypeIcon(type);
                                return (
                                    <motion.button
                                        key={type}
                                        onClick={() => setActiveFilter(type)}
                                        className={`relative flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 ${
                                            activeFilter === type 
                                                ? `bg-gradient-to-r ${getTypeColor(type)} text-white shadow-lg scale-105` 
                                                : 'bg-white/10 hover:bg-white/20 text-white/80 hover:scale-105'
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <IconComponent className="text-xs sm:text-sm md:text-base" />
                                        <span className="text-xs sm:text-sm capitalize font-medium">
                                            {type === 'all' ? 'All' : type}
                                        </span>
                                        {activeFilter === type && (
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full ml-1 animate-pulse"></div>
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
                
                {/* Timeline Container */}
                <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-4xl sm:max-w-5xl md:max-w-6xl">
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <TimelineItem 
                                    key={item.id} 
                                    item={item} 
                                    index={index} 
                                    totalItems={filteredData.length}
                                    isVisible={true}
                                />
                            ))
                        ) : (
                            <motion.div
                                className="text-center text-white/60 py-8 sm:py-12 w-full"
                                style={{
                                    opacity: sectionOpacity
                                }}
                            >
                                No items found for the selected filter.
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// Export the interface for external use
export type { TimelineItemData };