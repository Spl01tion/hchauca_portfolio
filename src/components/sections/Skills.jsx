import React from 'react';
import { Code2, Server, Database, Smartphone, Wrench, Monitor } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const skillGroups = [
    {
        category: 'Languages',
        icon: Code2,
        skills: [
            { name: 'Java', level: 'Advanced', years: '3+ yrs' },
            { name: 'JavaScript', level: 'Intermediate', years: '2+ yrs' },
            { name: 'PHP', level: 'Intermediate', years: '2+ yrs' },
        ],
    },
    {
        category: 'Frontend',
        icon: Monitor,
        skills: [
            { name: 'React.js', level: 'Learning', years: '1+ yrs' },
            { name: 'Bootstrap', level: 'Intermediate', years: '2+ yrs' },
            { name: 'Tailwind CSS', level: 'Learning', years: '1+ yrs' },
        ],
    },
    {
        category: 'Backend',
        icon: Server,
        skills: [
            { name: 'Node.js', level: 'Learning', years: '1+ yrs' },
            { name: 'Express.js', level: 'Learning', years: '1+ yrs' },
            { name: 'REST APIs', level: 'Intermediate', years: '2+ yrs' },
        ],
    },
    {
        category: 'Database',
        icon: Database,
        skills: [
            { name: 'MySQL', level: 'Advanced', years: '3+ yrs' },
            { name: 'MongoDB', level: 'Learning', years: '1+ yrs' },
        ],
    },
    {
        category: 'Mobile',
        icon: Smartphone,
        skills: [
            { name: 'React Native', level: 'Learning', years: '1+ yrs' },
        ],
    },
    {
        category: 'Tools & CMS',
        icon: Wrench,
        skills: [
            { name: 'Git / GitHub', level: 'Intermediate', years: '2+ yrs' },
            { name: 'WordPress', level: 'Intermediate', years: '2+ yrs' },
        ],
    },
];

const levelDot = {
    Advanced: 'bg-green-500',
    Intermediate: 'bg-primary',
    Learning: 'bg-gray-300',
};

const Skills = () => (
    <section id="skills" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <FadeIn delay={60}>
                <div className="flex flex-col items-center text-center gap-5 mb-16">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full">
                        <Code2 className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Technical Skills</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                        My Skill Set
                    </h2>

                    <p className="text-base text-gray-500 max-w-xl">
                        Technologies and tools I use to build modern applications.
                    </p>

                    {/* Legend */}
                    <div className="flex items-center gap-6 mt-1">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs text-gray-400">Advanced</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-xs text-gray-400">Intermediate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gray-300" />
                            <span className="text-xs text-gray-400">Learning</span>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Skill Groups */}
            <div className="flex flex-col divide-y divide-gray-100">
                {skillGroups.map((group, i) => {
                    const Icon = group.icon;
                    return (
                        <FadeIn key={group.category} delay={150 + i * 70}>
                            <div className="py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">

                                {/* Category label */}
                                <div className="flex items-center gap-2.5 sm:w-44 shrink-0">
                                    <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">{group.category}</span>
                                </div>

                                {/* Skill pills */}
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map(skill => (
                                        <div
                                            key={skill.name}
                                            className="group flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${levelDot[skill.level]} shrink-0`} />
                                            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{skill.name}</span>
                                            <span className="text-xs text-gray-400">{skill.years}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </FadeIn>
                    );
                })}
            </div>

        </div>
    </section>
);

export default Skills;
