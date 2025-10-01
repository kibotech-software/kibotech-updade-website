import React from 'react';
import { useState, useEffect, useRef } from 'react';

const AnimatedHeroBackground = () => {
    const mountRef = useRef(null);
    const [threeLoaded, setThreeLoaded] = useState(false);

    useEffect(() => {
        if (window.THREE) {
            setThreeLoaded(true);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        script.onload = () => setThreeLoaded(true);
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                document.body.removeChild(script);
            }
        };
    }, []);


    useEffect(() => {
        if (!threeLoaded) return;

        const THREE = window.THREE;
        const currentMount = mountRef.current;
        if (!currentMount) return;
        
        let frameId;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 1, 1000);
        camera.position.z = 100;
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);

        const lines = [];
        const lineCount = 50;
        const lineSegments = 50;

        for (let i = 0; i < lineCount; i++) {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array((lineSegments + 1) * 3);
            
            for (let j = 0; j <= lineSegments; j++) {
                positions[j * 3] = 0;
                positions[j * 3 + 1] = 0;
                positions[j * 3 + 2] = 0;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const material = new THREE.LineBasicMaterial({
                color: Math.random() > 0.5 ? 0x64ffda : 0x4A90E2,
                transparent: true,
                opacity: 0.3 + Math.random() * 0.3
            });
            
            const line = new THREE.Line(geometry, material);
            line.position.set(
                (Math.random() - 0.5) * 200,
                100,
                (Math.random() - 0.5) * 100
            );
            line.userData.velocity = -1 - Math.random();
            scene.add(line);
            lines.push(line);
        }

        const mouse = new THREE.Vector2(0, 0);
        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        const onResize = () => {
            if (!currentMount) return;
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };
        window.addEventListener('resize', onResize);

        const clock = new THREE.Clock();
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            lines.forEach(line => {
                line.position.y += line.userData.velocity;
                if(line.position.y < -100) {
                    line.position.y = 100;
                    line.position.x = (Math.random() - 0.5) * 200;
                }

                const positions = line.geometry.attributes.position.array;
                const headY = line.position.y;
                const headX = line.position.x;

                for (let j = 0; j <= lineSegments; j++) {
                    const y = headY - (j * 0.5);
                    const sway = Math.sin(y * 0.1 + time) * 2;
                    positions[j * 3] = headX + sway;
                    positions[j * 3 + 1] = y;
                    positions[j * 3 + 2] = line.position.z;
                }
                line.geometry.attributes.position.needsUpdate = true;
            });

            camera.position.x += (mouse.x * 20 - camera.position.x) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        
        animate();

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
            if (frameId) cancelAnimationFrame(frameId);
            if (currentMount && renderer.domElement && currentMount.contains(renderer.domElement)) {
               currentMount.removeChild(renderer.domElement);
            }
        };
    }, [threeLoaded]);

    return <div ref={mountRef} id="hero-canvas" className="absolute top-0 left-0 w-full h-full z-0"></div>;
};

export default AnimatedHeroBackground;