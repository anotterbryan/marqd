import { useState } from 'react';
import Footer from '../components/Footer/Footer';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xreygoeq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong — your message is safe, please try again.');
      }
    } catch {
      alert('Something went wrong — your message is safe, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg-base)', paddingTop: '80px' }}>
      <header style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 4vw, 3rem)',
        maxWidth: '720px',
        margin: '0 auto',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1rem' }}>Contact</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          lineHeight: 1.2,
          marginBottom: '1.25rem',
        }}>
          We're listening.
        </h1>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}>
          Whether you want to share a story, propose a partnership, get involved in building Marq'd,
          or just say something — we're listening.
        </p>
      </header>

      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        maxWidth: '720px',
        margin: '0 auto',
      }}>
        {submitted ? (
          <div style={{
            padding: '3rem',
            border: '1px solid var(--border-visible)',
            borderRadius: '4px',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--accent-gold)',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>
              MESSAGE RECEIVED
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.4rem',
              color: 'var(--text-primary)',
              lineHeight: 1.4,
              marginBottom: '0.75rem',
            }}>
              Thank you.
            </p>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}>
              We read everything. We try to respond to most things.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ flex: '1 1 240px' }}>
                <label htmlFor="name" style={labelStyle}>Name <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>(optional)</span></label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  style={inputStyle}
                  autoComplete="name"
                />
              </div>
              <div style={{ flex: '1 1 240px' }}>
                <label htmlFor="email" style={labelStyle}>Email <span style={{ color: 'var(--accent-rose)', fontSize: '0.65rem' }}>*</span></label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <select id="subject" name="subject" style={inputStyle}>
                <option value="General">General</option>
                <option value="Partnership">Partnership</option>
                <option value="Press">Press</option>
                <option value="Advertising">Advertising</option>
                <option value="Get Involved">Get Involved</option>
                <option value="Safety Report">Safety Report</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="What's on your mind?"
                style={{ ...inputStyle, resize: 'vertical', minHeight: '160px' }}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold"
                style={{ width: '100%', opacity: submitting ? 0.6 : 1 }}
              >
                {submitting ? 'Sending...' : 'Send it'}
              </button>
            </div>
          </form>
        )}

        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 300,
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
          }}>
            We read everything. We try to respond to most things.
          </p>

          <div style={{
            padding: '1rem',
            border: '1px solid var(--border-subtle)',
            borderRadius: '4px',
            borderLeft: '2px solid var(--accent-rose)',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--accent-rose)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
            }}>
              Safety note
            </p>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}>
              To report content or a safety concern, select "Safety Report" above. These are prioritized.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.65rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '0.5rem',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--bg-surface)',
  border: '1px solid var(--border-visible)',
  borderRadius: '2px',
  padding: '0.7rem 0.875rem',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-ui)',
  fontWeight: 300,
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-out)',
};
