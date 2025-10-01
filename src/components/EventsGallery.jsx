import React, { useState, useEffect, useCallback } from 'react';

// Animation styles remain the same
const animationStyles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
.animate-slide-up {
  animation: slideUp 0.4s ease-out forwards;
}
`;

// Data structure with 6 albums, each with 4 photos
const albums = [
    {
        title: "Ace 2.O NIMINS",
        coverSrc: "/assets/ace event 1.jpg",
        images: [
            {src: "/assets/ace event 2.jpg", title: "Interactive Workshop", description: "Students engaging in a hands-on coding workshop with our industry mentors."},
            {src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop", title: "Leadership Training", description: "An interactive session focused on developing leadership and soft skills."},
            {src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop", title: "Project Planning", description: "A team of students brainstorming and planning their project on a whiteboard."},
            {src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop", title: "Late Night Coding", description: "Dedicated students working hard to meet their project deadlines."},
        ]
    },
    {
        title: "DEET Telangana",
        coverSrc: "/assets/deet 2.JPG",
        images: [
            {src: "/assets/deet 1.JPG", title: "Winners Announcement", description: "Celebrating the innovative solutions developed by students during our annual hackathon."},
            {src: "https://images.unsplash.com/photo-1606232698188-d25a1a14c62b?q=80&w=1470&auto=format&fit=crop", title: "Intense Coding", description: "A participant deeply focused on their code during the hackathon."},
            {src: "https://images.unsplash.com/photo-1587825140708-df876c12b4bf?q=80&w=1471&auto=format&fit=crop", title: "Team Pitch", description: "A team presenting their hackathon project to the judges."},
            {src: "https://images.unsplash.com/photo-1594717527351-681944512c58?q=80&w=1470&auto=format&fit=crop", title: "Judges Panel", description: "The panel of industry experts listening intently to a project pitch."},
        ]
    },
    {
        title: "Emerging Business Analytics ",
        coverSrc: "/assets/avinesh event 2.jpg",
        images: [
            {src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop", title: "Expert Industry Talk", description: "An engaging session with a guest speaker from a leading tech company."},
             {src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop", title: "Audience Q&A", description: "Students asking insightful questions during the Q&A session."},
             {src: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=1470&auto=format&fit=crop", title: "Keynote Speaker", description: "The keynote speaker delivering a powerful and inspiring message."},
             {src: "https://images.unsplash.com/photo-1543269664-7e944c6d5d53?q=80&w=1470&auto=format&fit=crop", title: "Panel Discussion", description: "A lively panel discussion with experts from various fields."},
        ]
    },
    {
        title: "The 4i Seminar",
        coverSrc: "/assets/k inaugration 1.jpg",
        images: [
            {src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop", title: "Final Project Demonstrations", description: "Students presenting their final projects and real-world deliverables."},
            {src: "https://images.unsplash.com/photo-1556740738-b6a63e2775d2?q=80&w=1470&auto=format&fit=crop", title: "Live App Demo", description: "A student demonstrating a live application they built."},
            {src: "https://images.unsplash.com/photo-1591115765322-c4a014b4ed10?q=80&w=1470&auto=format&fit=crop", title: "Receiving Feedback", description: "Getting valuable feedback from instructors and peers."},
            {src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop", title: "Poster Presentations", description: "Showcasing project details through a poster presentation."},
        ]
    },
    {
        title: "Personality Development",
        coverSrc: "/assets/rdvrr 1.JPG",
        images: [
            {src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop", title: "Student Networking Event", description: "A vibrant event connecting students with professionals and peers."},
            {src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop", title: "Career Fair", description: "Connecting with top companies and recruiters at our annual career fair."},
            {src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop", title: "Making Connections", description: "Students making valuable connections for their future careers."},
            {src: "https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=1470&auto=format&fit=crop", title: "Professional Headshots", description: "Getting professional headshots taken at the networking event."},
        ]
    },
    {
        title: "The Upcoming Events ",
        coverSrc: "/assets/cyber s 1.jpg",
        images: [
            {src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop", title: "Certificate Distribution", description: "Honoring the hard work and dedication of our successful interns."},
            {src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop", title: "Award Winners", description: "Recognizing outstanding achievements during the ceremony."},
            {src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1470&auto=format&fit=crop", title: "Graduation Day", description: "Celebrating the successful completion of the program."},
            {src: "https://images.unsplash.com/photo-1594717527351-681944512c58?q=80&w=1470&auto=format&fit=crop", title: "Guest of Honor", description: "Our guest of honor addressing the graduates."},
        ]
    }
];

const EventsGallery = () => {
    const [activeAlbumIndex, setActiveAlbumIndex] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false); // State to pause slideshow on hover

    const openModal = (albumIndex) => {
        setActiveAlbumIndex(albumIndex);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setActiveAlbumIndex(null);
    };

    const showNextImage = useCallback((e) => {
        if (e) e.stopPropagation();
        if (activeAlbumIndex === null) return;
        const album = albums[activeAlbumIndex];
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % album.images.length);
    }, [activeAlbumIndex]);

    const showPrevImage = useCallback((e) => {
        if (e) e.stopPropagation();
        if (activeAlbumIndex === null) return;
        const album = albums[activeAlbumIndex];
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + album.images.length) % album.images.length);
    }, [activeAlbumIndex]);

    // Effect for automatic slideshow
    useEffect(() => {
        if (activeAlbumIndex !== null && !isPaused) {
            const timer = setInterval(() => {
                showNextImage();
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(timer);
        }
    }, [activeAlbumIndex, currentImageIndex, isPaused, showNextImage]);

    // Effect for keyboard controls
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeModal();
            else if (event.key === 'ArrowRight') showNextImage();
            else if (event.key === 'ArrowLeft') showPrevImage();
        };

        if (activeAlbumIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeAlbumIndex, showNextImage, showPrevImage]);

    const modalContent = activeAlbumIndex !== null ? albums[activeAlbumIndex].images[currentImageIndex] : null;

    return (
        <>
            <style>{animationStyles}</style>
            <section id="events" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Events in Action</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Glimpses from our career-focused workshops, hackathons, and mentorship sessions.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {albums.map((album, index) => (
                            <div 
                                key={index} 
                                className="group relative overflow-hidden rounded-xl cursor-pointer h-72"
                                onClick={() => openModal(index)}
                            >
                                <img src={album.coverSrc} alt={album.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="text-white text-xl font-bold">{album.title}</h3>
                                    <p className="text-white/80 text-sm">View Gallery</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {modalContent && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 animate-fade-in" 
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div 
                        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden animate-slide-up" 
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <button 
                            onClick={showPrevImage} 
                            className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-white/70 text-black rounded-full h-10 w-10 flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors z-20"
                            aria-label="Previous image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>

                        <img src={modalContent.src} alt={modalContent.title} className="w-full md:w-2/3 object-cover max-h-[80vh]" />
                        <div className="p-6 flex flex-col justify-center">
                            <h3 id="modal-title" className="text-2xl font-bold text-gray-800 mb-2">{modalContent.title}</h3>
                            <p className="text-gray-600">{modalContent.description}</p>
                        </div>
                        
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 bg-white/80 text-black rounded-full h-10 w-10 flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors z-20"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <button 
                            onClick={showNextImage} 
                            className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-white/70 text-black rounded-full h-10 w-10 flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors z-20"
                            aria-label="Next image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default EventsGallery;

