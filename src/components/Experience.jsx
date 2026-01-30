import React from 'react';
import './Experience.css';
import { Building, MapPin, Calendar, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Cloud Security Consultant / Security Engineer",
        company: "GKS Infotech Pvt Ltd",
        location: "Kochi, India",
        period: "May 2025 – Present",
        isCurrent: true,
        desc: [
            "Conduct vulnerability assessment and penetration testing (VAPT) on web and mobile applications (APK & IPA)",
            "Identify, validate, and document security vulnerabilities with remediation guidance",
            "Monitor AWS cloud environments using CloudWatch and CloudTrail",
            "Perform data backup auditing and security compliance checks",
            "Collaborate with DevOps teams to improve cloud security posture"
        ]
    },
    {
        title: "Cybersecurity Intern",
        company: "Cyber Cell Police Station",
        location: "Kochi, Kerala",
        period: "Internship",
        isCurrent: false,
        desc: [
            "Worked on secure file storage using hybrid cryptography",
            "Assisted in security analysis and documentation",
            "Gained exposure to real-world cybercrime investigations"
        ]
    },
    {
        title: "Project Coordinator Intern",
        company: "JIITAK Inc.",
        location: "Kochi, Kerala",
        period: "Internship",
        isCurrent: false,
        desc: [
            "Coordinated app development projects between Japanese and Indian teams",
            "Tracked requirements, tasks, and quality checks",
            "Supported sustainability-focused system development"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">EXPERIENCE</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-card-container"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-marker">
                                <div className={`timeline-dot ${exp.isCurrent ? 'current' : ''}`}></div>
                                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
                            </div>

                            <div className="experience-card">
                                <h3 className="exp-role">{exp.title}</h3>

                                <div className="exp-meta">
                                    <div className="exp-company-row">
                                        <Building size={16} className="exp-icon" />
                                        <span className="exp-company">{exp.company}</span>
                                    </div>
                                    <div className="exp-location-row">
                                        <MapPin size={16} className="exp-icon" />
                                        <span>{exp.location}</span>
                                    </div>
                                    <div className="exp-date-row">
                                        <Calendar size={16} className="exp-icon" />
                                        <span>{exp.period}</span>
                                        {exp.isCurrent && <span className="current-badge">Current</span>}
                                    </div>
                                </div>

                                <div className="exp-divider"></div>

                                <ul className="exp-details-list">
                                    {exp.desc.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
