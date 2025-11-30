import React from 'react';

const Portfolio = () => {
    const sections = [
        {
            id: 'storytelling-shorts',
            title: 'Storytelling shorts',
            description: 'Narrative-driven shorts with captions and pacing dialed for TikTok/Shorts.',
            videos: [
                {
                    title: 'AI horror storytelling cut 2',
                    url: 'https://www.youtube.com/embed/w-OH4jS7Fr4?feature=share',
                },
                {
                    title: 'AI crime story short',
                    url: 'https://streamable.com/e/2pizq8',
                },
                {
                    title: 'AI urban legend story',
                    url: 'https://streamable.com/e/4alsq6',
                },
            ],
        },
        {
            id: 'ai-visuals',
            title: 'AI-generated visuals',
            description: 'AI concept shorts and visual-heavy hooks ready for paid or organic.',
            videos: [
                {
                    title: 'AI F1 race in Monaco',
                    url: 'https://streamable.com/e/z3f4rt',
                },
                {
                    title: 'AI UGC-style ad (realistic)',
                    url: 'https://streamable.com/e/jcm2v3',
                },
                {
                    title: 'AI driver (creative short 2)',
                    url: 'https://www.youtube.com/embed/QHyS9BfJ9nY?feature=share',
                },
            ],
        },
        {
            id: 'long-to-short',
            title: 'Long-form to short',
            description: 'Podcasts or interviews cut down with captions, pacing, and hooks.',
            videos: [
                {
                    title: 'MrBeast challenge → short with captions',
                    url: 'https://www.youtube.com/embed/iQiezs84dQc?rel=0',
                },
                {
                    title: 'Challenge clip → short with captions',
                    url: 'https://www.youtube.com/embed/4mbfyMiJJBg?feature=share',
                },
                {
                    title: 'Challenge short with captions (alt)',
                    url: 'https://www.youtube.com/embed/8M8IGcJgXIw',
                },
            ],
        },
    ];

    const renderVideo = (video, extraClass = '') => (
        <div key={video.url} className={`portfolio-video ${extraClass}`}>
            <div
                className={`portfolio-embed${video.ratio ? ' wide' : ''}`}
                style={video.ratio ? { aspectRatio: video.ratio } : {}}
            >
                <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
            <div className="portfolio-meta">
                <div className="portfolio-title">{video.title}</div>
            </div>
        </div>
    );

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">Proof of play</span>
                    <h2 className="heading-lg">Sample shorts by format</h2>
                    <p className="section-subtitle">
                        Story-led AI cuts, long-to-short edits, and visual-first clips grouped by format. Jump in and watch.
                    </p>
                </div>

                <div className="portfolio-sections">
                    {sections.map((section) => (
                        // Add group-specific class hooks for layout tweaks
                        <div
                            key={section.id}
                            className={`portfolio-group ${
                                section.id === 'ai-visuals' ? 'ai-visuals-group' : ''
                            } ${section.id === 'long-to-short' ? 'long-group' : ''}`}
                            id={section.id}
                        >
                            <div className="portfolio-group-header">
                                <div>
                                    <div className="portfolio-label">
                                        <span className="chip play-chip">{section.title}</span>
                                    </div>
                                    <div className="portfolio-title">{section.description}</div>
                                </div>
                            </div>
                            <div className="portfolio-videos">
                                {section.videos.map((video) => renderVideo(video))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
