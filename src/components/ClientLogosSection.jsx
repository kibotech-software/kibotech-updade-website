import React from 'react';

const ClientLogosSection = () => {
    const logos = [
        "https://logo.clearbit.com/google.com",
        "https://logo.clearbit.com/microsoft.com",
        "https://logo.clearbit.com/amazon.com",
        "https://logo.clearbit.com/slack.com",
        "https://logo.clearbit.com/spotify.com",
        "https://logo.clearbit.com/salesforce.com",
        "https://logo.clearbit.com/netflix.com",
        "https://logo.clearbit.com/dropbox.com",
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 text-center">
                 <h3 className="text-sm font-bold uppercase text-gray-500 tracking-widest mb-8">TRUSTED BY TOP COMPANIES & INSTITUTIONS</h3>
                 <div className="relative w-full overflow-hidden">
                     <div className="flex animate-marquee">
                         {[...logos, ...logos].map((logo, index) => (
                             <div key={index} className="flex-shrink-0 w-48 flex items-center justify-center mx-8">
                                 <img 
                                     src={logo} 
                                     alt={`client logo ${index}`} 
                                     className="max-h-12 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100" 
                                     onError={(e) => { e.target.style.display = 'none'; }} // Hide broken images
                                 />
                             </div>
                         ))}
                     </div>
                 </div>
            </div>
        </section>
    );
};

export default ClientLogosSection;