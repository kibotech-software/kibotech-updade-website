import React from 'react';

const ContactSection = () => (
    <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Let’s Build Together</h2>
                <p className="text-gray-600 mt-2">Schedule a call and let's begin shaping the future workforce. Reach out anytime!</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100 fade-in">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                    </div>
                    <textarea rows="5" className="w-full mt-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us how we can help..."></textarea>
                    <div className="text-center mt-8">
                        <button type="submit" className="btn-primary text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg transform hover:scale-105">Send Message</button>
                    </div>
                </form>
                 <p className="text-center text-gray-600 mt-6">Or email us directly at: <a href="mailto:info@kibotech.in" className="font-medium text-blue-500 hover:underline">info@kibotech.in</a></p>
            </div>
        </div>
    </section>
);

export default ContactSection;