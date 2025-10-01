import React from 'react';
import StatItem from './StatItem';

const StatisticsSection = () => {
    const stats = [
        { icon: 'award', endValue: 150, label: 'Projects Completed' },
        { icon: 'smile', endValue: 95, label: 'Happy Clients (%)' },
        { icon: 'bar-chart-2', endValue: 1200000, label: 'Lines of Code' }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => <StatItem key={index} {...stat} />)}
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;