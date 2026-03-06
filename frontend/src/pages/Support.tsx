import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

export default function Support() {
  return (
    <div style={{ background: 'var(--bg-base)', paddingTop: '80px' }}>
      <header style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 4vw, 3rem)',
        maxWidth: '860px',
        margin: '0 auto',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1rem' }}>Support the Archive</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          lineHeight: 1.2,
        }}>
          Keep the record alive.
        </h1>
      </header>

      {/* Section 1 — Why Support Matters */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Why Support Matters</p>

        <p style={{ ...bodyStyle, maxWidth: '660px' }}>
          Marq'd is free to use and always will be. But hosting, storage, moderation, and development cost real money.
          Your support keeps the archive alive, independent, and in service of the communities it exists for — not advertisers,
          not investors. Just the record.
        </p>
      </section>

      {/* Section 2 — Donate */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Donate</p>
          <hr className="pride-rule" style={{ marginBottom: '2.5rem' }} />

          {/*
            <!-- BRYAN: Replace this block with the Open Collective embed widget
                 once your Open Collective page is live at opencollective.com/marqd.
                 You can embed their widget using the script they provide, or simply
                 update the link below to point to your actual OC page. -->
          */}
          <div style={{
            padding: '2rem',
            border: '1px solid var(--border-visible)',
            borderRadius: '4px',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>
              OPEN COLLECTIVE
            </p>
            <a
              href="https://opencollective.com/marqd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ display: 'inline-block' }}
            >
              Donate via Open Collective →
            </a>
          </div>

          {/* Tiers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1px',
            background: 'var(--border-subtle)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {[
              { tier: 'Reader', amount: 'Any one-time amount' },
              { tier: 'Contributor', amount: '$5 / month' },
              { tier: 'Archivist', amount: '$15 / month' },
              { tier: 'Patron', amount: '$50 / month' },
            ].map(({ tier, amount }) => (
              <div key={tier} style={{
                background: 'var(--bg-surface)',
                padding: '1.25rem 1rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-gold)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.3rem',
                }}>
                  {tier}
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em',
                }}>
                  {amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Get Involved */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Get Involved</p>

        <p style={{ ...bodyStyle, maxWidth: '640px', marginBottom: '2rem' }}>
          Marq'd is one person with a vision and a lot of work ahead. If you're a developer, designer,
          archivist, human rights advocate, or just someone who believes in this — reach out.
          We'd love to have you.
        </p>

        <Link to="/contact" className="btn-ghost">
          Get in Touch
        </Link>
      </section>

      {/* Section 4 — What Your Support Funds */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>What Your Support Funds</p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Hosting and infrastructure',
              'Storage for stories, audio, and photographs',
              'Content moderation and community safety',
              'Legal and privacy compliance',
              'Development and new features',
              'Translations and international accessibility',
            ].map((item) => (
              <li key={item} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
              }}>
                <span style={{ color: 'var(--accent-gold)', opacity: 0.6 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 — Organizations */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Organizations</p>

        <p style={{ ...bodyStyle, maxWidth: '620px', marginBottom: '2rem' }}>
          If you represent an institution, foundation, or organization interested in supporting or
          partnering with Marq'd, please get in touch. We'd be glad to talk.
        </p>

        <Link to="/contact" className="btn-ghost">
          Institutional Inquiry →
        </Link>
      </section>

      {/* Closing */}
      <section style={{
        padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 6vw, 4rem)',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--text-muted)',
        }}>
          Every dollar goes toward keeping the record intact.
        </p>
      </section>

      <Footer />
    </div>
  );
}

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontWeight: 300,
  fontSize: '1rem',
  lineHeight: 1.85,
  color: 'var(--text-secondary)',
};
