'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaAward, FaCode, FaTrophy, FaFilter, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaMapMarkerAlt, FaFilePdf } from 'react-icons/fa';

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
    location?: string;
    paper?: string;
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
    const dotScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
    
    // Dynamic colors based on type
    const getTypeColor = (type: string) => {
        const colors = {
            education: { bg: 'from-emerald-500 to-green-600', accent: 'emerald-500', text: 'emerald-100' },
            experience: { bg: 'from-blue-500 to-indigo-600', accent: 'blue-500', text: 'blue-100' },
            certification: { bg: 'from-purple-500 to-violet-600', accent: 'purple-500', text: 'purple-100' },
            research: { bg: 'from-amber-500 to-orange-600', accent: 'amber-500', text: 'amber-100' },
            project: { bg: 'from-rose-500 to-pink-600', accent: 'rose-500', text: 'rose-100' },
            achievement: { bg: 'from-cyan-500 to-teal-600', accent: 'cyan-500', text: 'cyan-100' },
        };
        return colors[type as keyof typeof colors] || colors.experience;
    };

    const typeColors = getTypeColor(item.type);
    const isLastItem = index === totalItems - 1;

    if (!isVisible) return null;

    return (
        <motion.div
            ref={ref}
            className="relative flex items-start mb-8 sm:mb-12 last:mb-0 w-full"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut"
            }}
            layout
        >
            {/* Timeline line - Desktop: centered, Mobile: left-aligned */}
            {!isLastItem && (
                <>
                    {/* Desktop timeline line */}
                    <div className="hidden sm:block absolute left-1/2 top-16 w-0.5 h-full bg-white/20 -translate-x-1/2" />
                    <motion.div 
                        className={`hidden sm:block absolute left-1/2 top-16 w-0.5 bg-gradient-to-b ${typeColors.bg} -translate-x-1/2 origin-top`}
                        style={{ height: lineHeight }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 + 0.15 }}
                    />
                    
                    {/* Mobile timeline line */}
                    <div className="sm:hidden absolute left-6 top-16 w-0.5 h-full bg-white/20" />
                    <motion.div 
                        className={`sm:hidden absolute left-6 top-16 w-0.5 bg-gradient-to-b ${typeColors.bg} origin-top`}
                        style={{ height: lineHeight }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 + 0.15 }}
                    />
                </>
            )}
            
            {/* Timeline dot */}
            <motion.div
                className={`absolute sm:left-1/2 left-6 top-0 sm:-translate-x-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${typeColors.bg} rounded-full flex items-center justify-center z-10 shadow-lg border-4 border-white/90`}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05 + 0.1,
                    type: "spring",
                    stiffness: 300
                }}
                style={{ scale: dotScale }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 + 0.25 }}
                >
                    <Icon className="text-white text-base sm:text-lg" />
                </motion.div>
            </motion.div>
            
            {/* Content Card */}
            <div className={`w-full ${
                // Desktop: alternating sides, Mobile: always right of timeline
                'sm:max-w-lg ' + (index % 2 === 0 
                    ? 'sm:mr-auto sm:pr-8 sm:text-right' 
                    : 'sm:ml-auto sm:pl-8 sm:text-left'
                ) + ' ml-20 sm:ml-0'
            } mt-0`}>
                <motion.div 
                    className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                        duration: 0.4, 
                        delay: index * 0.05 + 0.15,
                        ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    layout
                >
                    {/* Header */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'sm:items-end' : 'sm:items-start'} items-start mb-3`}>
                        {/* Type badge */}
                        <motion.div 
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-gradient-to-r ${typeColors.bg} text-white`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 + 0.2 }}
                        >
                            <Icon className="text-xs" />
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h3 
                            className={`text-lg sm:text-xl font-bold text-white mb-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} text-left`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 + 0.25 }}
                        >
                            {item.title}
                        </motion.h3>
                        
                        {/* Company */}
                        <motion.p 
                            className={`text-${typeColors.text} font-medium text-sm sm:text-base ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} text-left`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                        >
                            {item.company}
                        </motion.p>
                        
                        {/* Date and Location */}
                        <motion.div 
                            className={`flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 mt-1 text-white/60 text-xs sm:text-sm ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 + 0.35 }}
                        >
                            <div className="flex items-center gap-1">
                                <FaCalendarAlt className="text-xs" />
                                {item.date}
                            </div>
                            {item.location && (
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-xs" />
                                    {item.location}
                                </div>
                            )}
                        </motion.div>
                    </div>
                    
                    {/* Description */}
                    <motion.p 
                        className={`text-white/80 text-sm sm:text-base leading-relaxed mb-4 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} text-left`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 + 0.4 }}
                    >
                        {item.description}
                    </motion.p>
                    
                    {/* Skills */}
                    {item.skills && item.skills.length > 0 && (
                        <motion.div 
                            className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'} justify-start`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 + 0.45 }}
                        >
                            {item.skills.slice(0, 6).map((skill, skillIndex) => (
                                <motion.span
                                    key={skillIndex}
                                    className={`px-2 py-1 text-xs rounded-md bg-${typeColors.accent}/20 text-${typeColors.text} border border-${typeColors.accent}/30 hover:bg-${typeColors.accent}/30 transition-colors duration-200`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.2, 
                                        delay: index * 0.05 + 0.5 + skillIndex * 0.02 
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                            {item.skills.length > 6 && (
                                <motion.span 
                                    className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/60 border border-white/20"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 + 0.65 }}
                                >
                                    +{item.skills.length - 6}
                                </motion.span>
                            )}
                        </motion.div>
                    )}
                    
                    {/* Project Links */}
                    {item.type === 'project' && (item.githubUrl || item.liveUrl) && (
                        <motion.div 
                            className={`flex items-center gap-2 ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'} justify-start`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 + 0.5 }}
                        >
                            {item.githubUrl && (
                                <motion.a
                                    href={item.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-white text-xs rounded-lg transition-all duration-200 hover:scale-105"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 + 0.55 }}
                                >
                                    <FaGithub />
                                    <span className="hidden sm:inline">GitHub</span>
                                </motion.a>
                            )}
                            {item.liveUrl && (
                                <motion.a
                                    href={item.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-3 py-2 bg-${typeColors.accent}/20 hover:bg-${typeColors.accent}/30 text-${typeColors.text} text-xs rounded-lg transition-all duration-200 hover:scale-105`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 + 0.6 }}
                                >
                                    <FaExternalLinkAlt />
                                    <span className="hidden sm:inline">Live Demo</span>
                                </motion.a>
                            )}
                        </motion.div>
                    )}

                    {/* Research Paper Link */}
                    {item.type === 'research' && item.paper && (
                        <motion.div 
                            className={`flex items-center gap-2 ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'} justify-start`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 + 0.5 }}
                        >
                            <motion.a
                                href={item.paper}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className={`flex items-center gap-2 px-3 py-2 bg-${typeColors.accent}/20 hover:bg-${typeColors.accent}/30 text-${typeColors.text} text-xs rounded-lg transition-all duration-200 hover:scale-105`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 + 0.55 }}
                            >
                                <FaFilePdf />
                                <span className="hidden sm:inline">Research Paper</span>
                            </motion.a>
                        </motion.div>
                    )}
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
    const [activeFilter, setActiveFilter] = useState<string>('all');
    
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
            all: 'from-slate-500 to-gray-600',
            education: 'from-emerald-500 to-green-600',
            experience: 'from-blue-500 to-indigo-600',
            certification: 'from-purple-500 to-violet-600',
            research: 'from-amber-500 to-orange-600',
            project: 'from-rose-500 to-pink-600',
            achievement: 'from-cyan-500 to-teal-600',
        };
        return colors[type as keyof typeof colors] || 'from-blue-500 to-indigo-600';
    };

    const getTypeIcon = (type: string) => {
        if (type === 'all') return FaFilter;
        return iconMap[type as keyof typeof iconMap] || FaBriefcase;
    };

    return (
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
            <motion.div
                ref={timelineRef}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl relative max-w-6xl mx-auto w-full ${className}`}
                style={{
                    opacity: sectionOpacity,
                    y: sectionY
                }}
            >
                {/* Title */}
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    style={{
                        opacity: titleOpacity,
                        y: titleY
                    }}
                >
                    {title}
                </motion.h2>

                {/* Filter Menu */}
                <motion.div
                    className="flex justify-center items-center mb-8 sm:mb-12 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                >
                    <div className="bg-white/5 backdrop-blur-lg border border-white/20 p-4 rounded-xl w-full max-w-4xl">
                        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                            {availableTypes.map((type) => {
                                const IconComponent = getTypeIcon(type);
                                return (
                                    <motion.button
                                        key={type}
                                        onClick={() => setActiveFilter(type)}
                                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                                            activeFilter === type 
                                                ? `bg-gradient-to-r ${getTypeColor(type)} text-white shadow-lg` 
                                                : 'bg-white/10 hover:bg-white/20 text-white/80'
                                        }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        layout
                                    >
                                        <IconComponent className="text-sm" />
                                        <span className="capitalize">
                                            {type === 'all' ? 'All' : type}
                                        </span>
                                        <AnimatePresence>
                                            {activeFilter === type && (
                                                <motion.div 
                                                    className="w-2 h-2 bg-white rounded-full"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0, opacity: 0 }}
                                                    transition={{ duration: 0.15 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
                
                {/* Timeline Container */}
                <div className="w-full">
                    <motion.div 
                        className="relative w-full max-w-5xl mx-auto"
                        layout
                    >
                        <AnimatePresence mode="wait">
                            {filteredData.length > 0 ? (
                                <motion.div
                                    key={activeFilter}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    layout
                                >
                                    {filteredData.map((item, index) => (
                                        <TimelineItem 
                                            key={`${activeFilter}-${item.id}`}
                                            item={item} 
                                            index={index} 
                                            totalItems={filteredData.length}
                                            isVisible={true}
                                        />
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="text-center text-white/60 py-12 w-full"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-lg font-medium mb-2">No items found</div>
                                    <div className="text-sm">Try selecting a different filter</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

// Export the interface for external use
export type { TimelineItemData };