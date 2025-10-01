import React from 'react';
import Icon from './Icon';

const MissionVisionSection = () => (
    <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                    <div className="flex items-center text-blue-500 mb-4">
                        <Icon name="target" className="w-10 h-10 mr-4"/>
                        <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                    </div>
                    <p className="text-gray-600 text-lg">To be a trusted technology partner recognized for delivering innovative websites, applications, and software solutions that empower businesses to grow in the digital era. We aim to drive digital transformation by creating scalable, secure, and future-ready solutions that make a lasting impact.</p>
                </div>
                <div className="fade-in" style={{ transitionDelay: '150ms' }}>
                     <div className="flex items-center text-cyan-500 mb-4">
                         <Icon name="eye" className="w-10 h-10 mr-4"/>
                         <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                    </div>
                    <p className="text-gray-600 text-lg">At Kibotech, our mission is to design and develop cutting-edge websites, applications, and software projects that combine creativity, functionality, and scalability. We aim to provide reliable digital solutions that help businesses achieve efficiency, growth, and long-term success.</p>
                </div>
            </div>
        </div>
    </section>
);

export default MissionVisionSection;