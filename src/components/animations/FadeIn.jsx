import React, { useEffect, useRef, useState } from "react";

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Trigger animation when the element is visible
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before reaching the element
            }
        );

        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, isVisible]);

    return (
        <div 
            ref={elementRef}
            className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
            style={{
                animationDelay: isVisible ? `${delay}ms` : '0ms',
                animationDuration: `${duration}ms`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    );
}

export default FadeIn;