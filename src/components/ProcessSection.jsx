import React from 'react';
import Icon from './Icon';

const ProcessSection = () => {
    const processSteps = [
        { icon: 'trending-up', title: '1. Discover & Plan', description: 'We work with you to understand your goals and curriculum to create a tailored internship plan.' },
        { icon: 'edit-3', title: '2. Design & Develop', description: 'Our team designs hands-on projects and workshops that align with industry standards and student needs.' },
        { icon: 'rocket', title: '3. Launch & Grow', description: 'We launch the program, provide continuous mentorship, and track student progress for future success.' }
    ];

    return (
        <section id="process" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Proven Process</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">A streamlined approach to ensure impactful learning and career readiness.</p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center fade-in" style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="relative inline-block">
                                    <div className="bg-blue-500 text-white rounded-full w-24 h-24 flex items-center justify-center mb-6 mx-auto shadow-lg">
                                        <Icon name={step.icon} className="w-12 h-12"/>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;