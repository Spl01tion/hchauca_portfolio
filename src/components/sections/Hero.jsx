import { ChevronDown, StarHalf } from 'lucide-react';
import { SiReact, SiNodedotjs, SiJavascript, SiExpress, SiPhp, SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { PERSONAL_INFO } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { useTranslation } from '../../contexts/LanguageContext';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className='relative min-h-screen flex items-center overflow-hidden bg-white'>
            <RadialGradientBackground variant="hero" />

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    {/* Left Column */}
                    <div className='text-left'>
                        <FadeIn delay={0}>
                            <div className='inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 rounded-full border border-primary/20'>
                                <StarHalf className='w-4 h-4 text-black fill-black' />
                                <span className='text-xs md:text-sm font-medium text-black tracking-[1.2px]'>
                                    {t.hero.badgeText}
                                </span>
                            </div>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h1 className='text-4xl md:text-6xl font-normal text-black mb-6 leading-tight'>
                                {t.hero.heading}
                            </h1>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <p className='text-lg text-black/70 max-w-[550px] mb-8'>
                                {t.hero.description}
                            </p>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className='inline-flex items-center gap-0 mb-12 group'
                            >
                                <div className='relative z-10 bg-primary text-white rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-black'>
                                    {t.hero.cta}
                                </div>
                            </button>
                        </FadeIn>
                    </div>

                    {/* Right Column - Image */}
                    <FadeIn delay={200}>
                        <div className='relative'>
                            <div className='relative overflow-hidden rounded-2xl aspect-2/2 max-w-[500px] ml-auto group'>
                                <div className='absolute inset-0 rounded-2xl overflow-hidden'>
                                    <div className='absolute inset-[-2px] bg-linear-to-r from-primary/100 via-primary/40 to primary animate-spin-slow rounded-2xl'></div>
                                </div>
                                <div className='relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]'>
                                    <img
                                        src="image/Profile.jpg"
                                        alt={PERSONAL_INFO.nome}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                {/* Technology Logos */}
                                <div className='absolute bottom-6 left-6 z-20'>
                                    <FadeIn>
                                        <div className='flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3'>
                                            {[
                                                { Icon: SiPhp, color: '#777BB4' },
                                                { Icon: SiJavascript, color: '#F7DF1E' },
                                                { Icon: SiMongodb, color: '#47A248' },
                                                { Icon: SiExpress, color: '#000000' },
                                                { Icon: SiReact, color: '#61DAFB' },
                                                { Icon: SiNodedotjs, color: '#339933' },
                                                { Icon: SiMysql, color: '#4479A1' },
                                                { Icon: SiTailwindcss, color: '#06B6D4' },
                                            ].map(({ Icon, color }) => (
                                                <div key={color} className='w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300'>
                                                    <Icon className='w-full h-full' style={{ color }} />
                                                </div>
                                            ))}
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={() => scrollToSection('about')}
                className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'
            >
                <ChevronDown className='w-10 h-10 text-primary hover:text-black transition-colors' />
            </button>
        </section>
    );
};

export default Hero;
