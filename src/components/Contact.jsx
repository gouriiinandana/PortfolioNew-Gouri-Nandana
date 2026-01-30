import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState({ message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setFeedback({ message: '', type: '' });

        const SERVICE_ID = 'service_n0q5ffc';
        const TEMPLATE_ID = 'template_2f93cui';
        const PUBLIC_KEY = 'x2-MbeGVqSCp1Fjbz';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
            .then(() => {
                setFeedback({ message: 'Message sent successfully!', type: 'success' });
                setIsSending(false);
                form.current.reset();
            }, (error) => {
                setFeedback({ message: 'Failed to send message. Please try again.', type: 'error' });
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">GET IN TOUCH</h2>
                <div className="contact-grid">

                    {/* Contact Info Card */}
                    <div className="contact-card info-card">
                        <h3 className="card-title">Let's Connect</h3>
                        <p className="card-desc">
                            Interested in working together or have a question?
                            Feel free to reach out.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className="label">Email</span>
                                    <a href="mailto:nandanagouri47@gmail.com" className="value">nandanagouri47@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className="label">Phone</span>
                                    <span className="value">+91-9207141944</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span className="label">Location</span>
                                    <span className="value">Kochi, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="contact-card form-card">
                        <form ref={form} className="contact-form" onSubmit={sendEmail}>
                            <div className="form-group">
                                <label className="form-label">Your Name</label>
                                <input type="text" name="user_name" className="form-input" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Your Email</label>
                                <input type="email" name="user_email" className="form-input" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea name="message" rows="5" className="form-input" placeholder="Hello, I'd like to discuss..." required></textarea>
                            </div>

                            <button type="submit" className="btn-send" disabled={isSending}>
                                {isSending ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} className="send-icon" />
                                    </>
                                )}
                            </button>

                            {feedback.message && (
                                <div className={`feedback-msg ${feedback.type}`}>
                                    {feedback.message}
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
