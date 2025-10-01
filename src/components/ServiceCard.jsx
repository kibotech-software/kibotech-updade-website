import React, { useRef, useEffect } from 'react';
import Icon from './Icon';

const ServiceCard = ({ icon, title, delay, children }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            const rotateX = (y - 0.5) * -20;
            const rotateY = (x - 0.5) * 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div ref={cardRef} className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 ease-out fade-in" style={{ transitionDelay: delay }}>
            <div className="bg-blue-100 text-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Icon name={icon} className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    );
};

export default ServiceCard;