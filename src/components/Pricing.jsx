import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: 'Single short',
            price: '$5',
            term: '/ short',
            description: 'Perfect for a one-off test or a quick turnaround.',
            features: [
                '1 short of any type',
                'Hooks, captions, and delivery',
                '48-72 hour turnaround',
            ],
            cta: 'Start with one short',
        },
        {
            name: 'Weekly plan',
            price: '$30',
            term: '/ week',
            description: '7 shorts every week. Built for steady, always-on content.',
            features: [
                '7 shorts per week',
                'Any short type included',
                'Priority editing queue',
            ],
            cta: 'Lock in weekly',
            recommended: true,
        },
        {
            name: 'Monthly plan',
            price: '$100',
            term: '/ month',
            description: '30 shorts per month for consistent growth and testing.',
            features: [
                '30 shorts per month',
                'Any short type included',
                'Monthly performance check-in',
            ],
            cta: 'Go monthly',
        },
    ];

    return (
        <section id="pricing" className="section pricing">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">Pricing</span>
                    <h2 className="heading-lg">Pick a plan that keeps shorts rolling</h2>
                    <p className="section-subtitle">
                        Any kind of short is available in every package. Start with $5 or lock in a weekly or monthly plan.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`pricing-card ${plan.recommended ? 'is-recommended' : ''}`}
                        >
                            <div className="pricing-top">
                                <div className="pricing-name">{plan.name}</div>
                                {plan.recommended && <span className="pill pill-accent">Recommended</span>}
                            </div>
                            <div className="pricing-price">
                                <span className="price-amount">{plan.price}</span>
                                <span className="price-term">{plan.term}</span>
                            </div>
                            <p className="pricing-desc">{plan.description}</p>
                            <ul className="pricing-list">
                                {plan.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-primary">
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
