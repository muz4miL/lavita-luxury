"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

// InfoCard component
const InfoCard = ({ icon: Icon, title, content, subtext, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-midnight-pine/40 border border-white/10 p-8 backdrop-blur-md hover:border-brushed-copper/50 hover:shadow-[0_0_30px_rgba(200,155,123,0.2)] transition-all duration-500 group hover:-translate-y-2"
        >
            {/* Diamond Icon Container - Mountain Peak Aesthetic */}
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rotate-45 border border-white/10 group-hover:border-brushed-copper/40 transition-all duration-300">
                <Icon size={22} className="text-brushed-copper -rotate-45 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            </div>

            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-alabaster-mist mb-3">{title}</h3>
            <p className="font-[family-name:var(--font-manrope)] text-alabaster-mist/90 text-lg mb-1">{content}</p>
            {subtext && <p className="font-[family-name:var(--font-manrope)] text-sm text-brushed-copper/80 mt-2 font-light tracking-wide">{subtext}</p>}
        </motion.div>
    );
};

const ContactForm = () => {
    const heroRef = useRef(null);
    const sectionRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
    const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'Booking',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // API logic would go here
        console.log("Form Submitted", formData);
        alert("Thank you! Our concierge will contact you shortly.");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Animation variants
    const heroTextVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.4 + (custom * 0.1),
                ease: [0.16, 1, 0.3, 1],
            }
        })
    };

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.2 + (custom * 0.15),
                ease: [0.16, 1, 0.3, 1],
            }
        })
    };

    const formVariant = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    };

    return (
        <>
            {/* Override browser autofill styles */}
            <style jsx>{`
                input:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus,
                input:-webkit-autofill:active {
                    -webkit-box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.3) inset !important;
                    -webkit-text-fill-color: #f5f3f0 !important;
                    transition: background-color 5000s ease-in-out 0s;
                    caret-color: #f5f3f0 !important;
                }
            `}</style>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-[45vh] w-full overflow-hidden flex items-center justify-center bg-midnight-pine"
            >
                {/* Seamless blend from previous section */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />


                {/* Noise Texture Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    }}
                />

                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-midnight-pine/80 via-midnight-pine/60 to-midnight-pine/40 z-10" />
                    <img
                        src="/images/corporate.png"
                        alt="Malam Jabba Peaks"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>

                {/* Content with Framer Motion */}
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-5 mb-5">
                        <span className="w-10 h-px opacity-60" style={{ background: 'linear-gradient(90deg, transparent 0%, var(--brushed-copper) 100%)' }} />
                        <span className="font-[family-name:var(--font-manrope)] text-[0.6875rem] tracking-[0.25em] uppercase text-[var(--brushed-copper)] font-semibold">At Your Service</span>
                        <span className="w-10 h-px opacity-60" style={{ background: 'linear-gradient(90deg, var(--brushed-copper) 0%, transparent 100%)' }} />
                    </div>

                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={heroTextVariants}
                        className="font-[family-name:var(--font-playfair)] md:text-[2.75rem] lg:text-[2.75rem] text-alabaster-mist mb-6 leading-tight"
                    >
                        Contact Us
                    </motion.h1>

                    <motion.p
                        custom={2}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={heroTextVariants}
                        className="font-[family-name:var(--font-manrope)] text-base md:text-lg text-alabaster-mist/70 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        From customized dome stays to investment inquiries, our team is ready to assist you.
                    </motion.p>
                </div>
            </section>

            {/* Form Section */}
            <section
                ref={sectionRef}
                className="relative pb-12 px-6 md:px-12 bg-midnight-pine overflow-hidden"
            >
                {/* Noise Texture Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    }}
                />

                {/* Ambient Glow Effect */}
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brushed-copper/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Split Layout Grid - Form Section */}
                    <div className="grid pt-16 grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-12">

                        {/* LEFT COLUMN - Typography Section */}
                        <div className="space-y-6 lg:pr-8 pb-32">
                            <div className="flex items-center justify-start gap-5 mb-5">
                                <span className="w-10 h-px opacity-60" style={{ background: 'linear-gradient(90deg, transparent 0%, var(--brushed-copper) 100%)' }} />
                                <span className="font-[family-name:var(--font-manrope)] text-[0.6875rem] tracking-[0.25em] uppercase text-[var(--brushed-copper)] font-semibold">At Your Service</span>
                                <span className="w-10 h-px opacity-60" style={{ background: 'linear-gradient(90deg, var(--brushed-copper) 0%, transparent 100%)' }} />
                            </div>

                            <motion.h2
                                custom={1}
                                initial="hidden"
                                animate={sectionInView ? "visible" : "hidden"}
                                variants={textVariants}
                                className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-alabaster-mist leading-[1.1]"
                            >
                                Let's Get In{' '}
                                <span className="text-white/90">Touch</span>
                            </motion.h2>

                            <motion.p
                                custom={2}
                                initial="hidden"
                                animate={sectionInView ? "visible" : "hidden"}
                                variants={textVariants}
                                className="font-[family-name:var(--font-manrope)] text-alabaster-mist/70 text-base md:text-lg font-light leading-relaxed max-w-lg"
                            >
                                Whether you're planning your next alpine retreat, exploring investment opportunities, or simply have questions about The Lavita Experience, our team is here to help.
                            </motion.p>

                            <motion.div
                                custom={3}
                                initial="hidden"
                                animate={sectionInView ? "visible" : "hidden"}
                                variants={textVariants}
                                className="pt-4"
                            >
                                <a
                                    href="mailto:info@lavita.pk"
                                    className="group inline-flex items-center gap-3 text-brushed-copper hover:text-[#d4a98a] transition-colors duration-300"
                                >
                                    <div className="w-10 h-10 rotate-45 border border-brushed-copper/30 flex items-center justify-center group-hover:border-brushed-copper/60 transition-all duration-300">
                                        <Mail className="w-5 h-5 -rotate-45" strokeWidth={1.5} />
                                    </div>
                                    <span className="font-[family-name:var(--font-manrope)] text-lg">info@lavita.pk</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN - Form */}
                        <motion.div
                            initial="hidden"
                            animate={sectionInView ? "visible" : "hidden"}
                            variants={formVariant}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input - Pill Shaped */}
                                <div className="group">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Full Name"
                                        className="w-full bg-black/20 border border-white/10 rounded-full px-6 py-4 text-alabaster-mist placeholder:text-white/30 focus:outline-none focus:border-brushed-copper focus:bg-black/30 transition-all duration-300 font-[family-name:var(--font-manrope)] autofill:bg-black/30 autofill:text-alabaster-mist autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0.3)]"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Email Input - Pill Shaped */}
                                <div className="group">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email Address"
                                        className="w-full bg-black/20 border border-white/10 rounded-full px-6 py-4 text-alabaster-mist placeholder:text-white/30 focus:outline-none focus:border-brushed-copper focus:bg-black/30 transition-all duration-300 font-[family-name:var(--font-manrope)] autofill:bg-black/30 autofill:text-alabaster-mist autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0.3)]"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Phone Input - Pill Shaped */}
                                <div className="group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Contact Number"
                                        className="w-full bg-black/20 border border-white/10 rounded-full px-6 py-4 text-alabaster-mist placeholder:text-white/30 focus:outline-none focus:border-brushed-copper focus:bg-black/30 transition-all duration-300 font-[family-name:var(--font-manrope)] autofill:bg-black/30 autofill:text-alabaster-mist autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0.3)]"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Interest Select - Pill Shaped */}
                                <div className="group">
                                    <select
                                        name="interest"
                                        className="w-full bg-black/20 border border-white/10 rounded-full px-6 py-4 text-alabaster-mist focus:outline-none focus:border-brushed-copper focus:bg-black/30 transition-all duration-300 font-[family-name:var(--font-manrope)] cursor-pointer [&>option]:bg-midnight-pine [&>option]:text-white"
                                        onChange={handleChange}
                                    >
                                        <option value="Booking">Booking a Dome</option>
                                        <option value="Invest">Investment</option>
                                        <option value="Event">Corporate Event</option>
                                        <option value="General">General Inquiry</option>
                                    </select>
                                </div>

                                {/* Message Textarea - Rounded */}
                                <div className="group">
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        placeholder="Tell us about your dream stay..."
                                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-alabaster-mist placeholder:text-white/30 focus:outline-none focus:border-brushed-copper focus:bg-black/30 transition-all duration-300 font-[family-name:var(--font-manrope)] resize-none"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                {/* Submit Button - Pill Shaped */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="group w-full md:w-auto flex items-center justify-center gap-3 bg-brushed-copper text-midnight-pine px-10 py-4 rounded-full uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#d4a98a] transition-all duration-300 hover:tracking-[0.25em] font-[family-name:var(--font-manrope)]"
                                    >
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Contact Info Grid - Below the Form */}
                    <div className="relative z-20 px-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <InfoCard
                                icon={Phone}
                                title="Reservations"
                                content="+92 300 1234567"
                                subtext="Available 24/7 for Bookings"
                                index={0}
                            />
                            <InfoCard
                                icon={Mail}
                                title="Concierge"
                                content="info@lavita.pk"
                                subtext="Events & General Inquiries"
                                index={1}
                            />
                            <InfoCard
                                icon={MapPin}
                                title="Location"
                                content="Malam Jabba Resort"
                                subtext="Swat Valley, KP, Pakistan"
                                index={2}
                            />
                        </div>
                    </div>
                </div>

                {/* Black Vignette at Bottom - Covers Half the Section */}
                <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
            </section>
        </>
    );
};

export default ContactForm;
