import React, { useRef, useEffect } from 'react';

const BackgroundVideoUrl = "https://res.cloudinary.com/dh4jjre2h/video/upload/v1763855891/background21_erab8v.mp4";

const BgVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;
        videoElement.loop = true;
        
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio < 0.5) {
                    videoElement.pause();
                } else {
                    videoElement.play().catch(error => {
                        console.error("Помилка відтворення фонового відео:", error);
                    });
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: [0.5],
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        observer.observe(videoElement);
        
        return () => {
            observer.unobserve(videoElement);
        };
    }, []);

    return (
        <div className="top-0 left-0 w-screen h-screen 
                        overflow-hidden -z-50 relative 
                        md:w-screen md:h-screen md:relative">
            <video
                ref={videoRef}
                muted
                playsInline
                id="myVideo"
                src={BackgroundVideoUrl}
                type="video/mp4"
                alt="Background video for Home page"
                className='min-w-full min-h-full object-cover'
            >
            </video>
        </div>
    );
}

export default BgVideo;