'use client';

import React, { useState, useRef, useEffect } from 'react';

interface SplineSceneProps {
    className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ className }) => {
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
    }, []);

    if (isMobile) return null;

    return (
        <div
            className={`w-full h-full min-h-[400px] flex items-center justify-center relative overflow-hidden ${className}`}
        >
            {/* Loading overlay */}
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 backdrop-blur-sm z-50 pointer-events-none">
                    <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-cyan-500 font-mono text-sm animate-pulse uppercase tracking-[0.2em]">
                        Initialising 3D Subsystems...
                    </p>
                </div>
            )}

            {/*
                Spline hosted viewer iframe.
                - The `my.spline.design` URL handles its own auth and WebGL init.
                - `allow` grants the permissions needed by mobile Chrome's stricter
                  feature policy for GPU / sensors inside iframes.
                - `loading="eager"` prevents lazy-load deferral on mobile.
            */}
            <iframe
                ref={iframeRef}
                src="https://my.spline.design/spacetexttransition-cnIX3yp5RpYVhaEpGFynfZKj/"
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
                    // Prevent iframe from blocking page touch-scroll on mobile
                    touchAction: 'pan-y',
                }}
            />

            {/* Hides the Spline watermark on both possible sides (Extra large for all viewports) */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[150px] bg-black z-[100] pointer-events-none select-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[150px] bg-black z-[100] pointer-events-none select-none" />
        </div>
    );
};

export default SplineScene;
