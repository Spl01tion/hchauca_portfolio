import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants';
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handledNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300 ${isScrolled
                ? 'bg-white/30 backdrop-blur-lg'
                : 'bg-transparent'
                } `}
            style={{ transform: 'translate3d(0,0,0)' }}
        >
            <div className='max-w-[1320px] mx-auto px-5'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <div className='flex items-center gap-4'>
                        {/*<Code className='w-6 h-6 text-primary' />*/}
                        <img
                            src="image/logo.png"
                            alt="Logo"
                            className='w-15 h-15 object-contain'
                        />

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className='text-2xl font-bold bg-linear-to-r from-primary via-primary/100 to-primary/40 bg-clip-text text-transparent hover:opacity-100 transition-opacity'
                            aria-label='home'
                        >
                            {PERSONAL_INFO.nome}

                        </button>
                    </div>

                    {/* Desktop Menu/Navigation */}
                    <nav className='hidden md:flex items-center gap-7'>
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handledNavClick(link.id)}
                                className={`text-base font-medium transition-all duration-300 ${activeSection === link.id
                                    ? 'text-black'
                                    : 'text-black/70 hover:text-black'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/*CTA Button */}
                    <div className='hidden md:flex items-center gap-2'>
                        <button
                            onClick={() => handledNavClick('contact')}
                            className='px-7 py-3.5 bg-black text-white rounded-[125px] border border-primary hover:bg-primary/90 font-medium text-base hover:opacity-90 transition-all duration-300'
                        >
                            Let's Work Together
                        </button>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='md:hidden p-4 text-black hover:text-black/80 transition-colors'
                        aria-label='menu'
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}

                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className='bg-white/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3'>
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handledNavClick(link.id)}
                            className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === link.id
                                ? 'bg-black/10 text-black'
                                : 'text-black/70 hover:bg-black/5 hover:text-black'}`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handledNavClick('contact')}
                        className='w-full px-7 py-3.5 bg-black text-white font-medium text-base rounded-[125px] border border-primary hover:bg-primary/90 hover:opacity-90 transition-all duration-300 mt-2'
                    >
                        Let's Work Together
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar