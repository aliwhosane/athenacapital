"use client";
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import heroBg from '../../public/Dallas, TX - Sunset Skyline.jpg';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: 'var(--bg-color)' }}>
            {/* Parallax Background Image */}
            <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, y, opacity }}>
                <Image
                    src={heroBg}
                    alt="Dallas Skyline at Sunset"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    placeholder="blur"
                    priority
                />
                {/* Premium Dark Vignette/Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'var(--hero-gradient)',
                    zIndex: 1
                }} />
            </motion.div>

            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                paddingTop: '80px' // Offset for header
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <span style={{ 
                        fontFamily: 'var(--font-inter)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.2em', 
                        color: 'var(--athena-orange-primary)', 
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        display: 'block'
                    }}>
                        Athena Capital
                    </span>
                    
                    <h1 style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        fontWeight: '400',
                        marginBottom: '1.5rem',
                        maxWidth: '900px',
                        lineHeight: 1.1,
                    }}>
                        Empowering Vision <br />
                        <span style={{ fontStyle: 'italic', color: 'var(--athena-orange-light)' }}>Through Capital</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                            maxWidth: '600px',
                            marginBottom: '3rem',
                            color: 'var(--text-secondary)',
                            fontWeight: 300,
                            lineHeight: 1.8
                        }}
                    >
                        Independent. Strategic. Relentless in pursuit of the right structure for your commercial real estate assets.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ display: 'flex', gap: '1.5rem' }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            Discuss Strategy
                        </a>
                        <a href="#services" className="btn btn-outline" style={{ backdropFilter: 'blur(5px)' }}>
                            Explore Expertise
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
