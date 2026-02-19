"use client";
import FadeIn from './FadeIn';

export default function Footer() {
    return (
        <footer id="contact" style={{ backgroundColor: '#1F2125', color: 'var(--white)', padding: '5rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Contact Column */}
                    <FadeIn>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--athena-orange)' }}>Let’s Talk</h2>
                            <p style={{ marginBottom: '2rem', maxWidth: '400px', opacity: 0.9 }}>
                                If you’re evaluating a transaction or facing a capital decision, Athena Capital is ready to help. Dallas-based. National reach.
                            </p>
                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Contact us:</p>
                                <a href="mailto:info@AthenaCapitalre.com" style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8, hover: { color: 'var(--athena-orange)' } }}>[Email Address]</a>
                                <a href="tel:+12145550100" style={{ display: 'block', opacity: 0.8 }}>[Phone Number]</a>
                            </div>
                            <a href="#" className="btn btn-primary">Request a confidential consultation</a>
                        </div>
                    </FadeIn>

                    {/* Careers Column */}
                    <FadeIn delay={0.2}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Join our Team</h3>
                            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                                We are always looking for more great people to join our team.
                            </p>
                            <p style={{ marginBottom: '2rem' }}>
                                Please send a resume to <br />
                                <a href="mailto:careers@AthenaCapitalre.com" style={{ color: 'var(--athena-orange)' }}>careers@AthenaCapitalre.com</a>
                            </p>

                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2rem' }}>Location</h4>
                            <address style={{ fontStyle: 'normal', opacity: 0.8 }}>
                                17742 Preston Road<br />
                                Dallas, TX 75252
                            </address>
                        </div>
                    </FadeIn>

                </div>

                <FadeIn delay={0.4}>
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '2rem',
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        opacity: 0.5
                    }}>
                        &copy; {new Date().getFullYear()} Athena Capital. All rights reserved.
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
