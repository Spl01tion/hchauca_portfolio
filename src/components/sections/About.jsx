import React from 'react';
import { Download, Code2, Sparkles, GraduationCap, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { useTranslation } from '../../contexts/LanguageContext';

const About = () => {
    const { t } = useTranslation();
    const education = t.about.education;

    return (
        <section id="about" className='relative py-20 bg-black overflow-hidden text-white'>
            <RadialGradientBackground variant="about" />

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>

                    {/* Left Column */}
                    <div className='flex flex-col gap-10'>
                        <FadeIn delay={60}>
                            <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                                <Code2 className='w-4 h-4 text-primary' />
                                <span className='text-sm text-primary font-medium'>{t.about.badge}</span>
                                <Sparkles className='w-4 h-4 text-primary' />
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                                {t.about.heading}
                            </h2>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className='flex flex-col gap-4'>
                                {t.about.bio.map((paragraph, index) => (
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
                                {t.about.downloadCV}
                            </button>
                        </FadeIn>
                    </div>

                    {/* Right Column — Education */}
                    <FadeIn delay={200}>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-2.5 mb-2'>
                                <GraduationCap className='w-5 h-5 text-primary' />
                                <h3 className='text-base font-medium text-white/60 uppercase tracking-widest'>
                                    {t.about.educationLabel}
                                </h3>
                            </div>

                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className='bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex flex-col gap-3 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300'
                                >
                                    <h4 className='font-semibold text-white text-lg leading-snug'>{item.degree}</h4>
                                    <p className='text-sm text-white/60'>{item.institution}</p>
                                    <div className='flex items-center gap-1.5 text-xs text-white/40'>
                                        <MapPin className='w-3 h-3' />
                                        {item.location}
                                    </div>
                                    <hr className='border-white/10' />
                                    <p className='text-sm text-white/50 leading-relaxed'>{item.description}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {item.tags.map(tag => (
                                            <span key={tag} className='text-xs bg-primary/10 text-primary/80 px-2.5 py-1 rounded-md'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};

export default About;
