import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import { Mail, Instagram, Youtube, Twitter } from 'lucide-react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', service: '', notes: '' });
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
        if (!form.name.trim()) nextErrors.name = 'Name is required.';
        if (!form.email.trim()) {
            nextErrors.email = 'Email is required.';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) {
            nextErrors.email = 'Enter a valid email.';
        }
        if (!form.service) nextErrors.service = 'Pick a service.';
        if (!form.notes.trim()) nextErrors.notes = 'Tell us what you need or share links.';
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
            setForm({ name: '', email: '', service: '', notes: '' });
            setErrors({});
            setIsSubmitted(true);
            if (typeof window !== 'undefined') {
                localStorage.setItem('contactSubmitted', 'true');
            }
        }
    }, [state.succeeded]);

    return (
        <footer id="contact" className="contact">
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
                        <div className="form-head">
                            <div className="form-title">Send your project</div>
                            <p className="form-subtitle">Links welcome, or describe the vibe you want.</p>
                        </div>
                        <div className="form-grid">
                            <label className="form-group">
                                <span className="input-label">Name</span>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    className={`input ${errors.name ? 'input-error' : ''}`}
                                    value={form.name}
                                    onChange={handleChange('name')}
                                />
                                {errors.name && <span className="error-text">{errors.name}</span>}
                            </label>
                            <label className="form-group">
                                <span className="input-label">Email</span>
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    name="email"
                                    className={`input ${errors.email ? 'input-error' : ''}`}
                                    value={form.email}
                                    onChange={handleChange('email')}
                                />
                                {errors.email && <span className="error-text">{errors.email}</span>}
                            </label>
                        </div>
                        <label className="form-group">
                            <span className="input-label">What you need</span>
                            <select
                                className={`select ${errors.service ? 'input-error' : ''}`}
                                name="service"
                                value={form.service}
                                onChange={handleChange('service')}
                            >
                                <option value="" disabled>Select service</option>
                            <option>Long form → short form</option>
                            <option>AI storytelling video</option>
                            <option>AI visual concepts</option>
                            <option>UGC-style ad</option>
                        </select>
                        {errors.service && <span className="error-text">{errors.service}</span>}
                    </label>
                        <label className="form-group">
                        <span className="input-label">What you need help with</span>
                        <textarea
                            placeholder="Tell us what you need help with—getting started, cutting shorts, or ideas."
                            rows="4"
                            name="message"
                            className={`textarea ${errors.notes ? 'input-error' : ''}`}
                            value={form.notes}
                            onChange={handleChange('notes')}
                            />
                            {errors.notes && <span className="error-text">{errors.notes}</span>}
                        </label>
                        <div className="form-note">
                            Replies within one business day. No spam, ever.
                            {state.succeeded && <span className="form-note success-text"> Thanks! We got it.</span>}
                        </div>
                        <button className="btn btn-primary" type="submit" disabled={state.submitting}>
                            {state.submitting ? 'Sending…' : 'Send my project'}
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
