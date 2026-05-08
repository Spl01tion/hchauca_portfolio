import React, { useState } from 'react';
import { Briefcase, Globe, Monitor, Smartphone, LayoutGrid, ArrowUpRight } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const categories = ['All', 'Web Apps', 'Desktop', 'Mobile Apps'];

const categoryIcons = {
    'All': LayoutGrid,
    'Web Apps': Globe,
    'Desktop': Monitor,
    'Mobile Apps': Smartphone,
};

const projects = [
    {
        id: 1,
        title: 'BioMusic',
        category: 'Web Apps',
        description: 'Artistic website presenting the works, biography and portfolio of a musical artist.',
        image: '/image/projects/BioMusic.png',
        tags: ['WordPress', 'Elementor'],
        link: 'https://biomusic.infinityfreeapp.com/',
    },
    {
        id: 2,
        title: 'AtleChat',
        category: 'Desktop',
        description: 'Java chat application with socket-based communication enabling real-time messaging between users on the same network.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
        tags: ['Java', 'Java Sockets'],
        link: 'https://github.com/Spl01tion/AtleChat/tree/atlechat_v1/AtleChat',
    },
    {
        id: 3,
        title: 'BookStore ISCTEM',
        category: 'Mobile Apps',
        description: 'Mobile and web application for managing remote access to the ISCTEM library book catalogue.',
        image: '/image/projects/Books_page.jpg',
        tags: ['MongoDB', 'Express.js', 'React Native', 'Node.js', 'REST API'],
        link: 'https://github.com/Spl01tion/bookstore-isctem',
    },
    {
        id: 4,
        title: "SJCWork's Website",
        category: 'Web Apps',
        description: 'Photographer personal website with photo gallery, blog and contact form. Admin panel for managing posts and content.',
        image: '/image/projects/sss.png',
        tags: ['JavaScript', 'PHP', 'REST API', 'Bootstrap', 'phpMyAdmin'],
        link: 'https://sjcworks.infinityfreeapp.com/',
    },
];

const ProjectCard = ({ project }) => (
    <div className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
        <div className="relative h-52 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            <span className="absolute top-3 left-3 text-xs bg-black/50 text-white/70 border border-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                {project.category}
            </span>
        </div>

        <div className="flex flex-col gap-3 p-5 flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                {project.title}
            </h3>

            <p className="text-sm text-white/55 leading-relaxed flex-1">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/5 text-white/50 px-2 py-1 rounded-md border border-white/10">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="pt-2 border-t border-white/10">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="relative py-24 bg-black overflow-hidden text-white">
            <RadialGradientBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <FadeIn delay={60}>
                    <div className="flex flex-col items-center text-center gap-5 mb-16">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">My Work</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                            Featured Projects
                        </h2>

                        <p className="text-base text-white/60 max-w-xl">
                            A selection of projects I've built across web, desktop and mobile.
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={120}>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map(category => {
                            const Icon = categoryIcons[category];
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? 'bg-primary text-white'
                                            : 'bg-white/5 border border-white/10 text-white/60 hover:border-primary/30 hover:text-white'
                                    }`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </FadeIn>

                {/* Projects Grid */}
                <FadeIn delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filtered.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default Projects;
