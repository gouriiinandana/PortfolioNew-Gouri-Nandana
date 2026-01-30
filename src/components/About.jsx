import React from 'react';
import { User, Terminal, MapPin, Mail, Phone, ChevronRight, Download, Briefcase, Send } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">Profile</h2>

                <div className="about-grid-layout">

                    {/* Left Column: Intro & Buttons */}
                    <div className="about-intro">
                        <h3 className="greeting">Hi, I'm <span className="name-highlight">Gouri Nandana</span></h3>
                        <p className="role-line">
                            Security Engineer <span className="separator">|</span> Pentester
                        </p>
                        <p className="about-bio">
                            Securing Applications, Cloud Infrastructure, and Digital Assets through Proactive
                            Security Testing and Monitoring.
                        </p>

                        <div className="about-buttons">
                            <a href="/resume.pdf" download="Gouri_Nandana_Resume.pdf" className="btn btn-resume">
                                <Download size={18} /> View Resume
                            </a>
                            <a href="#projects" className="btn btn-outline">
                                <Briefcase size={18} /> View Projects
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                <Send size={18} /> Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Terminal */}
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <div className="window-controls">
                                <span className="control red"></span>
                                <span className="control yellow"></span>
                                <span className="control green"></span>
                            </div>
                            <div className="terminal-title">about_me.sh</div>
                        </div>

                        <div className="terminal-body">
                            <div className="command-line">
                                <span className="prompt">$</span>
                                <span className="command">cat profile.txt</span>
                            </div>

                            <div className="terminal-output">
                                <div className="output-line">
                                    <User size={18} className="term-icon" />
                                    <span className="key">name:</span>
                                    <span className="value">Gouri Nandana</span>
                                </div>

                                <div className="output-line">
                                    <ChevronRight size={18} className="term-icon" />
                                    <span className="key">role:</span>
                                    <span className="value">Security Engineer</span>
                                </div>

                                <div className="output-line">
                                    <MapPin size={18} className="term-icon" />
                                    <span className="key">location:</span>
                                    <span className="value">India</span>
                                </div>

                                <div className="output-line">
                                    <Mail size={18} className="term-icon" />
                                    <span className="key">email:</span>
                                    <a href="mailto:nandanagouri47@gmail.com" className="value link">nandanagouri47@gmail.com</a>
                                </div>

                                <div className="output-line">
                                    <Phone size={18} className="term-icon" />
                                    <span className="key">phone:</span>
                                    <span className="value">+91-9207141944</span>
                                </div>
                            </div>

                            <div className="command-line">
                                <span className="prompt">$</span>
                                <span className="cursor">_</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
