"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={scrolled ? "header-glass" : ""} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            backgroundColor: 'transparent',
            borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}>
                    ATHENA
                </Link>

                <nav aria-label="Main Navigation" className="desktop-nav">
                    {['About', 'Services', 'Approach', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            aria-label={`Navigate to ${item} section`}
                            style={{
                                fontSize: '0.85rem',
                                fontWeight: '500',
                                color: 'var(--text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--athena-orange-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mobile-menu"
                >
                    {['About', 'Services', 'Approach', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                color: 'var(--text-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {item}
                        </Link>
                    ))}
                </motion.div>
            )}
        </header>
    );
}
