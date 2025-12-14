import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";


const ScrollReveal = (
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 500
) => {

    const {ref,isVisible} = useScrollReveal({threshold:0.1});

    const animationClasses={
        fadeUp:'opacity-0 translate-y-8',
        fadeIn:'opacity-0',
        slideInLeft:'opacity-0 -translate-x-12',
        slideInRight:'opacity-0 translate-x-12',
        scaleIn:'opacity-0 scale-90'
    };

    const visibleClasses= 'opacity-100 translate-y-0 translate-x-0 scale-100';

    return (
        <div
            ref={ref}
            className={`transition-all ease-out ${isVisible ? visibleClasses : animationClasses[animation]}`}
            style={{
                transitionDuration:`${duration}ms`,
                trasitionDelay:`${delay}ms`
            }}
        >
            {children}

        </div>
    );
}

export default ScrollReveal;