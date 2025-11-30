import React from 'react';
import { Scissors, Smartphone, Sparkles } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Scissors size={22} />,
            title: 'Long → Short Systems',
            description: 'Podcasts, interviews, webinars, and YouTube turned into a weekly stream of hooks, highlights, and reels.',
            tag: '72h delivery'
        },
        {
            icon: <Sparkles size={22} />,
            title: 'Story-led Videos',
            description: 'Narrative scripting, pacing, and captions that feel human - no generic meme spam unless that’s the brief.',
            tag: 'Story first'
        },
        {
            icon: <Smartphone size={22} />,
            title: 'AI-Generated Ads',
            description: 'Concept boards, product shots, and “try-it-before-you-film” ideas for paid and organic.',
            tag: 'AI + human'
        },
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">What we do</span>
                    <h2 className="heading-lg">Content that keeps people watching</h2>
                    <p className="section-subtitle">
                        Repurpose long-form, design thumb-stopping shorts, and test AI-powered ad ideas without losing your tone.
                    </p>
                </div>

                <div className="service-grid">
                    {services.map((service) => (
                        <div key={service.title} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-title">{service.title}</div>
                            <p className="service-desc">{service.description}</p>
                            <span className="service-tag">{service.tag}</span>
                        </div>
                    ))}
                </div>

                <div className="process-bar">
                    <div>
                        <div className="process-step">Discover</div>
                        <div className="process-desc">Pick hooks, tone, and the clips that deserve a spotlight.</div>
                    </div>
                    <div>
                        <div className="process-step">Cut & design</div>
                        <div className="process-desc">Story-led edits, captions, motion design, and pacing tuned to your platform.</div>
                    </div>
                    <div>
                        <div className="process-step">Test & iterate</div>
                        <div className="process-desc">CTA, hook, and thumbnail variants shipped with every batch.</div>
                    </div>
                    <div>
                        <div className="process-step">Publish-ready</div>
                        <div className="process-desc">Organized deliverables so you can drag, drop, and hit post.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
