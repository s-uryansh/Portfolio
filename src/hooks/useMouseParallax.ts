import {useEffect, useRef} from 'react';

export function useMouseParallax(multiplier = 0.02){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            const {innerWidth, innerHeight} = window;
            const x = (e.clientX - innerWidth / 2) * multiplier;
            const y = (e.clientY - innerHeight / 2) * multiplier;

            el.style.transform = `translate(${x}px, ${y}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [multiplier]);

    return ref;
}