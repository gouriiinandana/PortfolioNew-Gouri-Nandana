import React from 'react';
import { Award, BadgeCheck } from 'lucide-react';
import './Certifications.css';

const certifications = [
    "CEH (ECCouncil)",
    "AWS Certified Cloud Practitioner (AWS)",
    "Ethical Hacker (Cisco)",
    "Blockchain and its Application (NPTEL)",
    "Cybersecurity Fundamentals (IBM)",
    "AWS Solutions Architect- Associate (Ethnus)"
];

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <h2 className="section-title">CERTIFICATIONS</h2>
                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-card">
                            <div className="cert-icon-wrapper">
                                <Award size={24} className="cert-main-icon" />
                            </div>
                            <h3 className="cert-name">{cert}</h3>
                            <div className="cert-footer">
                                <BadgeCheck size={16} className="verified-icon" />
                                <span className="verified-text">Verified</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
