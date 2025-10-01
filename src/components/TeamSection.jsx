import React from 'react';
import Icon from './Icon';

const TeamSection = () => {
    const teamMembers = [
        { name: "Dr. Sara Shuttari", title: "Executive Director", img: "/assets/t2.jpg" },
        { name: "Syed Rashid Shuttari", title: "Managing Director", img: "/assets/t1.jpg" },
        // { name: "G. Krishna Raju", title: "Chief Technology Officer", img: "https://placehold.co/400x400/c7f9cc/333333?text=G.KR" },
    ];
    return (
        <section id="team" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Leadership</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The driving force behind our innovative solutions and student-focused programs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={member.name} className="team-card bg-white rounded-lg shadow-lg overflow-hidden text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" style={{ transitionDelay: `${index * 100}ms` }}>
                            <img src={member.img} alt={member.name} className="w-full h-64 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-blue-500 font-semibold">{member.title}</p>
                                {/* <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-200">
                                    <a href="#" className="text-gray-400 hover:text-blue-500"><Icon name="twitter"/></a>
                                    <a href="#" className="text-gray-400 hover:text-blue-500"><Icon name="linkedin"/></a>
                                    <a href="#" className="text-gray-400 hover:text-blue-500"><Icon name="github"/></a>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;