import React from 'react';
import './Hero.css';
import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-container">
                <div className="hero-bg-item" style={{ backgroundImage: `url(${hero1})` }}></div>
                <div className="hero-bg-item" style={{ backgroundImage: `url(${hero2})` }}></div>
                <div className="hero-bg-item" style={{ backgroundImage: `url(${hero3})` }}></div>
            </div>

            <div className="hero-overlay"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span>GOURI</span>
                        <span>NANDANA</span>
                    </h1>
                    <div className="hero-subtitle">
                        SECURITY ENGINEER
                    </div>
                </div>

                <div className="scroll-indicator">
                    <a href="#about" className="scroll-circle">
                        <span>SCROLL</span>
                        <span className="arrow">↓</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
