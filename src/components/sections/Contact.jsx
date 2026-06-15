import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MessageCircle, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import { useTranslation } from '../../contexts/LanguageContext';

const socials = [
    {
        name: 'GitHub',
        handle: '@Spl01tion',
        icon: Github,
        href: SOCIAL_LINKS.github,
    },
    {
        name: 'LinkedIn',
        handle: 'hchauca',
        icon: Linkedin,
        href: SOCIAL_LINKS.linkedin,
    },
    {
        name: 'WhatsApp',
        handle: '+258 877 087 237',
        icon: MessageCircle,
        href: SOCIAL_LINKS.whatsapp,
    },
];

const Contact = () => {
    const [time, setTime] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        const updateTime = () => {
            const maputoTime = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Africa/Maputo',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }).format(new Date());
            setTime(maputoTime);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="contact" className="relative py-24 bg-white overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

                    {/* Left column */}
                    <div className="flex flex-col gap-8">
                        <FadeIn delay={60}>
                            <div className="flex flex-col gap-5">
                                <div className="inline-flex w-fit items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm text-primary font-medium">{t.contact.badge}</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                                    {t.contact.headingLine1}<br />
                                    {t.contact.headingLine2}<br />
                                    <span className="text-gray-300">{t.contact.headingAccent}</span>
                                </h2>

                                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                                    {t.contact.description}
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={150}>
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg">
                                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                    <span className="text-xs text-gray-500">{t.contact.location}</span>
                                </div>
                                {time && (
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg">
                                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                                        <span className="text-xs text-gray-500">{time} CAT</span>
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-4">
                        <FadeIn delay={200}>
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="group w-full flex items-center justify-between px-6 py-5 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-white/70" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 mb-0.5">{t.contact.sendEmail}</p>
                                        <p className="text-sm font-medium text-white">{PERSONAL_INFO.email}</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                        </FadeIn>

                        <FadeIn delay={240}>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px bg-gray-200" />
                                <span className="text-xs text-gray-400 uppercase tracking-widest">{t.contact.orConnect}</span>
                                <div className="flex-1 h-px bg-gray-200" />
                            </div>
                        </FadeIn>

                        <div className="flex flex-col gap-2">
                            {socials.map(({ name, handle, icon: Icon, href }, i) => (
                                <FadeIn key={name} delay={280 + i * 60}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                                                <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 mb-0.5">{name}</p>
                                                <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{handle}</p>
                                            </div>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                    </a>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>

                <FadeIn delay={460}>
                    <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400">
                            © {new Date().getFullYear()} {PERSONAL_INFO.nome} · {t.contact.location}
                        </p>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default Contact;
