import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <span className="eyebrow">Start your content journey</span>

                    <h1 className="hero-title">
                        <span className="hero-line">Start your content</span>
                        <span className="hero-line">
                            journey{' '}
                            <span className="highlight">for just $5.</span>
                        </span>
                    </h1>

                    <p className="lead">
                        Drop your podcast, interview, or raw ideas once. We automate the hooks, captions, and delivery so your shorts keep rolling while you sip coffee and focus on the next big thing.
                    </p>

                    <div className="cta-row">
                        <a href="#pricing" className="btn btn-primary">
                            <Play size={18} />
                            Start with a plan
                        </a>
                        <a href="#portfolio" className="btn btn-ghost">
                            See samples
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="showcase-card">
                        <div className="showcase-header">
                            <span className="pill pill-accent">Featured cut</span>
                        </div>
                        <div className="video-embed" aria-label="Long form to short with captions">
                            <iframe
                                src="https://www.youtube.com/embed/iQiezs84dQc?rel=0"
                                title="Long form to short with captions"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                        <div className="showcase-footer">
                            <div className="showcase-title">Long-form to short with captions</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
