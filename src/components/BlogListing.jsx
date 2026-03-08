import React from 'react';
import Layout from './Layout';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const POSTS = [
  {
    slug: 'how-to-go-viral-with-short-form-content',
    title: 'How to Go Viral With Short-Form Content (Step-by-Step)',
    excerpt: 'A no-fluff, step-by-step guide to creating short-form videos that actually blow up on TikTok, YouTube Shorts, and Instagram Reels.',
    date: 'Mar 9, 2026',
    readTime: '10 min read',
    tag: 'Strategy',
  },
];

const BlogListing = () => (
  <Layout showPopup={false}>
    <main>
      <section className="blog-hero">
        <div className="container">
          <span className="eyebrow blog-eyebrow">Blog</span>
          <h1 className="heading-xl blog-hero-title">Tips, Strategies & <span className="highlight">Behind the Scenes</span></h1>
          <p className="lead blog-hero-lead">Everything we know about going viral with short-form content — no gatekeeping.</p>
        </div>
      </section>

      <section className="blog-listing-section">
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}.html`} className="blog-card">
                <div className="blog-card-body">
                  <span className="blog-card-tag">{post.tag}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span className="blog-card-meta-item"><Calendar size={14} /> {post.date}</span>
                    <span className="blog-card-meta-item"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <span className="blog-card-link">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>

    <footer className="blog-footer">
      <div className="container blog-footer-inner">
        <p>&copy; 2026 Shortie. All rights reserved.</p>
      </div>
    </footer>
  </Layout>
);

export default BlogListing;
