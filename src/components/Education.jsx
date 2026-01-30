import React from 'react';
import './Education.css';
import { BookOpen, GraduationCap } from 'lucide-react';

const educationData = [
    {
        degree: "B.Tech – Computer Science Engineering",
        specialization: "Specialization: Cybersecurity & Digital Forensics",
        university: "VIT Bhopal University",
        year: "2021 - 2025",
        status: "Graduated"
    }
];

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">EDUCATION</h2>
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="edu-header">
                                <GraduationCap size={32} className="edu-icon" />
                                <span className="edu-year">{edu.year}</span>
                            </div>

                            <h3 className="edu-degree">{edu.degree}</h3>
                            <p className="edu-spec">{edu.specialization}</p>
                            <div className="edu-uni-row">
                                <BookOpen size={16} className="uni-icon" />
                                <span className="edu-uni">{edu.university}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
