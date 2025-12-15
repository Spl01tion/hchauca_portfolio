import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const SOCIAL_LINKS = {
    github: 'https://github.com/Spl01tion',
    linkedin: 'https://www.linkedin.com/in/hchauca/',
    email: 'mailto:hericles.chauca25@gmail.com',
    whatsapp: 'https://www.wa.me/+258877087237',
};

const Contact = () => {
    const socialIcons = [
        {
            name: 'GitHub',
            icon: Github,
            link: SOCIAL_LINKS.github,
            color: 'from-gray-700 to-gray-900',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            link: SOCIAL_LINKS.linkedin,
            color: 'from-blue-600 to-blue-700',
        },
        {
            name: 'Email',
            icon: Mail,
            link: SOCIAL_LINKS.email,
            color: 'from-red-500 to-pink-600',
        },
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            link: SOCIAL_LINKS.whatsapp,
            color: 'from-green-500 to-green-600',
        }
    ];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center max-w-4xl">


                {/* Social Icons */}
                <div className="flex justify-center gap-6 md:gap-10">
                    {socialIcons.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className={`
                                    w-16 h-16 md:w-20 md:h-20 rounded-full 
                                    flex items-center justify-center
                                    bg-gradient-to-br ${item.color}
                                    shadow-lg text-white
                                    transition-all duration-300 
                                    hover:scale-110 hover:shadow-xl
                                `}
                            >
                                <Icon className="w-8 h-8 md:w-10 md:h-10" />
                            </a>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Contact;
