import React from 'react';

const Icon = ({ name, ...props }) => {
    const icons = {
        menu: <path d="M3 12h18M3 6h18M3 18h18" />,
        users: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />,
        grid: <path d="M10 3H3v7h7V3zm11 0h-7v7h7V3zm-11 11H3v7h7v-7zm11 0h-7v7h7v-7z" />,
        codesandbox: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />,
        'check-circle': <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />,
        twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
        linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />,
        github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
        x: <path d="M18 6L6 18M6 6l12 12" />,
        'trending-up': <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />,
        'edit-3': <path d="M12 20h9" />,
        rocket: <path d="M4.18 4.18a2 2 0 0 0 0 2.83L7 9.83l-4.88 4.88a2 2 0 0 0 2.83 2.83L9.83 12l2.83 2.83a2 2 0 0 0 2.83 0l4.88-4.88-2.83-2.83-4.88 4.88a2 2 0 0 0-2.83 0L4.18 4.18z" />,
        plus: <line x1="12" y1="5" x2="12" y2="19" />,
        minus: <line x1="5" y1="12" x2="19" y2="12" />,
        'server': <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />,
        'database': <ellipse cx="12" cy="5" rx="9" ry="3" />,
        target: <circle cx="12" cy="12" r="10" />,
        eye: <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />,
        award: <circle cx="12" cy="8" r="7" />,
        'bar-chart-2': <line x1="18" y1="20" x2="18" y2="10" />,
        'smile': <circle cx="12" cy="12" r="10" />,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            {icons[name]}
            {name === 'check-circle' && <polyline points="22 4 12 14.01 9 11.01" />}
            {name === 'linkedin' && <rect x="2" y="9" width="4" height="12" />}
            {name === 'linkedin' && <circle cx="4" cy="4" r="2" />}
            {name === 'edit-3' && <path d="M22 11l-2 2-7 7H9v-4l7-7 2-2z" />}
            {name === 'rocket' && <path d="M22 2L11 13" />}
            {name === 'plus' && <line x1="5" y1="12" x2="19" y2="12" />}
            {name === 'server' && <line x1="2" y1="14" x2="22" y2="14" />}
            {name === 'database' && <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />}
            {name === 'database' && <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />}
            {name === 'target' && <circle cx="12" cy="12" r="6" />}
            {name === 'target' && <circle cx="12" cy="12" r="2" />}
            {name === 'eye' && <circle cx="12" cy="12" r="3" />}
            {name === 'award' && <polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88" />}
            {name === 'bar-chart-2' && <line x1="12" y1="20" x2="12" y2="4" />}
            {name === 'bar-chart-2' && <line x1="6" y1="20" x2="6" y2="14" />}
            {name === 'smile' && <path d="M8 14s1.5 2 4 2 4-2 4-2" />}
            {name === 'smile' && <line x1="9" y1="9" x2="9.01" y2="9" />}
            {name === 'smile' && <line x1="15" y1="9" x2="15.01" y2="9" />}
        </svg>
    );
};

export default Icon;