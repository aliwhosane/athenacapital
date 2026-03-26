"use client";
import FadeIn from './FadeIn';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Services() {
    const pillars = [
        {
            title: "Debt Capital Markets",
            description: "Mastering the complexities of debt placement across the entire capital stack. We source and structure optimal financing solutions through an extensive network of institutional lenders, debt funds, and regional banks.",
            image: "/Dallas, TX - Dusk Skyline 1.jpg",
            services: [
                { name: "Acquisition Financing", details: "Stabilized and transitional assets, portfolio acquisitions." },
                { name: "Refinancing", details: "Rate optimization, maturity management, cash‑out strategies." },
                { name: "Loan Assumptions", details: "Managing assumption processes to preserve in-place financing." }
            ]
        },
        {
            title: "Equity & Structured Finance",
            description: "Sourcing and structuring bespoke solutions to support ambitious acquisitions and development. We align stakeholders and position assets for long-term outperformance.",
            image: "/Dallas, TX - MHH Bridge.jpg",
            services: [
                { name: "Equity Raising", details: "JV equity, preferred equity, and co‑GP capital structures." },
                { name: "Recapitalizations", details: "Growth capital, partner buyouts, balance‑sheet restructuring." }
            ]
        },
        {
            title: "Advisory & Special Situations",
            description: "Navigating distressed or complex capital scenarios with strategic clarity. We advise clients through challenging environments to preserve and maximize asset value.",
            image: "/Dallas, TX - Reunion Tower.jpg",
            services: [
                { name: "Workouts & Restructuring", details: "Maturity defaults, covenant issues, and rescue capital." },
                { name: "Loan Sales", details: "Representing stakeholders in performing and non-performing loan sales." }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="services" className="section" style={{ backgroundColor: 'var(--bg-accent)' }}>
            <div className="container">
                <FadeIn>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        color: 'var(--text-primary)',
                        letterSpacing: '0.02em',
                        fontFamily: 'var(--font-playfair)'
                    }}>
                        Our Expertise
                    </h2>
                </FadeIn>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6rem' }}>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={{ height: '2px', backgroundColor: 'var(--athena-orange-primary)' }} 
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {pillars.map((pillar, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                                gap: '5rem',
                                alignItems: 'center'
                            }}>
                                {/* Text Content */}
                                <div style={{ order: isEven ? 1 : 2 }}>
                                    <motion.div 
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        <motion.h3 variants={itemVariants} style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-playfair)', color: 'var(--athena-orange-primary)' }}>
                                            {pillar.title}
                                        </motion.h3>
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '60px' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                                            style={{ height: '2px', backgroundColor: 'var(--athena-orange-primary)', marginBottom: '2rem' }} 
                                        />
                                        <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                            {pillar.description}
                                        </motion.p>
                                        <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {pillar.services.map((srv, sIdx) => (
                                                <motion.div 
                                                    key={sIdx} 
                                                    whileHover={{ x: 10, backgroundColor: 'var(--hover-overlay)' }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{ 
                                                        padding: '1rem 1.5rem', 
                                                        borderLeft: '1px solid rgba(226, 109, 43, 0.4)',
                                                        cursor: 'pointer',
                                                        borderRadius: '0 8px 8px 0'
                                                    }}>
                                                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.4rem', fontWeight: '500' }}>{srv.name}</h4>
                                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0 }}>{srv.details}</p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                </div>
                                
                                {/* Image */}
                                <div style={{ order: isEven ? 2 : 1 }}>
                                    <div style={{ position: 'relative', height: '650px', width: '100%', overflow: 'hidden', boxShadow: '0 20px 40px var(--shadow-heavy)', borderRadius: '4px' }}>
                                        <motion.div
                                            initial={{ scale: 1.15, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} 
                                            viewport={{ once: true, margin: "-100px" }}
                                            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                                        >
                                            <Image
                                                src={pillar.image}
                                                alt={pillar.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </motion.div>
                                        {/* Luxury Overlay */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0, left: 0, width: '100%', height: '100%',
                                            background: 'var(--luxury-overlay)',
                                            border: '1px solid var(--border-subtle)',
                                            pointerEvents: 'none',
                                            zIndex: 2
                                        }} />

                                        {/* Animated Image Traces */}
                                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5, ease: 'circOut' }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--athena-orange-primary)', transformOrigin: 'left', zIndex: 10 }} />
                                        <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5, ease: 'circOut' }} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '2px', background: 'var(--athena-orange-primary)', transformOrigin: 'top', zIndex: 10 }} />
                                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5, ease: 'circOut' }} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--athena-orange-primary)', transformOrigin: 'right', zIndex: 10 }} />
                                        <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5, ease: 'circOut' }} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '2px', background: 'var(--athena-orange-primary)', transformOrigin: 'bottom', zIndex: 10 }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
