import React, { useRef } from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import Icon from './Icon';

const StatItem = ({icon, endValue, label}) => {
    const countRef = useRef(null);
    const animatedCount = useAnimatedCounter(countRef, endValue);

    return (
        <div className="fade-in">
            <Icon name={icon} className="w-12 h-12 mx-auto mb-4"/>
            <p ref={countRef} className="text-5xl font-extrabold">
                {animatedCount.toLocaleString()}{label.includes('%') && '%'}
            </p>
            <p className="text-blue-200 text-lg mt-2">{label}</p>
        </div>
    );
};

export default StatItem;