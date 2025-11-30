import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <span className="eyebrow">Automate your content creation</span>

                    <h1 className="hero-title">
                        10 shorts in 7 days
                        {' '}
                        <span className="highlight">starting from $20.</span>
                    </h1>

                    <p className="lead">
                        Drop your podcast, interview, or raw ideas once. We automate the hooks, captions, and delivery so your shorts keep rolling while you sip coffee and focus on the next big thing.
                    </p>

                    <div className="cta-row">
                        <a href="#portfolio" className="btn btn-primary">
                            <Play size={18} />
                            Put my shorts on autopilot
                        </a>
                        <a href="#portfolio" className="btn btn-ghost">
                            Show me samples
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
