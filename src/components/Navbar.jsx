import React, { useState, useEffect } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} id="top">
      <div className="container nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span className="brand-text">
            <span className="brand-name">Shortie</span>
            <span className="brand-sub">Short-form studio</span>
          </span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#portfolio" className="btn btn-ghost">
            See work
          </a>
          <a href="#contact" className="btn btn-primary">
            Book a slot
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
            href="#contact"
            className="btn btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a slot
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
