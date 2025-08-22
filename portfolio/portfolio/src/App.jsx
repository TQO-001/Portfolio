import './App.css'
import React, { useEffect, useRef } from 'react';
import './MainBackground.css';
import Button from './components/Button';
import Navbar from './components/Navbar';

const icons = {
  download: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.120-.942a6.001 6.001 0 0 0-11.903 0l-.120.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" />
    </svg>
  ),
  contact: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path fill="currentColor" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
    </svg>
  ),
  // Add more icons as needed
};

function App() {
    const particlesRef = useRef(null);
    const spheresRef = useRef([]);

    useEffect(() => {
        const particlesContainer = particlesRef.current;
        const particleCount = 80;

        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            resetParticle(particle);
            particlesContainer.appendChild(particle);
            animateParticle(particle);
        }

        function resetParticle(particle) {
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;

            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = '0';

            return { x: posX, y: posY };
        }

        function animateParticle(particle) {
            const pos = resetParticle(particle);

            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;

            setTimeout(() => {
                particle.style.transition = `all ${duration}s linear`;
                particle.style.opacity = Math.random() * 0.3 + 0.1;

                const moveX = pos.x + (Math.random() * 20 - 10);
                const moveY = pos.y - Math.random() * 30;

                particle.style.left = `${moveX}%`;
                particle.style.top = `${moveY}%`;

                setTimeout(() => {
                    animateParticle(particle);
                }, duration * 1000);
            }, delay * 1000);
        }

        const handleMouseMove = (e) => {
            const mouseX = (e.clientX / window.innerWidth) * 100;
            const mouseY = (e.clientY / window.innerHeight) * 100;

            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            particle.style.left = `${mouseX}%`;
            particle.style.top = `${mouseY}%`;
            particle.style.opacity = '0.6';

            particlesContainer.appendChild(particle);

            setTimeout(() => {
                particle.style.transition = 'all 2s ease-out';
                particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
                particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
                particle.style.opacity = '0';

                setTimeout(() => {
                    particle.remove();
                }, 2000);
            }, 10);

            const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
            const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

            spheresRef.current.forEach(sphere => {
                sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="main-background">
          <Navbar />
            <div className="gradient-background">
              {/* Uncomment if you want to add gradient spheres
                <div className="gradient-sphere sphere-1" ref={el => spheresRef.current[0] = el}></div>
                <div className="gradient-sphere sphere-2" ref={el => spheresRef.current[1] = el}></div>
                <div className="gradient-sphere sphere-3" ref={el => spheresRef.current[2] = el}></div>
              */}
                <div className="glow"></div>
                {/* Uncomment if you want to add grid and noise overlays
                  <div className="grid-overlay"></div>
                  <div className="noise-overlay"></div>
                */}
                <div className="particles-container" ref={particlesRef}></div>
            </div>

            <div className="content-container">
                <h1>Thulani Langa</h1>
                <p className='quote'>If we believe in nothing, if nothing has any meaning and if we can affirm no values whatsoever, then everything is possible and nothing has any importance.</p>
                <div className="button-container">
                  <Button icon={icons.download} text="Download CV" href="#"/>
                  <Button icon={icons.contact} text="Contact Me" />
                </div>
            </div>
        </div>
    );
};

export default App
