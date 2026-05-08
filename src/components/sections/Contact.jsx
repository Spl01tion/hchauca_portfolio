import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

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

const Contact = () => (
    <section id="contact" className="relative py-24 bg-black overflow-hidden text-white">
        <RadialGradientBackground />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-10">

            {/* Header */}
            <FadeIn delay={60}>
                <div className="flex flex-col items-center gap-5">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Available for Work</span>
                        <Sparkles className="w-4 h-4 text-primary" />
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                        Let's Build Something Together
                    </h2>

                    <p className="text-base text-white/60 leading-relaxed max-w-xl">
                        Have a project in mind or just want to say hi? Feel free to reach out — I'm always open to new opportunities and collaborations.
                    </p>
                </div>
            </FadeIn>

            {/* Email CTA */}
            <FadeIn delay={150}>
                <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="group inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300"
                >
                    <Mail className="w-5 h-5" />
                    {PERSONAL_INFO.email}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
            </FadeIn>

            {/* Divider */}
            <FadeIn delay={200}>
                <div className="flex items-center gap-4 w-full">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-xs text-white/30 uppercase tracking-widest">or find me on</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={250}>
                <div className="flex flex-wrap justify-center gap-3">
                    {socials.map(({ name, handle, icon: Icon, href }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                        >
                            <Icon className="w-4 h-4 text-white/50 group-hover:text-primary transition-colors duration-300" />
                            <div className="flex flex-col items-start">
                                <span className="text-xs text-white/40 leading-none">{name}</span>
                                <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-300 leading-snug">{handle}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </FadeIn>

            {/* Footer note */}
            <FadeIn delay={300}>
                <p className="text-xs text-white/25">
                    Héricles Chaúca · Maputo, Mozambique
                </p>
            </FadeIn>

        </div>
    </section>
);

export default Contact;
