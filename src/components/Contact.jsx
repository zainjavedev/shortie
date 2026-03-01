import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import { Mail, Instagram, Youtube, Twitter } from 'lucide-react';

const Contact = ({ id = 'contact', subject = 'Footer contact - Shortie lead', source = 'Footer form' }) => {
    const [form, setForm] = useState({ message: '' });
    const [errors, setErrors] = useState({});
    const [state, submitToFormspree] = useForm('mblnjvoo');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('contactSubmitted');
            if (saved === 'true') setIsSubmitted(true);
        }
    }, []);

    const validate = () => {
        const nextErrors = {};
        if (!form.message.trim()) nextErrors.message = 'Drop a handle or link so we can reach you.';
        return nextErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) {
            await submitToFormspree(e);
        }
    };

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };

    useEffect(() => {
        if (state.succeeded) {
            alert('Email sent successfully!');
            setForm({ message: '' });
            setErrors({});
            setIsSubmitted(true);
            if (typeof window !== 'undefined') {
                localStorage.setItem('contactSubmitted', 'true');
            }
        }
    }, [state.succeeded]);

    return (
        <footer id={id} className="contact">
            <div className="container contact-grid">
                <div className="cta-card centered">
                    <span className="eyebrow">Let's talk</span>
                    <div className="cta-title">Ready to automate your content creation?</div>
                    <p className="cta-desc">
                        Drop links (or rough ideas) once. We clip, caption, and ship shorts on repeat while you sip coffee and binge Netflix.
                    </p>
                    <p className="cta-desc">
                        Relax - we handle hooks, motion, posting cadence, and testing. You stay in creator mode; we do the heavy lifting.
                    </p>
                </div>

                {isSubmitted ? (
                    <div className="contact-form thankyou-card">
                        <div className="form-head">
                            <div className="form-title">Thanks! You’re on autopilot.</div>
                            <p className="form-subtitle">
                                We’ve got your request. We’ll follow up with a cut plan, delivery schedule, and first draft angles.
                            </p>
                        </div>
                        <div className="cta-list">
                            <span className="chip">We respond within one business day</span>
                            <span className="chip">You relax, we edit</span>
                        </div>
                        <a className="btn btn-ghost" href="#portfolio">
                            View more samples
                        </a>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <input type="hidden" name="_subject" value={subject} />
                        <input type="hidden" name="source" value={source} />
                        <div className="form-head">
                            <div className="form-title">Drop your best contact</div>
                            <p className="form-subtitle">Discord, Reddit, WhatsApp, IG - anything. We'll find you and text you :)</p>
                        </div>
                        <label className="form-group">
                            <span className="input-label">What kind of shorts do you want, and how should we reach you?</span>
                            <textarea
                                placeholder="e.g. Discord: yourname#0001, WhatsApp: +1 555 123 4567, Reddit: u/yourname"
                                rows="6"
                                name="message"
                                className={`textarea ${errors.message ? 'input-error' : ''}`}
                                value={form.message}
                                onChange={handleChange('message')}
                            />
                            {errors.message && <span className="error-text">{errors.message}</span>}
                        </label>
                        <div className="form-note">
                            We reply within one business day. No spam, ever.
                            {state.succeeded && <span className="form-note success-text"> Thanks! We got it.</span>}
                        </div>
                        <button className="btn btn-primary" type="submit" disabled={state.submitting}>
                            {state.submitting ? 'Sending…' : 'Send message'}
                        </button>
                    </form>
                )}
            </div>

            <div className="footer-note">
                ©
                {' '}
                {new Date().getFullYear()}
                {' '}
                Shortie - short-form studio for founders and creators.
            </div>
        </footer>
    );
};

export default Contact;
