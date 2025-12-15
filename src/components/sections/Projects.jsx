import React, { useState, useRef } from 'react';
import { Briefcase, Target, Globe, Computer, TabletSmartphone, ChevronLeft, ChevronRight } from 'lucide-react';

// Dados de exemplo
const categories = ['All', 'Web Apps', 'Desktop', 'Mobile Apps'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Apps',
    description: 'Plataforma completa de e-commerce com painel administrativo',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Manager Desktop',
    category: 'Desktop',
    description: 'Aplicativo desktop para gestão de tarefas e produtividade',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    tags: ['Electron', 'React', 'SQLite'],
    link: '#'
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    category: 'Mobile Apps',
    description: 'App mobile para rastreamento de exercícios e nutrição',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase'],
    link: '#'
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    category: 'Web Apps',
    description: 'Dashboard interativo para análise de dados em tempo real',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'D3.js', 'API REST'],
    link: '#'
  },
  {
    id: 5,
    title: 'Video Editor Pro',
    category: 'Desktop',
    description: 'Editor de vídeo profissional com recursos avançados',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    tags: ['C++', 'Qt', 'FFmpeg'],
    link: '#'
  }
];

// Componente ProjectCard
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3">
          {project.category}
        </span>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link}
          className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
        >
          Ver Projeto
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Componente FadeIn (simplificado)
const FadeIn = ({ children, delay = 0 }) => {
  return (
    <div 
      className="animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  const categoryIcons = {
    'All': Target,
    'Web Apps': Globe,
    'Desktop': Computer,
    'Mobile Apps': TabletSmartphone,
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold text-sm">My Work</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Showcasing my best work and achievements
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'text-white'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-blue-600 shadow-lg shadow-blue-600/50'
                        : 'bg-white border border-gray-200 group-hover:border-blue-300 group-hover:shadow-md'
                    }`}
                  ></div>
                  
                  <div className="relative flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{category}</span>
                  </div>
                  
                  {activeCategory === category && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-blue-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Carousel */}
        <FadeIn delay={200}>
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-6 pb-4" style={{ minWidth: 'min-content' }}>
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
                    style={{ minWidth: '300px' }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredProjects.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 z-10"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                
                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - 3}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 z-10"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}

            {/* Navigation Dots */}
            {filteredProjects.length > 3 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.max(0, filteredProjects.length - 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'bg-blue-600 w-8 h-2'
                        : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;