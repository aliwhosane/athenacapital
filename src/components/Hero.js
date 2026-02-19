"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

import dallasSkyline from '../../public/dallas-skyline-new.jpg';

export default function Hero() {
    return (
        <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
            {/* Background Image */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Image
                    src={dallasSkyline}
                    alt="Dallas Skyline"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    placeholder="blur"
                    priority
                />
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(43, 46, 52, 0.4), rgba(43, 46, 52, 0.7))'
                }}></div>
            </div>

            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                color: 'var(--white)',
                paddingTop: '60px' // Offset for fixed header
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        maxWidth: '800px',
                        lineHeight: 1.1,
                        color: 'var(--white)'
                    }}
                >
                    Commercial Real Estate <br />
                    <span style={{ color: 'var(--athena-orange)' }}>Capital Advisory</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                        maxWidth: '600px',
                        marginBottom: '2.5rem',
                        opacity: 0.9,
                        fontWeight: 300
                    }}
                >
                    Independent. Strategic. Relentless in pursuit of the right capital.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    style={{ display: 'flex', gap: '1rem' }}
                >
                    <a href="#contact" className="btn btn-primary">
                        Get in Touch
                    </a>
                    <a href="#services" className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(5px)' }}>
                        Our Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
