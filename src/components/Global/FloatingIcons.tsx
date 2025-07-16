'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const icons = [
    { src: '/assets/keyboard.png', alt: 'keyboard', size: { mobile: 80, desktop: 150 } },
    { src: '/assets/mouse.png', alt: 'mouse', size: { mobile: 80, desktop: 150 } },
    { src: '/assets/earbuds.png', alt: 'earbuds', size: { mobile: 80, desktop: 150 } },
];

type Pos = { top: string; left: string };

export default function FloatingIcons() {
    const [positions, setPositions] = useState<Pos[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Generate non-overlapping positions with mobile considerations
    const generateNonOverlappingPositions = useCallback(() => {
        const newPositions: Pos[] = [];
        const minDistance = isMobile ? 120 : 200; // Smaller distance for mobile
        const maxAttempts = 50;

        for (let i = 0; i < icons.length; i++) {
            let attempts = 0;
            let validPosition = false;
            let newPos: Pos;

            while (!validPosition && attempts < maxAttempts) {
                // More conservative positioning for mobile
                const left = isMobile 
                    ? Math.random() * 60 + 20  // 20% to 80% for mobile
                    : Math.random() * 70 + 15; // 15% to 85% for desktop
                const top = isMobile 
                    ? Math.random() * 60 + 20  // 20% to 80% for mobile
                    : Math.random() * 70 + 15; // 15% to 85% for desktop
                
                newPos = {
                    left: `${left}%`,
                    top: `${top}%`
                };

                // Check distance from all existing positions
                validPosition = true;
                for (const existingPos of newPositions) {
                    const existingLeft = parseFloat(existingPos.left);
                    const existingTop = parseFloat(existingPos.top);
                    
                    const distance = Math.sqrt(
                        Math.pow((left - existingLeft) * window.innerWidth / 100, 2) +
                        Math.pow((top - existingTop) * window.innerHeight / 100, 2)
                    );

                    if (distance < minDistance) {
                        validPosition = false;
                        break;
                    }
                }

                attempts++;
            }

            // Fallback positions for mobile
            if (!validPosition) {
                if (isMobile) {
                    const fallbackPositions = [
                        { left: '20%', top: '30%' },
                        { left: '70%', top: '25%' },
                        { left: '45%', top: '70%' }
                    ];
                    newPos = fallbackPositions[i] || { left: `${30 + (i * 20)}%`, top: `${30 + (i * 15)}%` };
                } else {
                    newPos = {
                        left: `${20 + (i * 25)}%`,
                        top: `${20 + (i * 15)}%`
                    };
                }
            }

            newPositions.push(newPos!);
        }

        return newPositions;
    }, [isMobile]);

    useEffect(() => {
        setPositions(generateNonOverlappingPositions());
    }, [generateNonOverlappingPositions]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!positions.length) {
        return null;
    }

    return (
        <div className="absolute inset-0 pointer-events-none">
            {icons.map((icon, i) => {
                const iconSize = isMobile ? icon.size.mobile : icon.size.desktop;
                
                // Calculate distance from mouse to icon
                const iconRect = {
                    x: (window.innerWidth * parseFloat(positions[i].left)) / 100,
                    y: (window.innerHeight * parseFloat(positions[i].top)) / 100
                };
                
                const distance = Math.sqrt(
                    Math.pow(mousePosition.x - iconRect.x, 2) + 
                    Math.pow(mousePosition.y - iconRect.y, 2)
                );
                
                const threshold = isMobile ? 150 : 200; // Smaller threshold for mobile
                const avoidanceStrength = Math.max(0, (threshold - distance) / threshold);
                
                // Calculate mouse avoidance (reduced for mobile)
                const angleToMouse = Math.atan2(
                    mousePosition.y - iconRect.y, 
                    mousePosition.x - iconRect.x
                );
                
                const avoidanceForce = isMobile ? 20 : 30;
                const avoidanceX = -Math.cos(angleToMouse) * avoidanceStrength * avoidanceForce;
                const avoidanceY = -Math.sin(angleToMouse) * avoidanceStrength * avoidanceForce;

                return (
                    <motion.div
                        key={i}
                        className="absolute pointer-events-none"
                        style={{
                            top: positions[i].top,
                            left: positions[i].left,
                            width: iconSize,
                            height: iconSize,
                        }}
                        whileHover={{ 
                            scale: isMobile ? 1.1 : 1.2,
                            rotate: isMobile ? 3 : 5,
                            filter: "drop-shadow(0 5px 15px rgba(59, 130, 246, 0.4))",
                            transition: { type: "tween", duration: 0.3 }
                        }}
                        animate={{
                            x: avoidanceX + (isMobile ? 0 : Math.cos(mousePosition.y * 0.01) * 2),
                            y: avoidanceY + (isMobile ? 0 : Math.sin(mousePosition.x * 0.01) * 2),
                            rotate: isMobile ? 0 : Math.sin(Date.now() * 0.001) * 2,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: isMobile ? 100 : 150,
                            damping: isMobile ? 20 : 25,
                            mass: 1,
                        }}
                    >
                        <motion.div
                            animate={!isMobile ? {
                                rotateY: mousePosition.x ? (mousePosition.x - window.innerWidth/2) * 0.01 : 0,
                                rotateX: mousePosition.y ? (mousePosition.y - window.innerHeight/2) * -0.01 : 0,
                            } : {}}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                            <Image
                                src={icon.src}
                                alt={`floating-icon-${i}`}
                                width={iconSize}
                                height={iconSize}
                                className="opacity-60 sm:opacity-70 hover:opacity-100 transition-all duration-300 hover:brightness-110 select-none pointer-events-none"
                                draggable={false}
                            />
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}