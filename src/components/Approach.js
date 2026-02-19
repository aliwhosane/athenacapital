"use client";
import FadeIn from './FadeIn';

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
            backgroundColor: 'var(--charcoal-grey)',
            color: 'var(--white)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Element */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(232, 117, 42, 0.1) 0%, rgba(43, 46, 52, 0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <FadeIn>
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '5rem',
                        textAlign: 'center',
                        background: 'linear-gradient(to right, #fff, #F2F3F5)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.02em'
                    }}>
                        Our Approach
                    </h2>
                </FadeIn>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem'
                }}>
                    {steps.map((step, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <div style={{
                                padding: '3rem 2rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                transition: 'transform 0.3s ease, background-color 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start'
                            }}
                                className="approach-card"
                            >
                                <div style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    color: 'var(--charcoal-grey)',
                                    backgroundColor: 'var(--athena-orange)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem',
                                    boxShadow: '0 4px 15px rgba(232, 117, 42, 0.3)'
                                }}>
                                    {step.number}
                                </div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '600', color: 'var(--athena-orange)' }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--white)',
                                    lineHeight: '1.7',
                                    opacity: 1 // Full opacity for maximum contrast
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Styles for hover effect would typically go in globals.css, but inline style override is tricky for hover. 
          Assuming user is okay with basic static styles or I can add a class. 
          I will add a class 'approach-card' in globals.css for hover state if needed.
      */}
        </section>
    );
}
