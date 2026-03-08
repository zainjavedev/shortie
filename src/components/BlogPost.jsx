import React from 'react';
import Layout from './Layout';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const TOC = [
  { id: 'why-short-form', label: 'Why Short-Form Content Is King Right Now' },
  { id: 'the-hook', label: 'Step 1: The Hook (You Have 1 Second)' },
  { id: 'storytelling', label: 'Step 2: Tell a Micro-Story' },
  { id: 'editing', label: 'Step 3: Edit Like a Gen Z Editor' },
  { id: 'sound', label: 'Step 4: Sound Is 50% of the Video' },
  { id: 'posting', label: 'Step 5: Post at the Right Time (and Often)' },
  { id: 'algorithm', label: 'Step 6: Understand the Algorithm' },
  { id: 'repurpose', label: 'Step 7: Repurpose Everything' },
  { id: 'mistakes', label: 'Common Mistakes That Kill Your Reach' },
  { id: 'shortie-pitch', label: "Don't Want to Do All This Yourself?" },
];

const BlogPost = () => (
  <Layout showPopup={false}>
    <main>
      <article className="blog-post">
        <div className="container">
          <div className="blog-post-header">
            <a href="/blog.html" className="blog-back-link">&larr; Back to blog</a>
            <span className="blog-card-tag">Strategy</span>
            <h1 className="heading-xl blog-post-title">How to Go Viral With Short-Form Content</h1>
            <p className="lead blog-post-lead">A no-fluff, step-by-step guide to creating short-form videos that actually blow up on TikTok, YouTube Shorts, and Instagram Reels.</p>
            <div className="blog-card-meta">
              <span className="blog-card-meta-item"><Calendar size={14} /> Mar 9, 2026</span>
              <span className="blog-card-meta-item"><Clock size={14} /> 10 min read</span>
            </div>
          </div>

          <div className="blog-post-layout">
            {/* Table of Contents */}
            <aside className="blog-toc">
              <div className="blog-toc-sticky">
                <h3 className="blog-toc-title">In this article</h3>
                <nav>
                  <ol className="blog-toc-list">
                    {TOC.map((item, i) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="blog-toc-link">
                          <span className="blog-toc-num">{String(i + 1).padStart(2, '0')}</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="blog-content">

              <section id="why-short-form">
                <h2>Why Short-Form Content Is King Right Now</h2>
                <p>Let's not overthink this. Short-form video is the single most powerful way to grow online in 2026. Here's why:</p>
                <ul>
                  <li><strong>TikTok has 1.5 billion monthly users.</strong> YouTube Shorts gets 70 billion daily views. Reels are Instagram's #1 content type. The audience is there.</li>
                  <li><strong>The barrier to entry is zero.</strong> You don't need a studio, a team, or a budget. A phone and a good idea will do.</li>
                  <li><strong>Algorithms favor new creators.</strong> Unlike YouTube long-form where you need subscribers, short-form platforms push content from unknown accounts all the time.</li>
                </ul>
                <p>The catch? Everyone knows this now. So the bar for quality is higher than ever. Let's talk about how to actually stand out.</p>
              </section>

              <section id="the-hook">
                <h2>Step 1: The Hook (You Have 1 Second)</h2>
                <p>This is not an exaggeration. Viewers decide whether to keep watching or swipe within the <strong>first 1-2 seconds</strong>. Your hook is everything.</p>
                <h3>What makes a great hook?</h3>
                <ul>
                  <li><strong>Pattern interrupt</strong> — something visually unexpected. A jump cut, a weird angle, text that pops up immediately.</li>
                  <li><strong>Open loop</strong> — start with the payoff or tease it. "This is what happens when you..." or "Nobody talks about this..."</li>
                  <li><strong>Direct address</strong> — talk directly to your audience. "If you're a streamer, stop scrolling."</li>
                </ul>
                <p><strong>Pro tip:</strong> Write your hook FIRST. Before you record, before you edit. If the hook doesn't make you want to watch, nothing else matters.</p>
                <blockquote>
                  <p>"The first frame of your video is an ad for the rest of your video."</p>
                </blockquote>
              </section>

              <section id="storytelling">
                <h2>Step 2: Tell a Micro-Story</h2>
                <p>Even in 30 seconds, you can tell a story. And stories are what keep people watching until the end — which is what the algorithm cares about most (watch time and completion rate).</p>
                <h3>The micro-story formula:</h3>
                <ol>
                  <li><strong>Setup</strong> (1-3 sec) — introduce the situation or problem</li>
                  <li><strong>Tension</strong> (5-15 sec) — build curiosity, make them need to see what happens</li>
                  <li><strong>Payoff</strong> (3-5 sec) — deliver the punchline, twist, or result</li>
                </ol>
                <p>This works for literally any niche. Horror stories, product reviews, gaming clips, fitness transformations — every viral video follows some version of this.</p>
                <p>The key is <strong>pacing</strong>. Don't let any single moment breathe too long. If a viewer gets bored for even 2 seconds, they're gone.</p>
              </section>

              <section id="editing">
                <h2>Step 3: Edit Like a Gen Z Editor</h2>
                <p>This is where most people lose. Your content might be great, but if the editing feels "off," nobody's watching. Here's what works in 2026:</p>
                <ul>
                  <li><strong>Fast cuts</strong> — change the visual every 2-3 seconds max. Jump cuts, angle changes, zoom-ins.</li>
                  <li><strong>Text on screen</strong> — always. Captions, keywords, reactions. 85% of people watch without sound initially.</li>
                  <li><strong>Movement</strong> — the frame should never be static. Subtle zooms, pans, shake effects.</li>
                  <li><strong>Memes & trends</strong> — use trending formats but put your own spin on them. Don't just copy.</li>
                </ul>
                <h3>Tools that help:</h3>
                <ul>
                  <li><strong>CapCut</strong> — the go-to for fast mobile editing</li>
                  <li><strong>After Effects</strong> — for motion graphics and overlays</li>
                  <li><strong>Premiere Pro</strong> — for professional-grade cuts</li>
                </ul>
                <p>Or, you know, you could just <a href="/#contact">let us handle the editing</a>. Just saying.</p>
              </section>

              <section id="sound">
                <h2>Step 4: Sound Is 50% of the Video</h2>
                <p>Seriously. Sound design is the most underrated part of short-form content. Here's what to get right:</p>
                <ul>
                  <li><strong>Trending audio</strong> — use sounds that are already blowing up. The algorithm literally boosts videos using trending audio.</li>
                  <li><strong>Sound effects</strong> — whooshes on transitions, bass drops on reveals, satisfying clicks. These tiny details make videos feel "premium."</li>
                  <li><strong>Music matching</strong> — the beat of the music should match your cuts. When the bass drops, something should change on screen.</li>
                  <li><strong>Voiceover</strong> — if you're doing a talking-head or story format, your voice quality matters. Invest in a $30 lav mic. It's worth it.</li>
                </ul>
                <p><strong>Big mistake:</strong> Using copyrighted music that gets your video muted or taken down. Stick to platform-native sounds or royalty-free libraries.</p>
              </section>

              <section id="posting">
                <h2>Step 5: Post at the Right Time (and Often)</h2>
                <p>Consistency beats perfection. Always. Here's the real talk on posting strategy:</p>
                <h3>How often to post:</h3>
                <ul>
                  <li><strong>TikTok:</strong> 1-3 times per day (yes, really)</li>
                  <li><strong>YouTube Shorts:</strong> 3-5 times per week</li>
                  <li><strong>Instagram Reels:</strong> 4-7 times per week</li>
                </ul>
                <h3>Best times to post (general):</h3>
                <ul>
                  <li><strong>Morning:</strong> 7-9 AM (people scrolling before work/school)</li>
                  <li><strong>Lunch:</strong> 12-1 PM</li>
                  <li><strong>Evening:</strong> 7-10 PM (peak scroll hours)</li>
                </ul>
                <p>But honestly? <strong>Your analytics matter more than generic advice.</strong> Check your audience insights and post when YOUR audience is active.</p>
                <p>The real unlock is volume. Most creators who "went viral" posted 100+ videos before one took off. It's a numbers game with a skill component.</p>
              </section>

              <section id="algorithm">
                <h2>Step 6: Understand the Algorithm</h2>
                <p>Every platform's algorithm is slightly different, but they all care about the same core metrics:</p>
                <ol>
                  <li><strong>Watch time / completion rate</strong> — the #1 metric. If people watch your entire video (or loop it), you're golden.</li>
                  <li><strong>Engagement</strong> — likes, comments, shares, saves. Shares and saves are weighted heavier than likes.</li>
                  <li><strong>Click-through from the feed</strong> — does your thumbnail/first frame make people stop scrolling?</li>
                  <li><strong>Profile visits</strong> — if your video makes people visit your profile, the algorithm takes notice.</li>
                </ol>
                <h3>Algorithm hacks that actually work:</h3>
                <ul>
                  <li><strong>End with a question</strong> — drives comments</li>
                  <li><strong>Use a CTA</strong> — "Follow for part 2" or "Save this for later" actually works</li>
                  <li><strong>Reply to comments with video</strong> — creates a content chain the algorithm loves</li>
                  <li><strong>Keep videos under 60 seconds</strong> — shorter videos have higher completion rates</li>
                </ul>
              </section>

              <section id="repurpose">
                <h2>Step 7: Repurpose Everything</h2>
                <p>This is the cheat code nobody talks about enough. One piece of content can become 5+ pieces across platforms.</p>
                <h3>The repurposing playbook:</h3>
                <ul>
                  <li><strong>Long stream or video?</strong> Clip the best 3-5 moments into shorts.</li>
                  <li><strong>Podcast episode?</strong> Pull the spiciest 30-second take, add captions, post as a reel.</li>
                  <li><strong>Tweet that did well?</strong> Turn it into a talking-head video.</li>
                  <li><strong>TikTok that blew up?</strong> Re-edit it slightly different for Shorts and Reels (different audiences).</li>
                </ul>
                <p>The best creators aren't making more content — they're making the same content work harder across more platforms.</p>
              </section>

              <section id="mistakes">
                <h2>Common Mistakes That Kill Your Reach</h2>
                <p>Before we wrap up, here are the things we see creators do wrong constantly:</p>
                <ol>
                  <li><strong>No hook</strong> — starting with "Hey guys, so today I wanted to..." is a death sentence. Get to the point.</li>
                  <li><strong>Over-editing</strong> — there's a sweet spot. Too many effects and it feels try-hard. Keep it clean.</li>
                  <li><strong>Ignoring trends</strong> — you don't have to follow every trend, but being aware of what's working gives you an edge.</li>
                  <li><strong>Posting and ghosting</strong> — engage with comments in the first hour. The algorithm watches early engagement.</li>
                  <li><strong>Trying to be perfect</strong> — authenticity beats production value. A raw, honest video will outperform a polished boring one every time.</li>
                  <li><strong>Not analyzing what works</strong> — check your analytics weekly. Double down on what's working, drop what isn't.</li>
                </ol>
              </section>

              <section id="shortie-pitch" className="blog-cta-section">
                <h2>Don't Want to Do All This Yourself?</h2>
                <p>Look, we get it. This is a lot. Between scripting hooks, editing like a maniac, posting 3x a day, and keeping up with trends — it's basically a full-time job.</p>
                <p>That's literally why Shortie exists.</p>
                <p>We handle everything — the clipping, the editing, the captions, the sound design, the posting. You focus on what you're good at (streaming, creating, running your business), and we turn your content into scroll-stopping shorts that actually grow your audience.</p>
                <div className="blog-cta-box">
                  <h3>Ready to stop overthinking and start going viral?</h3>
                  <p>We've helped creators and brands grow from zero to thousands of followers with professional short-form content. Let's do the same for you.</p>
                  <a href="/#contact" className="btn btn-primary">
                    Get Started With Shortie <ArrowRight size={16} />
                  </a>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
    </main>

    <footer className="blog-footer">
      <div className="container blog-footer-inner">
        <p>&copy; 2026 Shortie. All rights reserved.</p>
      </div>
    </footer>
  </Layout>
);

export default BlogPost;
