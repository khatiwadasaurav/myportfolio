// DoodleBackground.tsx
import React, { useEffect, useRef } from 'react';
import {futuristicDoodle} from "./doodle-background.tsx";

const DoodleBackgroundAnimated: React.FC = () => {
    const doodleRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (doodleRef.current) {
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;
                doodleRef.current.style.setProperty('--mx', x.toString());
                doodleRef.current.style.setProperty('--my', y.toString());
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <css-doodle ref={doodleRef}>{futuristicDoodle}</css-doodle>
        </div>
    );
};

export default DoodleBackgroundAnimated;