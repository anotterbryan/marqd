import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Globe from '../components/Globe/Globe';
import StoryDrawer from '../components/StoryDrawer/StoryDrawer';
import SubmitModal from '../components/SubmitModal/SubmitModal';
import Footer from '../components/Footer/Footer';
import { useMarqs } from '../hooks/useMarqs';
import type { MarqLocation } from '../types';

export default function Home() {
  const { marqs } = useMarqs();
  const [selectedLocation, setSelectedLocation] = useState<MarqLocation | null>(null);
  const [submitOpen, setSubmitOpen] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const belowFoldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setTaglineVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    belowFoldRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'var(--bg-base)' }}>
      {/* Above fold — full screen globe */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: 'var(--bg-base)',
      }}>
        <Globe marqs={marqs} onLocationClick={setSelectedLocation} />

        {/* Centered tagline overlay */}
        <div style={{
          position: 'absolute',
          bottom: '18vh',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          pointerEvents: 'none',
          zIndex: 10,
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            color: 'var(--text-primary)',
            letterSpacing: '0.02em',
            opacity: taglineVisible ? 1 : 0,
            transform: taglineVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 1s var(--ease-out), transform 1s var(--ease-out)',
            textShadow: '0 2px 20px rgba(0,0,0,0.8)',
          }}>
            "Q marks the spot."
          </p>
          <div style={{ pointerEvents: 'auto', opacity: taglineVisible ? 1 : 0, transition: 'opacity 1.2s var(--ease-out) 0.3s' }}>
            <button
              onClick={() => setSubmitOpen(true)}
              className="btn-ghost"
              style={{
                background: 'rgba(7,9,15,0.5)',
                backdropFilter: 'blur(4px)',
              }}
            >
              Leave your Marq
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            zIndex: 10,
            opacity: taglineVisible ? 0.6 : 0,
            transition: 'opacity 1.5s var(--ease-out) 0.8s',
          }}
          aria-label="Scroll to learn more"
        >
          <span>Scroll</span>
          <span style={{ fontSize: '0.8rem' }}>↓</span>
        </button>
      </section>

      {/* Below fold */}
      <div ref={belowFoldRef} style={{ background: 'var(--bg-base)' }}>

        {/* Section 1 — What is Marq'd? */}
        <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)', maxWidth: '860px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>About the Archive</p>
          <hr className="pride-rule" style={{ marginBottom: '2.5rem' }} />

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '1.25rem',
            lineHeight: 1.25,
          }}>
            Marq'd is a living archive<br />of queer existence.
          </h2>

          <p style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 300,
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
            maxWidth: '680px',
          }}>
            Every dot on this globe is a story — anonymous, geographic, permanent.
            People from every corner of the world share moments tied to real coordinates.
            Those moments become primary source history, written by the people who lived it.
            No journalist needed. No official record required. Just the truth of a life, placed on a map.
          </p>
        </section>

        {/* Section 2 — Why It Matters */}
        <section style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)',
          background: 'var(--bg-surface)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '1.75rem',
            }}>
              64 countries criminalize<br />same-sex relationships.
            </p>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: '1.25rem',
            }}>
              In most of them, no official record of queer life exists.
              No archives. No history. The official record says: <em>we were not there.</em>
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.3rem',
              color: 'var(--accent-gold)',
            }}>
              Marq'd is that record.
            </p>
          </div>
        </section>

        {/* Section 3 — How It Works */}
        <section style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)',
          maxWidth: '860px',
          margin: '0 auto',
        }}>
          <p className="eyebrow" style={{ marginBottom: '2rem' }}>How it works</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              'Drop a pin anywhere on the globe',
              'Tell us what happened — text, voice, or both',
              'Your Marq is assigned a permanent record number',
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  color: 'var(--accent-gold)',
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: '2px',
                }}>λ</span>
                <p style={{
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 300,
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Early Development */}
        <section style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Marq'd is in active development</p>

            <p style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              maxWidth: '620px',
            }}>
              Story submission, voice recordings, photography, and the full live archive
              are coming in Phase 1.
            </p>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
            }}>
              Want to be part of building this?
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/support" className="btn-gold">Support the Archive</Link>
              <Link to="/contact" className="btn-ghost">Get Involved</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <StoryDrawer location={selectedLocation} onClose={() => setSelectedLocation(null)} />
      <SubmitModal isOpen={submitOpen} onClose={() => setSubmitOpen(false)} />
    </div>
  );
}
