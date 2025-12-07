"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Telescope, Sparkles, Mountain } from "lucide-react";
import Image from "next/image";
import styles from "./ObservatoryServices.module.css";

const services = [
    {
        id: 1,
        title: "STATE-OF-THE-ART TELESCOPES",
        description: "Access powerful, high-aperture telescopes housed in the observatory dome for unparalleled clarity of deep-sky objects.",
        icon: Telescope,
        image: "/images/observatory-22.jpg",
    },
    {
        id: 2,
        title: "RESIDENT ASTRONOMER",
        description: "Personalized tours of the Hindu Kush night sky, sharing expert knowledge on constellations and celestial mechanics.",
        icon: Sparkles,
        image: "/images/observatory-11.jpg",
    },
    {
        id: 3,
        title: "9,200FT ELEVATION",
        description: "Located above the light pollution line, ensuring the most crystal-clear and unhindered view of the Milky Way in the region.",
        icon: Mountain,
        image: "/images/observatory-0.jpg",
    },
];

export default function ObservatoryServices() {
    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (id) => {
        setActiveCard(activeCard === id ? null : id);
    };

    return (
        <section className={styles.section}>
            {/* Top Vignette Gradient */}
            <div className={styles.topVignette} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    {/* Eyebrow */}
                    <p className={styles.eyebrow}>Hindu Kush Stargazing</p>

                    {/* Heading with Planetary O */}
                    <h2 className={styles.heading}>
                        Celestial{" "}
                        <span className="flex justify-center items-center pl-3">
                            <Image
                                src="/images/O.png"
                                alt=""
                                width={100}
                                height={100}
                                className={styles.planetaryO}
                                priority
                            />
                            <span className="-ml-1 pl-2">bservatory</span>
                        </span>
                    </h2>

                    {/* Description */}
                    <p className={styles.sectionDescription}>
                        An unhindered view of the Hindu Kush night sky, curated by our resident astronomer.
                        Experience celestial wonders through state-of-the-art telescopes in Pakistan's first
                        luxury stargazing sanctuary.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        const isActive = activeCard === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                className={`${styles.card} ${isActive ? styles.active : ""}`}
                                onClick={() => toggleCard(service.id)}
                                initial={false}
                                whileHover="hover"
                            >
                                {/* Card Image */}
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className={styles.cardImage}
                                    />
                                </div>

                                {/* Card Header - Always Visible */}
                                <div className={styles.cardHeader}>
                                    {/* Icon */}
                                    <div className={styles.iconWrapper}>
                                        <IconComponent className={styles.icon} strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className={styles.title}>{service.title}</h3>

                                    {/* Mobile Indicator */}
                                    <div className={styles.mobileIndicator}>
                                        <svg
                                            className={styles.chevron}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M5 7.5L10 12.5L15 7.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Card Content - Accordion on Mobile, Always Visible on Desktop */}
                                <div className={`${styles.cardContent} ${isActive ? styles.expanded : ""}`}>
                                    <div className={styles.contentInner}>
                                        <p className={styles.description}>{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
