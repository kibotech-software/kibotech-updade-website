import React, { useState, useEffect } from 'react';
import Icon from './Icon';

const Header = () => {
    // ... same code as in your original file
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);

            const sections = document.querySelectorAll('section[id]');
            let current = 'home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });
            setActiveLink(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#mission', label: 'Our Mission' },
        { href: '#tech', label: 'Technology' },
        { href: '#team', label: 'Team' },
        { href: '#events', label: 'Events' },
        { href: '#contact', label: 'Contact' },
    ];

    const NavLink = ({ href, label }) => (
        <a href={href} className={`nav-link text-gray-600 hover:text-blue-500 font-medium ${activeLink === href.substring(1) ? 'active' : ''}`}>
            {label}
        </a>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isSticky ? 'shadow-lg' : 'shadow-md'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#home" className="text-2xl font-bold text-gray-800">Kibo<span className="text-blue-500">Tech</span></a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => <NavLink key={link.href} {...link} />)}
                    </nav>
                    <a href="#contact" className="hidden md:block btn-primary text-white px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl">Contact Us</a>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        <Icon name="menu" className="text-gray-700" />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    {navLinks.map(link => (
                        <a href={link.href} key={link.href} onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 text-gray-700 hover:bg-gray-100">{link.label}</a>
                    ))}
                    <div className="p-4">
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center block btn-primary text-white px-5 py-3 rounded-full hover:bg-blue-600 transition duration-300">Contact Us</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;