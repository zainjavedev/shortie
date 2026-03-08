import React, { useRef, useEffect, useState } from 'react';
import { Bot, Film, Music, Layers, Zap, ArrowRight, Scissors, Sparkles, BookOpen, Captions, Volume2, ShoppingBag, Palette, TrendingUp } from 'lucide-react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Contact from './components/Contact';

const WITHOUT_PATH = "M10,78 L35,92 L60,58 L85,108 L110,52 L135,98 L160,68 L185,88 L210,62 L235,94 L258,72 L270,106";
const WITH_PATH    = "M10,128 L45,116 L80,102 L115,86 L150,66 L185,46 L220,26 L255,12 L270,7";

function App() {
  const [chartVisible, setChartVisible] = useState(false);
  const comparisonRef = useRef(null);

  useEffect(() => {
    const el = comparisonRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setChartVisible(true); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <main>
        <Hero />
        <section className="showreel-section">
          <div className="container">
            <div className="showreel-layout">
              <div className="showreel-info">
                <span className="eyebrow">See It In Action</span>
                <h2 className="heading-lg">Here's What Your Content <span className="highlight">Could Look Like</span></h2>
                <p className="lead showreel-desc">AI influencer, custom effects, professional editing — this is what we build for our clients.</p>
                <ul className="showreel-checks">
                  {[
                    { icon: <Bot size={16} />, text: 'AI-generated influencer' },
                    { icon: <Film size={16} />, text: 'Professional editing & transitions' },
                    { icon: <Music size={16} />, text: 'Custom sound design & effects' },
                    { icon: <Layers size={16} />, text: 'Motion graphics & overlays' },
                    { icon: <Zap size={16} />, text: 'Optimized for virality' },
                  ].map((item) => (
                    <li key={item.text} className="showreel-check">
                      <span className="check-icon">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="showreel-video">
                <div className="showreel-wrapper">
                  <iframe
                    src="https://streamable.com/e/jk3ueq?autoplay=1&muted=1"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    frameBorder="0"
                    title="Shortie showreel"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ugc-section section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow ugc-eyebrow">AI UGC Ads</span>
              <h2 className="heading-lg ugc-heading">Very Real-Looking Models to <span className="ugc-highlight">Promote Your Product</span></h2>
              <p className="section-subtitle ugc-subtitle">
                AI-generated UGC-style ads that look and feel like real influencer content — perfect for promoting your app, product, or brand without hiring talent.
              </p>
            </div>
            <div className="ugc-video-wrapper">
              <div className="ugc-video-embed">
                <iframe
                  src="https://streamable.com/e/jcm2v3"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                  title="AI UGC-style ad"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="comparison-section section" ref={comparisonRef}>
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">The Problem</span>
              <h2 className="heading-lg">Going viral is hard <span className="highlight">without a system.</span></h2>
              <p className="section-subtitle">Most creators waste hours editing and still get no traction. Here's what changes with Shortie.</p>
            </div>
            <div className="comparison-grid">

              {/* Without Shortie */}
              <div className="comparison-card negative">
                <h3 className="comparison-label neg">Without Shortie</h3>
                <svg className="comparison-chart" viewBox="0 0 280 155" fill="none">
                  <defs>
                    <linearGradient id="negArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.18"/>
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {[30,60,90,118].map(y => (
                    <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  ))}
                  <path
                    d={WITHOUT_PATH + " L270,135 L10,135 Z"}
                    fill="url(#negArea)"
                    className={chartVisible ? 'comp-area area-in' : 'comp-area'}
                  />
                  <path
                    d={WITHOUT_PATH}
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className={chartVisible ? 'chart-line-decline draw' : 'chart-line-decline'}
                  />
                  {['Feb','Apr','Jun','Aug','Oct','Jan'].map((m, i) => (
                    <text key={m} x={10 + i * 50} y="150" fontSize="9" fill="rgba(255,255,255,0.25)" fontFamily="inherit">{m}</text>
                  ))}
                </svg>
                <ul className="comparison-points">
                  <li>Inconsistent posting schedule</li>
                  <li>Hours wasted on editing</li>
                  <li>Generic, low-quality edits</li>
                  <li>Burnout &amp; creative fatigue</li>
                </ul>
              </div>

              {/* With Shortie */}
              <div className="comparison-card positive">
                <h3 className="comparison-label pos">With Shortie</h3>
                <svg className="comparison-chart" viewBox="0 0 280 155" fill="none">
                  <defs>
                    <linearGradient id="posArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.22"/>
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {[30,60,90,118].map(y => (
                    <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  ))}
                  <path
                    d={WITH_PATH + " L270,135 L10,135 Z"}
                    fill="url(#posArea)"
                    className={chartVisible ? 'comp-area area-in' : 'comp-area'}
                  />
                  <path
                    d={WITH_PATH}
                    stroke="#22c55e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className={chartVisible ? 'chart-line-growth draw' : 'chart-line-growth'}
                  />
                  {['Feb','Apr','Jun','Aug','Oct','Jan'].map((m, i) => (
                    <text key={m} x={10 + i * 50} y="150" fontSize="9" fill="rgba(255,255,255,0.25)" fontFamily="inherit">{m}</text>
                  ))}
                </svg>
                <ul className="comparison-points">
                  <li>Weekly content drops, on time</li>
                  <li>Professional, scroll-stopping quality</li>
                  <li>Custom edits that match your brand</li>
                  <li>You focus on your business</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Clipping — info LEFT, reel RIGHT */}
        <section id="portfolio" className="reel-section reel-section--dark section">
          <div className="container">
            <div className="reel-layout">
              <div className="reel-info">
                <span className="eyebrow reel-eyebrow">Long → Short</span>
                <h2 className="heading-lg reel-heading">Turn Streams Into <span className="reel-highlight">Viral Clips</span></h2>
                <p className="lead reel-desc">We clip the best moments from your streams and long-form content into scroll-stopping shorts that blow up everywhere.</p>
                <ul className="reel-checks">
                  {[
                    { icon: <Scissors size={16} />, text: 'Best moments clipped automatically' },
                    { icon: <Sparkles size={16} />, text: 'Gen Z editing style & trends' },
                    { icon: <Zap size={16} />, text: 'Optimized for TikTok, Shorts & Reels' },
                    { icon: <TrendingUp size={16} />, text: 'Built to make streamers go viral' },
                  ].map((item) => (
                    <li key={item.text} className="reel-check">
                      <span className="check-icon">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary">
                  Start Clipping My Content <ArrowRight size={16} />
                </a>
              </div>
              <div className="reel-video">
                <div className="reel-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/iQiezs84dQc?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0"
                    title="MrBeast challenge → short"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling — info LEFT, reel RIGHT */}
        <section className="reel-section reel-section--light section">
          <div className="container">
            <div className="reel-layout">
              <div className="reel-info">
                <span className="eyebrow reel-eyebrow-light">Storytelling</span>
                <h2 className="heading-lg reel-heading-light">Horror Stories That <span className="reel-highlight-light">Keep Them Watching</span></h2>
                <p className="lead reel-desc-light">Creepy AI visuals, perfectly timed captions, spine-chilling background music, and storylines that hook viewers from the first second.</p>
                <ul className="reel-checks">
                  {[
                    { icon: <BookOpen size={16} />, text: 'Gripping storylines that hook instantly' },
                    { icon: <Captions size={16} />, text: 'Perfectly timed captions & text' },
                    { icon: <Volume2 size={16} />, text: 'Scary background music & sound design' },
                    { icon: <Sparkles size={16} />, text: 'AI-generated horror visuals' },
                  ].map((item) => (
                    <li key={item.text} className="reel-check reel-check-light">
                      <span className="check-icon">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary">
                  Start My Storytelling <ArrowRight size={16} />
                </a>
              </div>
              <div className="reel-video">
                <div className="reel-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/w-OH4jS7Fr4?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0"
                    title="AI horror storytelling cut"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing — info LEFT, reel RIGHT */}
        <section className="reel-section reel-section--dark section">
          <div className="container">
            <div className="reel-layout">
              <div className="reel-info">
                <span className="eyebrow reel-eyebrow">Marketing Reels</span>
                <h2 className="heading-lg reel-heading">Sell More Jerseys With <span className="reel-highlight">Scroll-Stopping Reels</span></h2>
                <p className="lead reel-desc">We create fire promotional reels for clothing brands — jersey drops, product showcases, and hype edits that make your audience hit buy.</p>
                <ul className="reel-checks">
                  {[
                    { icon: <ShoppingBag size={16} />, text: 'Product showcase reels that convert' },
                    { icon: <Palette size={16} />, text: 'Edits that match your brand identity' },
                    { icon: <TrendingUp size={16} />, text: 'Hype drops that build anticipation' },
                    { icon: <Zap size={16} />, text: 'Scroll-stopping transitions & effects' },
                  ].map((item) => (
                    <li key={item.text} className="reel-check">
                      <span className="check-icon">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary">
                  Promote My Brand <ArrowRight size={16} />
                </a>
              </div>
              <div className="reel-video">
                <div className="reel-wrapper">
                  <iframe
                    src="https://streamable.com/e/goh9v2"
                    title="Clothing brand reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </Layout>
  );
}

export default App;
