
import React, { useState } from 'react';
import Navbar from './Navbar';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert(`Thank you, ${formData.name}! We will get back to you soon.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <Navbar />
            <div className="contact-content">

                <div className="contact-info">
                    <h1>Get In Touch</h1>
                    <p className="contact-text">
                        Have questions or feedback? We'd love to hear from you. Reach out to our team
                        and we'll help you get the most out of RentLoop.
                    </p>

                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>123 Innovation Drive, Tech City, TC 56789</span>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <span>support@rentloop.com</span>
                    </div>
                  
                </div>

                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="How can we help you?"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
