import React, { useState, useEffect } from 'react';
import { Briefcase, Globe, Monitor, Smartphone, LayoutGrid, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { useTranslation } from '../../contexts/LanguageContext';

const CATEGORIES = ['All', 'Web Apps', 'Desktop', 'Mobile Apps'];

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
        image: '/image/projects/BioMusic.png',
        tags: ['WordPress', 'Elementor'],
        link: 'https://biomusic.infinityfreeapp.com/',
    },
    {
        id: 2,
        title: 'AtleChat',
        category: 'Desktop',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
        tags: ['Java', 'Java Sockets'],
        link: 'https://github.com/Spl01tion/AtleChat/tree/atlechat_v1/AtleChat',
    },
    {
        id: 3,
        title: 'BookStore ISCTEM',
        category: 'Mobile Apps',
        image: '/image/projects/Books_page.jpg',
        tags: ['MongoDB', 'Express.js', 'React Native', 'Node.js', 'REST API'],
        link: 'https://github.com/Spl01tion/bookstore-isctem',
    },
    {
        id: 4,
        title: "SJCWork's Website",
        category: 'Web Apps',
        image: '/image/projects/sss.png',
        tags: ['JavaScript', 'PHP', 'REST API', 'Bootstrap', 'phpMyAdmin'],
        link: 'https://sjcworks.infinityfreeapp.com/',
    },
    {
        id: 5,
        title: 'Play Kids Rainha',
        category: 'Web Apps',
        image: '/image/projects/plk.png',
        tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'PHP', 'Swiper.js', 'AOS'],
        link: 'https://playkidsrainha.pt/',
    },
    {
        id: 6,
        title: 'Power Clean Rainha',
        category: 'Web Apps',
        image: '/image/projects/pcr.png',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP 8', 'AOS', 'Swiper.js'],
        link: 'https://powercleanrainha.com/',
    },
    {
        id: 7,
        title: 'Lawyer Portfolio',
        category: 'Web Apps',
        image: '/image/projects/lawyerportfolio.png',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'SPA'],
        link: 'https://lawyerportfolio.infinityfree.me',
    },
    {
        id: 8,
        title: 'SJCMídia Blog',
        category: 'Web Apps',
        image: '/image/projects/sjcmidia_blog.png',
        tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
        link: 'https://sjcmidia.infinityfreeapp.com/',
    },
    {
        id: 9,
        title: 'GoodDevs - IT Services',
        category: 'Web Apps',
        image: '/image/projects/gooddevs.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'ScrollTrigger'],
        link: null,
    },
    {
        id: 10,
        title: 'MaxaPark',
        category: 'Web Apps',
        images: [
            '/image/projects/maxapark_home.png',
            '/image/projects/maxapark_admin.png',
        ],
        tags: ['PHP 8.2', 'MySQL', 'Bootstrap 5', 'JavaScript'],
        link: 'https://github.com/Spl01tion/MaxaPark.git',
    },
];

const getThumb = (p) => p.images?.[0] ?? p.image;

const ProjectImageSlider = ({ project }) => {
    const images = project.images ?? [project.image];
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        setImgIndex(0);
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setImgIndex(i => (i + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [project.id]);

    return (
        <div className="relative h-64 md:h-auto overflow-hidden">
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === imgIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            <span className="absolute top-4 left-4 text-xs bg-black/50 text-white/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                {project.category}
            </span>
            {images.length > 1 && (
                <div className="absolute bottom-4 right-4 flex gap-1.5">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 rounded-full transition-all duration-500 ${i === imgIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const { t } = useTranslation();

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const safeIndex = Math.min(currentIndex, Math.max(0, filtered.length - 1));
    const project = filtered[safeIndex];

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory]);

    const navigate = (newIndex) => {
        if (fading || filtered.length <= 1) return;
        setFading(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setFading(false);
        }, 180);
    };

    const prev = () => navigate((safeIndex - 1 + filtered.length) % filtered.length);
    const next = () => navigate((safeIndex + 1) % filtered.length);

    if (!project) return null;

    return (
        <section id="projects" className="relative py-24 bg-white overflow-hidden">
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <FadeIn delay={60}>
                    <div className="flex flex-col items-center text-center gap-5 mb-16">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">{t.projects.badge}</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                            {t.projects.heading}
                        </h2>
                        <p className="text-base text-gray-500 max-w-xl">
                            {t.projects.description}
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={120}>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {CATEGORIES.map(category => {
                            const Icon = categoryIcons[category];
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? 'bg-primary text-white shadow-sm'
                                            : 'bg-gray-50 border border-gray-200 text-gray-500 hover:border-primary/30 hover:text-gray-900'
                                    }`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    {t.projects.filter[category]}
                                </button>
                            );
                        })}
                    </div>
                </FadeIn>

                {/* Carousel */}
                <FadeIn delay={200}>

                    {/* Main Card */}
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-opacity duration-180 ${fading ? 'opacity-0' : 'opacity-100'}`}
                        style={{ minHeight: '400px' }}
                    >
                        <ProjectImageSlider project={project} />

                        {/* Details side */}
                        <div className="p-8 flex flex-col gap-5 bg-white">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                                    {project.title}
                                </h3>
                                <span className="text-xs text-gray-300 font-mono shrink-0 mt-1 select-none">
                                    {String(safeIndex + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(filtered.length).padStart(2, '0')}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 leading-relaxed flex-1">
                                {t.projects.descriptions[project.id]}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary/80 hover:text-primary transition-all duration-300 group w-fit pt-1 border-t border-gray-100"
                                >
                                    {t.projects.viewProject}
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6 px-1">
                        <button
                            onClick={prev}
                            disabled={filtered.length <= 1}
                            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-primary/40 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dot indicators */}
                        <div className="flex items-center gap-1.5">
                            {filtered.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => navigate(i)}
                                    aria-label={`Project ${i + 1}`}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        i === safeIndex
                                            ? 'w-6 bg-primary'
                                            : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            disabled={filtered.length <= 1}
                            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-primary/40 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Thumbnail strip */}
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
                        {filtered.map((p, i) => (
                            <button
                                key={p.id}
                                onClick={() => navigate(i)}
                                className={`shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                    i === safeIndex
                                        ? 'border-primary opacity-100'
                                        : 'border-transparent opacity-40 hover:opacity-70'
                                }`}
                                aria-label={p.title}
                            >
                                <img
                                    src={getThumb(p)}
                                    alt={p.title}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;
