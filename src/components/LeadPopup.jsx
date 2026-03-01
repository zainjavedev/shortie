import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useForm } from '@formspree/react';

const POPUP_STORAGE_KEY = 'leadPopupDismissed';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const [state, submitToFormspree] = useForm('mblnjvoo');

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const dismissed = localStorage.getItem(POPUP_STORAGE_KEY);
    if (dismissed === 'true') return undefined;
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setContact('');
      setError('');
      setIsOpen(false);
      if (typeof window !== 'undefined') {
        localStorage.setItem(POPUP_STORAGE_KEY, 'true');
      }
    }
  }, [state.succeeded]);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(POPUP_STORAGE_KEY, 'true');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.trim()) {
      setError('Drop a handle or link so we can reach you.');
      return;
    }
    setError('');
    await submitToFormspree(e);
  };

  if (!isOpen) return null;

  return (
    <div className="lead-popup-overlay" role="dialog" aria-modal="true">
      <div className="lead-popup-card">
        <button className="lead-popup-close" type="button" onClick={handleClose} aria-label="Close popup">
          <X size={16} />
        </button>
        <div className="lead-popup-eyebrow">Free short</div>
        <div className="lead-popup-title">Want a free short on us?</div>
        <p className="lead-popup-subtitle">
          Drop your email, phone, Discord, Reddit, WhatsApp - anything. We'll find you and text you :)
        </p>
        <form className="lead-popup-form" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="_subject" value="Popup offer - Free short lead" />
          <input type="hidden" name="source" value="Popup offer" />
          <input
            type="text"
            name="message"
            className={`lead-popup-input${error ? ' input-error' : ''}`}
            placeholder="e.g. Discord: yourname#0001 or WhatsApp: +1 555 123 4567"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {error && <span className="error-text">{error}</span>}
          <button className="btn btn-primary lead-popup-submit" type="submit" disabled={state.submitting}>
            {state.submitting ? 'Sending…' : 'Claim my free short'}
          </button>
          <div className="lead-popup-note">No spam. One quick message and that's it.</div>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
