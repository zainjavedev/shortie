import React from 'react';
import Layout from './Layout';
import Contact from './Contact';

const PRICING_TIERS = [
  {
    title: 'Storytelling Shorts',
    price: '$150/mo',
    description: '30 storytelling videos per month. We post for you too.',
    perks: ['30 videos per month', 'Story-led edits', 'Posting included'],
    cta: { label: 'Start storytelling', href: '#pricing-contact' },
  },
  {
    title: 'AI Influencer Videos',
    price: '$150/mo',
    description: '3 AI influencer videos per week, built for scroll-stopping hooks.',
    perks: ['3 videos per week', 'AI influencer style', 'Optimized formats'],
    cta: { label: 'Get AI influencer', href: '#pricing-contact' },
  },
  {
    title: 'Custom',
    price: "Let's tailor it",
    description: "Got anything else in mind? We'll build a custom plan.",
    perks: ['Custom volume', 'Your platforms', 'Flexible scope'],
    cta: { label: 'Got anything else in mind?', href: '#pricing-contact' },
  },
];

const PricingPage = () => (
  <Layout className="pricing-page">
    <main>
      <section id="pricing" className="pricing-section section">
        <div className="container">
          <div className="section-header pricing-header">
            <span className="eyebrow pricing-eyebrow">Pricing</span>
            <h1 className="heading-lg pricing-title">Hands-free pricing, your way</h1>
            <p className="section-subtitle pricing-subtitle">
              Pricing depends on how hands-free you want to be and what kind of content you want.
            </p>
          </div>

          <div className="pricing-grid">
            {PRICING_TIERS.map((tier) => (
              <article key={tier.title} className="pricing-card">
                <div className="pricing-card-head">
                  <h2 className="pricing-card-title">{tier.title}</h2>
                  <div className="pricing-card-price">{tier.price}</div>
                </div>
                <p className="pricing-card-desc">{tier.description}</p>
                <ul className="pricing-card-list">
                  {tier.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a className="btn btn-primary pricing-card-cta" href={tier.cta.href}>
                  {tier.cta.label}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>

    <Contact
      id="pricing-contact"
      subject="Pricing page - Shortie lead"
      source="Pricing page form"
    />
  </Layout>
);

export default PricingPage;
