import React, { useState, useEffect } from 'react';
import { Menu, Sparkles, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isPricingPage = typeof window !== 'undefined' && window.location.pathname.includes('pricing');
  const baseHref = isPricingPage ? '/' : '';
  const pricingHref = isPricingPage ? '#pricing' : '/pricing.html';
  const contactHref = isPricingPage ? '#pricing-contact' : '#contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it works', href: `${baseHref}#services` },
    { name: 'Portfolio', href: `${baseHref}#portfolio`, hasDropdown: true },
    { name: 'Pricing', href: pricingHref },
    { name: 'Blog', href: '/blog.html' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} id="top">
      <div className="container nav-inner">
        <a href={isPricingPage ? '/' : '#'} className="brand">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span className="brand-name">Shortie</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-item">
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href={contactHref} className="btn btn-nav-cta">
            Get Started
            <span className="nav-cta-arrow">›</span>
          </a>
        </div>

        <button className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu container">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={contactHref}
            className="btn btn-nav-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
