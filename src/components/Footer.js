"use client";
import FadeIn from './FadeIn';

export default function Footer() {
    return (
        <footer id="contact" style={{ backgroundColor: 'var(--bg-accent)', borderTop: '1px solid var(--border-subtle)', padding: '6rem 0 3rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '5rem', marginBottom: '5rem' }}>

                    {/* Contact Column */}
                    <FadeIn>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--athena-orange-primary)' }}>Let’s Talk</h2>
                            <p style={{ marginBottom: '2.5rem', maxWidth: '400px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                If you’re evaluating a transaction or facing a capital decision, Athena Capital is ready to help. Dallas-based. National reach.
                            </p>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <p style={{ marginBottom: '0.8rem', fontWeight: '500', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Contact us:</p>
                                <p style={{ marginBottom: '0.3rem', color: 'var(--text-primary)', fontWeight: '500' }}>Mikel Keeler</p>
                                <a href="tel:+14698448024" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>469-844-8024</a>
                            </div>
                            <a href="mailto:MKeeler@AthenaCapitalre.com" className="btn btn-primary">Request a confidential consultation</a>
                        </div>
                    </FadeIn>

                    {/* Careers Column */}
                    <FadeIn delay={0.2}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-playfair)' }}>Join our Team</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                We are always looking for more great people to join our team. Please send a resume to:<br />
                                <a href="mailto:MKeeler@AthenaCapitalre.com" style={{ color: 'var(--athena-orange-primary)', marginTop: '0.5rem', display: 'inline-block' }}>MKeeler@AthenaCapitalre.com</a>
                            </p>

                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '3rem', fontFamily: 'var(--font-playfair)' }}>Location</h4>
                            <address style={{ fontStyle: 'normal', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                17742 Preston Road<br />
                                Dallas, TX 75252
                            </address>
                        </div>
                    </FadeIn>

                </div>

                <FadeIn delay={0.4}>
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        paddingTop: '3rem',
                        textAlign: 'center',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        &copy; {new Date().getFullYear()} Athena Capital. All rights reserved.
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
