import React from 'react';

// The ServiceCard component is defined here to ensure the code is self-contained.
const ServiceCard = ({ icon, title, children, delay }) => (
    <div
        className="flex-1 min-w-[280px] bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        style={{ animationDelay: delay }}
    >
        <div className="flex flex-col items-start mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-500 text-2xl">{icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mt-2">{children}</p>
    </div>
);

const ServicesSection = () => (
    <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Services</h2>
                <p className="text-gray-600 mt-2 max-w-3xl mx-auto">Partnering with us means unlocking a future-ready mindset—where education meets innovation, mentorship fuels growth, and real-world skills pave the path to success.</p>
            </div>
            {/* The layout is updated to ensure all four cards appear on a single line on medium and larger screens. */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                <ServiceCard icon="👥" title="Industry-Experienced Mentors" delay="0ms">Gain insights from mentors with real-world, practical experience in a specific field or sector.</ServiceCard>
                <ServiceCard icon="🌐" title="Customized Programs" delay="100ms">We design educational and training programs tailored to fit the curriculum of every academic stream.</ServiceCard>
                <ServiceCard icon="📦" title="Hands-on Projects" delay="200ms">Connect tools, teams, and workflows with intelligent automation on projects with real deliverables.</ServiceCard>
                <ServiceCard icon="💼" title="Internship Opportunities" delay="300ms">Structured internships giving students hands-on experience and real-world tech skills</ServiceCard>
            </div>
        </div>
    </section>
);

export default ServicesSection;
