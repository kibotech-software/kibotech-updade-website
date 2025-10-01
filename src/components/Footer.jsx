import React from 'react';

// A simple Icon component to render the social media icons
const Icon = ({ name }) => {
    // A mapping of icon names to their corresponding SVG paths or characters.
    // In a real application, you would use a proper icon library.
    const icons = {
        instagram: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
        ),
        twitter: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-twitter-bird">
                <path d="M22.46 6c-.77.34-1.6.5-2.46.5A4.33 4.33 0 0 0 18.5 4a4.33 4.33 0 0 0-4.33 4.33V9c-4.72 0-8.91-2.52-11.5-6.32C-.48 4.41.05 6.13.9 7.7c-.55.15-1.07.27-1.6.38a4.33 4.33 0 0 0 3.46 4.25c-.27.08-.54.12-.8.12a4.33 4.33 0 0 0-.6 0c.93 2.9 3.65 5.02 6.88 5.48-3.04 2.38-6.84 3.6-11.08 3.6-.72 0-1.42-.04-2.12-.11a14.71 14.71 0 0 0 7.91 2.32c9.5 0 14.67-7.87 14.67-14.67 0-.22 0-.44-.01-.66.8-.57 1.49-1.28 2.05-2.07z"/>
            </svg>
        ),
        linkedin: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
            </svg>
        )
    };
    
    return icons[name] || null;
};

const Footer = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold mb-4">Kibo<span className="text-blue-400">Tech</span></h3>
                    <p className="text-gray-400">Specialized in Building and Delivering Software Projects.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="#tech" className="text-gray-400 hover:text-white">Technology</a></li>
                        <li><a href="#team" className="text-gray-400 hover:text-white">Team</a></li>
                        <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Contact</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a className="hover:text-white">+91 89198 50920</a></li>
                        <li><a href="mailto:info@kibotech.in" className="hover:text-white">info@kibotech.in</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        {/* The Instagram link has been updated */}
                        <a href="https://www.instagram.com/kibotech.in" className="text-gray-400 hover:text-white"><Icon name="instagram" /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Icon name="twitter" /></a>
                        <a href="https://www.linkedin.com/in/kibo-tech-480189381/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BCqCfxT5GRw2Wqyla9T9nQg%3D%3D" className="text-gray-400 hover:text-white"><Icon name="linkedin" /></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Address</h4>
                    <a href="https://maps.app.goo.gl/z7XA1tfwXZSdoyPC6" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-gray-400 hover:text-white hover:underline">
                        2nd Floor, Sai Towers, beside Sri Chaitanya School, Adarsh Nagar, Hyderabad, Telangana 500048
                    </a>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
                <p>© {new Date().getFullYear()} KiboTech. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
