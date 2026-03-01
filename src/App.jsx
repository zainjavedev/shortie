import React, { useRef, useEffect, useState } from 'react';
import { Bot, Film, Music, Layers, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import LeadPopup from './components/LeadPopup';

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
    <div className="page">
      <Navbar />
      <LeadPopup />
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

        <Portfolio />
      </main>
      <Contact />
    </div>
  );
}

export default App;
