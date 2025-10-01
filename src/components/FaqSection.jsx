import React, { useState } from 'react';
import Icon from './Icon';

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
         { q: "What services does Kibotech provide?", a: "We specialize in developing websites, mobile and desktop applications, and custom software solutions tailored to meet your business needs." },
        { q: "What kind of internships do you offer?", a: "We offer internships across various domains including software development, data science, AI/ML, cloud computing, and UI/UX design. All programs are designed in collaboration with academic institutions." },
        { q: "Are the programs suitable for all academic streams?", a: "Yes! Our core strength is creating customized programs that align with the specific curriculum and learning objectives of any academic stream, from computer science to mechanical engineering." },
        { q: "Do students work on real projects?", a: "Absolutely. We believe in learning by doing. All interns work on projects with real-world applications and tangible deliverables, mentored by industry professionals." },
        { q: "How do you partner with colleges?", a: "We collaborate directly with colleges to integrate our internship programs into their curriculum. We handle the training, mentorship, and project management. Please contact us to discuss a partnership." },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 py-4 fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
                            <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left">
                                <span className="text-lg font-medium text-gray-800">{faq.q}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <Icon name={openIndex === index ? 'minus' : 'plus'} className="text-blue-500"/>
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <p className="pt-4 text-gray-600">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;