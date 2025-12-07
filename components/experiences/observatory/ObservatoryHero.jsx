"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ObservatoryHero.module.css";

const observatoryImage = "/images/observatory.jpg"

export default function ObservatoryHero() {
    return (
        <section className="relative h-full w-full bg-black overflow-hidden pt-32 py-20">
            {/* Vignette Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-midnight-pine/70 via-midnight-pine/20 to-transparent pointer-events-none z-10" />

            {/* Star Field */}
            <div className={styles.starField}>
                {Array.from({ length: 80 }).map((_, i) => (
                    <div key={i} className={styles.star} />
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 lg:gap-16 h-full items-center">

                    {/* LEFT COLUMN - Enhanced Text Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-5 lg:space-y-6"
                    >
                        {/* Eyebrow - Trust Signal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-[#C89B7B] text-xs tracking-[0.4em] uppercase font-normal font-sans opacity-60">
                                Hindu Kush Stargazing
                            </p>
                        </motion.div>

                        {/* Heading with Planetary O */}
                        <motion.h1
                            className="heading-serif text-alabaster-mist text-4xl lg:text-5xl xl:text-6xl leading-tight flex flex-wrap w-64 items-baseline"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Celestial{" "}
                            <span className="inline-flex items-center">
                                <Image
                                    src="/images/O.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="inline-block w-[2.2em] h-[2.2em] rounded-full"
                                    priority
                                />
                                <span className="-ml-1 pl-2">bservatory</span>
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="body-sans text-alabaster-mist/80 text-sm md:text-base leading-relaxed max-w-xl"
                        >
                            An unhindered view of the Hindu Kush night sky, curated by our resident astronomer.
                            Experience celestial wonders through state-of-the-art telescopes in Pakistan's first
                            luxury stargazing sanctuary.
                        </motion.p>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="pt-2 space-y-2"
                        >
                            <p className="text-alabaster-mist/70 text-sm">
                                • Professional-grade telescopic equipment
                            </p>
                            <p className="text-alabaster-mist/70 text-sm">
                                • Expert astronomical guidance
                            </p>
                            <p className="text-alabaster-mist/70 text-sm">
                                • 9,200ft elevation for pristine visibility
                            </p>
                        </motion.div>

                        {/* Signature */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="pt-3"
                        >
                            <p className="text-[#C89B7B] text-xl md:text-2xl font-serif italic opacity-60">
                                Where Earth Meets Sky
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN - Nested Octagon Borders with Location Badge */}
                    <motion.div
                        className="relative h-[600px] lg:h-[700px] flex items-center justify-center pt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        {/* Octagon Wrapper Container - Position relative for badge anchoring */}
                        <div className="relative w-full h-full">
                            {/* Outer Border (Thick + Glowing) */}
                            <div className={`${styles.octagonWrapper} ${styles.outerBorder}`}>
                                {/* Inner Border (Thin) */}
                                <div className={`${styles.octagonWrapper} ${styles.innerBorder}`}>
                                    {/* Octagon Image */}
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                                        className={`${styles.octagonWrapper} ${styles.imageContainer}`}
                                    >
                                        <Image
                                            src={observatoryImage}
                                            alt="Observatory stargazing experience"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Location Badge - Now inside octagon container */}
                            <motion.div
                                className={styles.locationBadge}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                            >
                                {/* Frosted Glass Border */}
                                <div className="absolute inset-0 border border-white/30 rounded-sm z-10" />

                                {/* Badge Content */}
                                <div className="w-full h-full bg-gradient-to-br from-white/5 via-black/40 to-black/60 flex flex-col items-center justify-center relative rounded-sm">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                    <div className="relative z-10 text-center space-y-2">
                                        <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-[#C89B7B] font-medium">
                                            Malam Jabba, PK
                                        </p>
                                        <p className="font-serif text-2xl lg:text-3xl text-white italic">
                                            9,200ft
                                        </p>
                                        <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-white/50">
                                            Elevation
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
