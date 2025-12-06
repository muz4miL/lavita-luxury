"use client";

import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import './contactForm.css';

// InfoCard component
const InfoCard = ({ icon: Icon, title, content, subtext }) => {
    return (
        <div className="contact-info-card">
            <div className="contact-info-icon-wrapper">
                <Icon size={22} className="contact-info-icon" strokeWidth={1.5} />
            </div>
            <h3 className="contact-info-title">{title}</h3>
            <p className="contact-info-content">{content}</p>
            {subtext && <p className="contact-info-subtext">{subtext}</p>}
        </div>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'Booking',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Thank you! Our concierge will contact you shortly.");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-blend" />

                {/* Noise Texture Overlay */}
                <div
                    className="contact-hero-noise"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    }}
                />

                {/* Background Image with Gradient Overlay */}
                <div className="contact-hero-bg">
                    <div className="contact-hero-bg-overlay" />
                    <img
                        src="/images/corporate.png"
                        alt="Malam Jabba Peaks"
                        className="contact-hero-bg-image"
                    />
                </div>

                {/* Content */}
                <div className="contact-hero-content">
                    <div className="contact-hero-divider">
                        <span className="contact-hero-divider-line-left" />
                        <span className="contact-hero-subtitle">At Your Service</span>
                        <span className="contact-hero-divider-line-right" />
                    </div>

                    <h1 className="contact-hero-title">Contact Us</h1>

                    <p className="contact-hero-description">
                        From customized dome stays to investment inquiries, our team is ready to assist you.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="contact-form-section">
                {/* Noise Texture Overlay */}
                <div
                    className="contact-form-noise"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    }}
                />

                {/* Ambient Glow Effect */}
                <div className="contact-form-glow" />

                <div className="contact-form-container">
                    {/* Form Grid */}
                    <div className="contact-form-grid">
                        {/* LEFT COLUMN - Typography Section */}
                        <div className="contact-form-left">
                            <div className="contact-form-divider-left">
                                <span className="contact-hero-divider-line-left" />
                                <span className="contact-hero-subtitle">At Your Service</span>
                                <span className="contact-hero-divider-line-right" />
                            </div>

                            <h2 className="contact-form-heading">
                                Let's Get In <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Touch</span>
                            </h2>

                            <p className="contact-form-description">
                                Whether you're planning your next alpine retreat, exploring investment opportunities, or simply have questions about The Lavita Experience, our team is here to help.
                            </p>

                            <div className="contact-form-email-link">
                                <a href="mailto:info@lavita.pk">
                                    <div className="contact-form-email-icon">
                                        <Mail className="w-5 h-5" style={{ transform: 'rotate(-45deg)' }} strokeWidth={1.5} />
                                    </div>
                                    <span style={{ fontFamily: 'var(--font-manrope)', fontSize: '1.125rem' }}>info@lavita.pk</span>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="contact-form-inputs">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Full Name"
                                    className="contact-input"
                                    onChange={handleChange}
                                />

                                {/* Email Input */}
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email Address"
                                    className="contact-input"
                                    onChange={handleChange}
                                />

                                {/* Phone Input */}
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Contact Number"
                                    className="contact-input"
                                    onChange={handleChange}
                                />

                                {/* Interest Select */}
                                <select
                                    name="interest"
                                    className="contact-select"
                                    onChange={handleChange}
                                >
                                    <option value="Booking">Booking a Dome</option>
                                    <option value="Invest">Investment</option>
                                    <option value="Event">Corporate Event</option>
                                    <option value="General">General Inquiry</option>
                                </select>

                                {/* Message Textarea */}
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Tell us about your dream stay..."
                                    className="contact-textarea"
                                    onChange={handleChange}
                                ></textarea>

                                {/* Submit Button */}
                                <button type="submit" className="contact-submit-btn flex items-evenly">
                                    Send Message
                                    <Send size={18}/>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="contact-info-grid lg:pt-8">
                        <InfoCard
                            icon={Phone}
                            title="Reservations"
                            content="+92 300 1234567"
                            subtext="Available 24/7 for Bookings"
                        />
                        <InfoCard
                            icon={Mail}
                            title="Concierge"
                            content="info@lavita.pk"
                            subtext="Events & General Inquiries"
                        />
                        <InfoCard
                            icon={MapPin}
                            title="Location"
                            content="Malam Jabba Resort"
                            subtext="Swat Valley, KP, Pakistan"
                        />
                    </div>
                </div>

                {/* Black Vignette at Bottom */}
                <div className="contact-vignette" />
            </section>
        </>
    );
};

export default ContactForm;
