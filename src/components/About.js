"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function About() {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '6rem', alignItems: 'center' }}>
                {/* Text Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <FadeIn>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            marginBottom: '1.5rem',
                            letterSpacing: '0.02em',
                        }}>
                            Who We Are
                        </h2>
                    </FadeIn>

                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        style={{ height: '2px', backgroundColor: 'var(--athena-orange-primary)', marginBottom: '2rem' }} 
                    />

                    <FadeIn delay={0.3}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            We help owners, investors, and operators secure smart, reliable capital for commercial real estate—across the full lifecycle of a deal. From acquisitions and refinancings to complex recapitalizations and workouts, we bring clarity, creativity, and execution to every transaction.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--athena-orange-light)', margin: '2.5rem 0' }}>
                            "Independent. Strategic. Relentless in pursuit of the right capital."
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', letterSpacing: '0.02em' }}>What We Do</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                We provide bespoke debt and equity solutions for commercial real estate nationwide. Based in Dallas, Texas, Athena Capital advises clients across the U.S., delivering local insight with national reach. Our role is simple: understand your objectives, structure the optimal capital stack, and execute with speed and certainty.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Editorial Image Composition */}
                <div style={{ position: 'relative', height: '800px', width: '100%' }}>
                    <FadeIn delay={0.3} style={{ position: 'absolute', top: '0', right: '0', width: '85%', height: '65%', zIndex: 1 }}>
                        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                            <Image
                                src="/houston-skyline.png"
                                alt="Houston Skyline"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            {/* Animated Image Traces */}
                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease: 'circOut' }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--athena-orange-primary)', transformOrigin: 'left', zIndex: 3 }} />
                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease: 'circOut' }} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '1px', background: 'var(--athena-orange-primary)', transformOrigin: 'top', zIndex: 3 }} />
                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease: 'circOut' }} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'var(--athena-orange-primary)', transformOrigin: 'right', zIndex: 3 }} />
                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease: 'circOut' }} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '1px', background: 'var(--athena-orange-primary)', transformOrigin: 'bottom', zIndex: 3 }} />
                        </div>
                    </FadeIn>
                    
                    <FadeIn delay={0.5} style={{ position: 'absolute', bottom: '0', left: '0', width: '70%', height: '50%', zIndex: 2, boxShadow: '20px -20px 40px var(--shadow-heavy)' }}>
                        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRight: '1px solid var(--athena-orange-primary)', borderTop: '1px solid var(--athena-orange-primary)' }}>
                            <Image
                                src="/Houston, TX - Skyline Bridge.jpg"
                                alt="Houston Skyline Bridge"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            {/* Animated Image Traces */}
                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.7, ease: 'circOut' }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--athena-orange-primary)', transformOrigin: 'left', zIndex: 3 }} />
                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.7, ease: 'circOut' }} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '1px', background: 'var(--athena-orange-primary)', transformOrigin: 'top', zIndex: 3 }} />
                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.7, ease: 'circOut' }} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'var(--athena-orange-primary)', transformOrigin: 'right', zIndex: 3 }} />
                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.7, ease: 'circOut' }} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '1px', background: 'var(--athena-orange-primary)', transformOrigin: 'bottom', zIndex: 3 }} />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
