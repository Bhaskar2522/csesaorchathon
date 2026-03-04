'use client';

import React, { useState, useRef, useEffect } from 'react';

interface SplineModelProps {
    scene: string;       // Use the my.spline.design viewer URL
    className?: string;
}

const SplineModel: React.FC<SplineModelProps> = ({ scene, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default to true for SSR safety
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Mobile Detection and Fallback: mark as loaded after 6s in case onLoad doesn't fire on mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        const fallback = setTimeout(() => setIsLoaded(true), 6000);
        return () => {
            clearTimeout(fallback);
            window.removeEventListener('resize', checkMobile);
        };
    }, [scene]);

    if (isMobile) return null;

    return (
        <div
            className={`w-full h-full relative overflow-hidden ${className}`}
        >
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/10 backdrop-blur-sm z-50 pointer-events-none">
                    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            <iframe
                ref={iframeRef}
                src={scene}
                frameBorder="0"
                loading="eager"
                allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking; fullscreen"
                allowFullScreen
                onLoad={() => setIsLoaded(true)}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 1s ease',
                    touchAction: 'pan-y',
                }}
            />

            {/* Logo Masking Overlay (Extra large for all viewports) */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[150px] bg-black z-[100] pointer-events-none select-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[150px] bg-black z-[100] pointer-events-none select-none" />
        </div>
    );
};

export default SplineModel;
