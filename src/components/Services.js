"use client";
import FadeIn from './FadeIn';

export default function Services() {
    const services = [
        {
            title: "Acquisition Financing",
            description: "We source acquisition financing across the full lending spectrum—from institutional lenders and debt funds to credit unions and regional banks.",
            details: "Typical uses: stabilized and transitional assets, value‑add strategies, portfolio acquisitions."
        },
        {
            title: "Refinancing",
            description: "We evaluate the entire capital market to deliver refinancing solutions that optimize pricing, structure, and flexibility.",
            details: "Focus: rate optimization, maturity management, cash‑out strategies."
        },
        {
            title: "Recapitalizations",
            description: "We structure recapitalizations that align stakeholders and position assets for long‑term success.",
            details: "Ideal for: growth capital, partner buyouts, balance‑sheet restructuring."
        },
        {
            title: "Workouts & Special Situations",
            description: "We advise borrowers navigating distressed or complex capital situations to create lender dialogue and preserve value.",
            details: "Includes: maturity defaults, covenant issues, rescue capital."
        },
        {
            title: "Loan Assumptions",
            description: "We manage the assumption process for existing loans, coordinating with lenders to preserve attractive in‑place financing.",
            details: "Benefits: reduced costs, favorable rates, faster closings."
        },
        {
            title: "Loan Sales",
            description: "We represent lenders, owners, and investors in the sale of performing and non‑performing loans.",
            details: "Capabilities: whole loans, participations, portfolios."
        },
        {
            title: "Equity Raising",
            description: "We source and structure equity capital from institutional and private investors to support acquisitions and development.",
            details: "Structures: JV equity, preferred equity, co‑GP capital."
        }
    ];

    return (
        <section id="services" className="section" style={{ backgroundColor: 'var(--mid-grey)' }}>
            <div className="container">
                <FadeIn>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '3rem',
                        textAlign: 'center',
                        color: 'var(--charcoal-grey)'
                    }}>
                        Our Expertise
                    </h2>
                </FadeIn>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 0.1}
                            style={{
                                flex: '0 1 350px', // Flex basis 350px, can shrink but not grow past needed width unless we want it to. 
                                // To make them uniform width but centered:
                                width: '350px',
                                display: 'flex'
                            }}
                        >
                            <div className="service-card" style={{
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--athena-orange)' }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ marginBottom: '1rem', color: 'var(--charcoal-grey)' }}>
                                        {service.description}
                                    </p>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-grey)', fontStyle: 'italic', borderTop: '1px solid var(--mid-grey)', paddingTop: '1rem', marginTop: 'auto' }}>
                                    {service.details}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
