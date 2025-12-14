import { useState } from 'react';
import { ChevronDown, Star, StarHalf } from 'lucide-react';
import { SiReact, SiNodedotjs, SiLaravel, SiJavascript, SiExpress, SiPhp, SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si';//Ao importar icones que nao existem o react quebra
import { PERSONAL_INFO } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
    return (

        <section className='relative min-h-screen flex items-center overflow-hidden bg-white'>
            <RadialGradientBackground variant="hero" />

            {/* Hero Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    {/*Left Column */}
                    <div className='text-left'>
                        <FadeIn delay={0}>
                            <div className='inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 rounded-full border border-primary/20'>
                                <StarHalf className='w-4 h-4 text-black fill-black' />
                                <span className='text-xs md:text-sm font-medium text-black tracking-[1.2px]'>
                                    {PERSONAL_INFO.titulo} | Local: {PERSONAL_INFO.local}
                                </span>
                            </div>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h1 className='text-4xl md:text-6xl font-normal text-black mb-6 leading-tight'>
                                Full Stack Developer
                            </h1>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <p className='text-lg text-black/70 max-w-[550px] mb-8'>
                                Dedicated to developing robust, scalable web applications using PHP and the MERN stack (MongoDB, Express.js, React.js, Node.js) and relational databases, with a focus on delivering exceptional user experiences.
                            </p>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className='inline-flex items-center gap-0 mb-12 group'
                            >
                                <div className='relative z-10 bg-primary text-white rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-black'>
                                    Start a Project
                                </div>
                            </button>
                        </FadeIn>
                    </div>

                    {/*Right Column - Image */}
                    <FadeIn delay={200}>
                        <div className='relative'>
                            <div className='relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group'>
                                <div className='absolute inset-0 transform group-hover:scale-105 transition-transform duration-500'>
                                    <div className=''></div>
                                </div>

                                {/* Placeholder for Hero Image */}
                                <div className=''>
                                    <img
                                        src="image/logo.png"
                                        alt="Logo"
                                        className='w-15 h-15 object-contain'
                                    />

                                </div>

                                {/*Technology Logos*/}
                                <div className=''>
                                    <FadeIn>
                                        <div className=''>
                                            <div className=''>
                                                <SiPhp className='w-8 h-8 text-[#777BB4] inline-block m-2' />
                                            </div>
                                            <div className=''>
                                                <SiJavascript className='w-8 h-8 text-[#F7DF1E] inline-block m-2' />
                                            </div>
                                            <div className=''>
                                                <SiMongodb className='w-8 h-8 text-[#47A248] inline-block m-2' />
                                            </div>
                                            <div className=''>
                                                <SiExpress className='w-8 h-8 text-[#000000] inline-block m-2' />
                                            </div>
                                            <div className=''>
                                                <SiReact className='w-8 h-8 text-[#61DAFB] inline-block m-2' />
                                            </div>
                                            <div className=''>
                                                <SiNodedotjs className='w-8 h-8 text-[#339933] inline-block m-2' />
                                            </div>
                                            <div className=''>
                                                <SiMysql className='w-8 h-8 text-[#4479A1] inline-block m-2' />
                                            </div>
                                            <div className=''>
                                                <SiTailwindcss className='w-8 h-8 text-[#06B6D4] inline-block m-2' />
                                            </div>

                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </FadeIn>


                </div>
            </div>
        </section>
    );
}

export default Hero