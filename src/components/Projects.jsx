import React from 'react';
import './Projects.css';
import { Wifi, Activity, Lock, Cloud, ShieldCheck, Globe, Github } from 'lucide-react';

const projects = [
    {
        title: "OpenWRT Integrated Raspberry Pi Router",
        category: "Network Security",
        desc: "Designed and deployed a custom router using OpenWRT on Raspberry Pi. Implemented VPN, firewall rules for traffic control and network stability.",
        tech: ["Raspberry Pi", "OpenWRT", "Python"],
        icon: Wifi,
        githubUrl: "https://github.com/EDBOZY/OpenWRT-RaspberryPi-VPN-Router.git"
    },
    {
        title: "Swift Help (Hospital Management)",
        category: "Full Stack Development",
        desc: "Built a blood bank platform to streamline donor-recipient interactions. Integrated real-time inventory monitoring and automated replenishment.",
        tech: ["React", "ExpressJS", "NodeJS", "MongoDB"],
        icon: Activity
    },
    {
        title: "Secure Cloud Storage (Hybrid Crypto)",
        category: "Cloud Security",
        desc: "Architected a secure cloud storage solution using hybrid cryptography. Integrated dynamic key rotation and multi-layered encryption.",
        tech: ["Cryptography", "Cloud", "Security"],
        icon: Lock
    },
    {
        title: "AWS Cloud Monitoring & Security",
        category: "Cloud Security",
        desc: "Implemented log monitoring and alerts using CloudWatch & CloudTrail and reviewed IAM permissions and access control.",
        tech: ["AWS", "CloudWatch", "IAM"],
        icon: Cloud
    },
    {
        title: "Mobile Application VAPT",
        category: "VAPT",
        desc: "Conducted static and dynamic analysis of Android APKs. Reviewed permissions, hardcoded secrets, and insecure storage.",
        tech: ["APKTool", "MobSF", "Android"],
        icon: ShieldCheck
    },
    {
        title: "Web Application VAPT",
        category: "VAPT",
        desc: "Identified vulnerabilities based on OWASP Top 10. Provided exploitation proof-of-concepts and mitigation steps.",
        tech: ["Burp Suite", "OWASP ZAP", "Web Security"],
        icon: Globe
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">PROJECTS</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <project.icon className="project-icon" size={24} />
                                <span className="project-category-badge">{project.category}</span>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>

                            <div className="project-tech-tags">
                                {project.tech.map((tag, idx) => (
                                    <span key={idx} className="tech-tag">{tag}</span>
                                ))}
                            </div>

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link"
                                    aria-label="View on GitHub"
                                >
                                    <Github size={20} />
                                    <span>View Repository</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
