import React, { useState } from 'react';
import { Download, Code2, Sparkles } from 'lucide-react';
import { FaJava ,FaLocationDot} from "react-icons/fa6";
import { SiReact, SiNodedotjs, SiLaravel, SiJavascript, SiExpress, SiPhp, SiMysql, SiMongodb, SiWordpress, SiBootstrap } from 'react-icons/si';//Ao importar icones que nao existem o react quebra
import { PERSONAL_INFO } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {

    //Skills
    const skills = [
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'React Native', icon: SiReact, color: '#61DAFB' },
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ];
    <div className=''>

    </div>
    return (
    <section id="about" className='relative py-20 bg-black overflow-hidden text-white'>
        <RadialGradientBackground variant="about" />

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/*Main Grid*/}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>

                {/* Left Column */}
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-8'>
                        <FadeIn delay={60}>
                            <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                                <Code2 className='w-4 h-4 text-primary' />
                                <span className='text-sm text-primary font-medium'>
                                    Full-Stack Developer
                                </span>
                                <Sparkles className='w-4 h-4 text-primary' />
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                                Building Digital Experiences That Inspire
                            </h2>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className='flex flex-col gap-4'>
                                {PERSONAL_INFO.bio.map((paragraph, index) => (
                                    <p key={index} className='text-base text-white/70 leading-relaxed'>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group'
                            >
                                <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />
                                Download CV
                            </button>
                        </FadeIn>

                    </div>
                </div>

                {/* Right Column — TIMELINE */}
 <FadeIn delay={200}>
    <div className="py-10 px-5 relative">
        <div className="relative">
            <div
                className="border-r-4 border-white/20 absolute h-full top-0"
                style={{ left: "9px" }}
            ></div>

            <ul className="list-none m-0 p-0">

                {/* Timeline Item 1 - ISCTEM */}
                <li className="mb-8">
                    <div className="flex group items-center">
                        <div className="bg-gray-800 group-hover:bg-primary z-10 rounded-full border-4 border-black h-5 w-5 flex items-center justify-center transition-all duration-300">
                            <div className="bg-black h-1 w-6"></div>
                        </div>

                        <div className="flex-1 ml-4 z-10 font-medium">
                            <div className="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 w-full px-6 py-4">
                                <div className="flex items-start justify-between flex-wrap gap-2">
                                    <h3 className="font-bold text-white text-xl">
                                        Bachelor's Degree in Computer Engineering
                                    </h3>
                                    <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                                        In Progress
                                    </span>
                                </div>
                                <p className="pb-2 text-sm text-gray-300">
                                    ISCTEM - Higher Institute of Science and Technology of Mozambique
                                </p>
                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                    <span><FaLocationDot/></span> Maputo, Mozambique • 2019 - Present
                                </p>
                                <hr className="border-gray-700" />
                                <p className="text-sm font-medium leading-snug text-gray-400">
                                    Comprehensive program covering software development, system analysis, 
                                    database management, network infrastructure, and modern programming paradigms.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="text-xs bg-primary/10 text-primary/80 px-2 py-1 rounded">
                                        Software Engineering
                                    </span>
                                    <span className="text-xs bg-primary/10 text-primary/80 px-2 py-1 rounded">
                                        Systems Analysis
                                    </span>
                                    <span className="text-xs bg-primary/10 text-primary/80 px-2 py-1 rounded">
                                        Networks
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                {/* Timeline Item 2 - ITC */}
                <li className="mb-8">
                    <div className="flex group items-center">
                        <div className="bg-gray-800 group-hover:bg-primary z-10 rounded-full border-4 border-black h-5 w-5 flex items-center justify-center transition-all duration-300">
                            <div className="bg-black h-1 w-6"></div>
                        </div>

                        <div className="flex-1 ml-4 z-10 font-medium">
                            <div className="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/20 w-full px-6 py-4">
                                <div className="flex items-start justify-between flex-wrap gap-2">
                                    <h3 className="font-bold text-white text-xl">
                                        Computer Systems Technician
                                    </h3>
                                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                                        Completed
                                    </span>
                                </div>
                                <p className="pb-2 text-sm text-gray-300">
                                    ITC - Institute of Transport and Communications
                                </p>
                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                    <span><FaLocationDot/></span> Maputo, Mozambique • 2016 - 2018
                                </p>
                                <hr className="border-gray-700" />
                                <p className="text-sm font-medium leading-snug text-gray-400">
                                    Technical diploma focused on computer systems, hardware maintenance, 
                                    software installation, network configuration, and IT support fundamentals.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                        Hardware
                                    </span>
                                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                        IT Support
                                    </span>
                                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                        Networking
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</FadeIn>

            </div>
        </div>
    </section>
);

};

export default About;