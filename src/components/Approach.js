"use client";
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

export default function Approach() {
    const steps = [
        {
            number: "01",
            title: "Understand the Objective",
            description: "Every engagement starts with a deep dive into the asset, sponsorship, and business plan. We listen first, creating a strategy that aligns with your specific goals."
        },
        {
            number: "02",
            title: "Structure the Solution",
            description: "We design the optimal capital structure—not just what’s available, but what actually fits. We leverage our network to find the best terms and partners."
        },
        {
            number: "03",
            title: "Execute with Precision",
            description: "We run a disciplined process, manage diligence, and drive transactions to close. Speed and certainty are our hallmarks."
        }
    ];

    return (
        <section id="approach" className="section" style={{
            backgroundColor: 'var(--bg-color)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Element */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'var(--approach-gradient)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <FadeIn>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        color: 'var(--text-primary)',
                        letterSpacing: '0.02em',
                        fontFamily: 'var(--font-playfair)'
                    }}>
                        Our Approach
                    </h2>
                </FadeIn>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={{ height: '2px', backgroundColor: 'var(--athena-orange-primary)' }} 
                    />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    gap: '2rem',
                }}>
                    {steps.map((step, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <div style={{
                                padding: '3rem',
                                backgroundColor: 'var(--bg-glass-light)',
                                borderRadius: '0',
                                border: '1px solid var(--border-subtle)',
                                backdropFilter: 'blur(10px)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                position: 'relative'
                            }}
                                className="approach-card"
                            >
                                <div style={{
                                    fontSize: '0.9rem',
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: '500',
                                    color: 'var(--bg-color)',
                                    backgroundColor: 'var(--athena-orange-primary)',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2.5rem',
                                    boxShadow: '0 4px 15px rgba(226, 109, 43, 0.2)'
                                }}>
                                    {step.number}
                                </div>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontFamily: 'var(--font-playfair)', color: 'var(--athena-orange-light)' }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.8'
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
