import React from 'react';

const TechStackSection = () => {
    const technologies = [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Amazon AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ];
    return (
        <section id="tech" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Technology We Use</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We leverage modern, robust technologies to build scalable and efficient solutions.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center fade-in">
                    {technologies.map((tech, index) => (
                        <div key={tech.name} className="flex flex-col items-center p-4 rounded-lg transition-transform transform hover:scale-110" style={{ transitionDelay: `${index * 100}ms` }}>
                            <img src={tech.icon} alt={tech.name} className="h-16 w-16 mb-4"/>
                            <p className="font-semibold text-gray-700">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;