"use client";
import Image from 'next/image';
import FadeIn from './FadeIn';

export default function About() {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                {/* Text Content */}
                <div>
                    <FadeIn>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--charcoal-grey)'
                        }}>
                            Who We Are
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--slate-grey)' }}>
                            We help owners, investors, and operators secure smart, reliable capital for commercial real estate—across the full lifecycle of a deal. From acquisitions and refinancings to complex recapitalizations and workouts, we bring clarity, creativity, and execution to every transaction.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--athena-orange)' }}>
                            Independent. Strategic. Relentless in pursuit of the right capital.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div style={{ marginTop: '3rem' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>What We Do</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--slate-grey)' }}>
                                We provide bespoke debt and equity solutions for commercial real estate nationwide. Based in Dallas, Texas, Athena Capital advises clients across the U.S., delivering local insight with national reach. Our role is simple: understand your objectives, structure the optimal capital stack, and execute with speed and certainty.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Image */}
                <FadeIn delay={0.3} className="about-image-wrapper">
                    <div style={{ position: 'relative', height: '600px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <Image
                            src="/houston-skyline.png"
                            alt="Houston Skyline"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
