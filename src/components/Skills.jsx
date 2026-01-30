import React from 'react';
import './Skills.css';
import { Shield, Cloud, Search, Terminal } from 'lucide-react';

const skillsData = [
    {
        category: "Application Security",
        icon: Shield,
        skills: ["Web App Penetration Testing", "Mobile App Security (APK/IPA)", "OWASP Top 10", "Auth & Authorization Testing", "API Security Testing"]
    },
    {
        category: "Cloud Security (AWS)",
        icon: Cloud,
        skills: ["EC2, S3, CloudWatch, CloudTrail", "IAM & Access Control Review", "Log Monitoring & Alerting", "Backup Auditing"]
    },
    {
        category: "Security Testing",
        icon: Search,
        skills: ["VAPT", "SAST", "SCA", "Threat Modeling"]
    },
    {
        category: "Tools",
        icon: Terminal,
        skills: ["Kali Linux", "Burp Suite", "Nmap", "OWASP ZAP", "APKTool", "Postman", "AWS Console"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">SKILLS & EXPERTISE</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <category.icon className="skill-icon" size={32} />
                                <h3 className="skill-category-title">{category.category}</h3>
                            </div>
                            <div className="skill-content">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-list-item">
                                        <span className="skill-arrow">▸</span>
                                        <span className="skill-text">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
