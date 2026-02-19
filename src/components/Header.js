"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: scrolled ? 'var(--charcoal-grey)' : 'var(--white)',
                    letterSpacing: '-0.02em'
                }}>
                    ATHENA CAPITAL
                </Link>

                <nav style={{ display: 'flex', gap: '2rem' }}>
                    {['About', 'Services', 'Approach', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                color: scrolled ? 'var(--charcoal-grey)' : 'var(--white)',
                                opacity: 0.9
                            }}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
