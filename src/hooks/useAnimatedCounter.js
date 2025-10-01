import { useState, useEffect } from 'react';

export const useAnimatedCounter = (ref, endValue) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                const duration = 2000;
                const startTime = performance.now();

                const animateCount = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const currentCount = Math.floor(progress * endValue);
                    setCount(currentCount);

                    if (progress < 1) {
                        requestAnimationFrame(animateCount);
                    } else {
                        setCount(endValue);
                    }
                };
                requestAnimationFrame(animateCount);
                observer.unobserve(element);
            }
        }, { threshold: 0.5 });

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref, endValue]);

    return count;
};