import React, { useState } from 'react';
import { Code2, Zap, Award, TrendingUp, Database, Globe, Server, Wrench } from 'lucide-react';

// Dados das skills
const skills = [
  {
    id: 1,
    nome: 'Java',
    icon: 'coffee',
    nivel: 'Advanced',
    experiencia: '3+ years',
    categoria: 'Backend'
  },
  {
    id: 2,
    nome: 'JavaScript',
    icon: 'code',
    nivel: 'Intermediate',
    experiencia: '2+ years',
    categoria: 'Frontend'
  },
  {
    id: 3,
    nome: 'PHP',
    icon: 'server',
    nivel: 'Intermediate',
    experiencia: '2+ years',
    categoria: 'Backend'
  },
  {
    id: 4,
    nome: 'Node.js',
    icon: 'server',
    nivel: 'Beginner',
    experiencia: '1+ years',
    categoria: 'Backend'
  },
  {
    id: 5,
    nome: 'React Native',
    icon: 'smartphone',
    nivel: 'Beginner',
    experiencia: '1+ years',
    categoria: 'Mobile'
  },
  {
    id: 6,
    nome: 'React.js',
    icon: 'code',
    nivel: 'Beginner',
    experiencia: '1+ years',
    categoria: 'Frontend'
  },
  {
    id: 7,
    nome: 'MySQL',
    icon: 'database',
    nivel: 'Advanced',
    experiencia: '3+ years',
    categoria: 'Database'
  },
  {
    id: 8,
    nome: 'MongoDB',
    icon: 'database',
    nivel: 'Beginner',
    experiencia: '1+ years',
    categoria: 'Database'
  },
  {
    id: 9,
    nome: 'Express.js',
    icon: 'server',
    nivel: 'Beginner',
    experiencia: '1+ years',
    categoria: 'Backend'
  },
  {
    id: 10,
    nome: 'WordPress',
    icon: 'globe',
    nivel: 'Intermediate',
    experiencia: '2+ years',
    categoria: 'CMS'
  },
  {
    id: 11,
    nome: 'Bootstrap',
    icon: 'layout',
    nivel: 'Intermediate',
    experiencia: '2+ years',
    categoria: 'Frontend'
  },
  {
    id: 12,
    nome: 'Git/GitHub',
    icon: 'git-branch',
    nivel: 'Intermediate',
    experiencia: '2+ years',
    categoria: 'Tools'
  }
];

// Componente SkillCard Compacto
const SkillCard = ({ skill }) => {
  const nivelColors = {
    'Advanced': 'from-green-500 to-emerald-600',
    'Intermediate': 'from-blue-500 to-indigo-600',
    'Beginner': 'from-purple-500 to-pink-600'
  };

  const nivelBadgeColors = {
    'Advanced': 'bg-green-100 text-green-700',
    'Intermediate': 'bg-blue-100 text-blue-700',
    'Beginner': 'bg-purple-100 text-purple-700'
  };

  const nivelPercentage = {
    'Advanced': 90,
    'Intermediate': 65,
    'Beginner': 40
  };

  return (
    <div className="group relative bg-white rounded-lg p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${nivelColors[skill.nivel]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${nivelColors[skill.nivel]} flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
              {skill.nome}
            </h3>
            <p className="text-xs text-gray-500">{skill.experiencia}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-600 font-medium">{skill.nivel}</span>
            <span className="text-gray-900 font-bold">{nivelPercentage[skill.nivel]}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${nivelColors[skill.nivel]} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${nivelPercentage[skill.nivel]}%` }}
            ></div>
          </div>
        </div>

        {/* Category Tag */}
        <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          {skill.categoria}
        </span>
      </div>
    </div>
  );
};

// Componente principal Skills
const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categorias = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'CMS', 'Tools'];

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.categoria === activeFilter);

  // Estatísticas
  const stats = [
    { label: 'Skills', value: skills.length, icon: Code2, color: 'blue' },
    { label: 'Advanced', value: skills.filter(s => s.nivel === 'Advanced').length, icon: Award, color: 'green' },
    { label: 'Intermediate', value: skills.filter(s => s.nivel === 'Intermediate').length, icon: TrendingUp, color: 'indigo' },
    { label: 'Tecnologias', value: categorias.length - 1, icon: Zap, color: 'purple' }
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-400 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full mb-4 border border-blue-100">
            <Zap className="w-5 h-5" />
            <span className="font-semibold text-sm">My Skills</span>
          </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 bg-blue-50',
              green: 'from-green-500 to-emerald-600 bg-green-50',
              indigo: 'from-indigo-500 to-purple-600 bg-indigo-50',
              purple: 'from-purple-500 to-pink-600 bg-purple-50'
            };
            
            return (
              <div 
                key={index}
                className={`${colorClasses[stat.color].split(' ')[1]} rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[stat.color].split(' ')[0]} flex items-center justify-center mb-2 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setActiveFilter(categoria)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                activeFilter === categoria
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Skills Grid - Layout em Grelha Compacta */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma skill encontrada</h3>
            <p className="text-gray-600">Tente selecionar outra categoria</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Skills;