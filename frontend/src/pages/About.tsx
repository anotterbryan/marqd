import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

export default function About() {
  return (
    <div style={{ background: 'var(--bg-base)', paddingTop: '80px' }}>

      {/* Page header */}
      <header style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 4vw, 3rem)',
        maxWidth: '860px',
        margin: '0 auto',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1rem' }}>About</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          lineHeight: 1.2,
        }}>
          A living archive.<br />Built to last.
        </h1>
      </header>

      {/* Section 1 — The Project */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>The Project</p>
        <hr className="pride-rule" style={{ marginBottom: '2.5rem' }} />

        <p style={{ ...bodyStyle, marginBottom: '1.25rem' }}>
          In 1969, no one thought the notes slipped between strangers at the Stonewall Inn would become history.
          They were just moments — a touch, a look, a night. But those moments, accumulated and preserved,
          became the primary evidence of a community's existence, resistance, and humanity.
        </p>
        <p style={{ ...bodyStyle, marginBottom: '1.25rem' }}>
          Marq'd is built on a simple belief: <em style={{ color: 'var(--text-primary)' }}>queer stories are primary sources.</em> Not secondary.
          Not anecdotal. Not supplementary. Primary — meaning they are the original, firsthand evidence of queer life
          as it was actually lived, in real places, by real people, at real moments in time.
        </p>
        <p style={bodyStyle}>
          The archive creates records that official history refuses to keep. Every story submitted — whether
          from Lagos or Louisiana, Tehran or Tennessee — adds to an irreplaceable geographic and temporal
          archive of queer existence. In 64 countries where same-sex relationships are criminalized,
          no official record exists. Every dot on this globe is evidence that we were there.
        </p>

        <blockquote style={{
          margin: '2.5rem 0',
          padding: '0 0 0 1.5rem',
          borderLeft: '2px solid var(--accent-gold)',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            lineHeight: 1.6,
          }}>
            "The most radical act a queer person can perform is to leave evidence of their existence."
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            marginTop: '0.75rem',
          }}>
            — Marq'd founding principle
          </p>
        </blockquote>
      </section>

      {/* Section 2 — The Founder */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>The Founder</p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            {/* Photo placeholder */}
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-visible)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                color: 'var(--text-muted)',
              }}>λ</span>
            </div>

            <div style={{ flex: 1, minWidth: '240px' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
              }}>
                Bryan
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}>
                Founder, Marq'd
              </p>

              {/*
                <!-- BRYAN: Write your founder statement in your own words below.
                     First person. Why did you build this? What does this mean to you?
                     There are no wrong answers — this is your project and your name on it.
                     Replace this paragraph with your text when ready. -->
              */}
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}>
                Founder statement coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where We're Headed */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Where We're Headed</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--accent-gold)',
              letterSpacing: '0.1em',
              marginBottom: '0.6rem',
            }}>
              Phase 1 — The Archive ⚙️ In Development
            </p>
            <p style={bodyStyle}>
              A fully functional, live archive. Real stories. Real coordinates. Permanent records.
              Story submission with no account required, AI-read audio in four voice options,
              photo documentation of spaces, reactions, and the full archive entry format —
              record numbers, permanent IDs, and academic-grade citation support.
            </p>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '0.6rem',
            }}>
              Phase 2 — The Community 🔭 Planned
            </p>
            <p style={bodyStyle}>
              Optional identity and social connection — without compromising the anonymous core.
              Profiles, privacy controls, a Near Me feed, user voice uploads, threaded comments,
              and the infrastructure for queer-friendly advertising partnerships.
            </p>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '0.6rem',
            }}>
              Phase 3 — The Institution 🔭 Aspirational
            </p>
            <p style={bodyStyle}>
              Marq'd becomes a recognized resource for researchers, historians, and human rights advocates.
              A time-scrubber showing the archive grow chronologically. A legal context layer showing
              LGBTQ+ legal status by country. Research exports, archival snapshots, translations into
              ten languages, and a Tor-friendly access path for contributors in high-risk regions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Get Involved */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Get Involved</p>

          <p style={{ ...bodyStyle, maxWidth: '640px', marginBottom: '2rem' }}>
            Marq'd is one person with a vision and a lot of work ahead.
            If you're a developer, designer, archivist, human rights advocate,
            or someone who simply believes in this — reach out.
          </p>

          <Link to="/contact" className="btn-gold">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Section 5 — Partnership Vision */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem)',
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Partnership Vision</p>

        <p style={{ ...bodyStyle, marginBottom: '1.75rem', maxWidth: '640px' }}>
          As the archive grows, these relationships become invaluable. They are ambitions, not current partnerships —
          but they represent the kind of institution Marq'd intends to become.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { name: 'ILGA World', desc: 'Global authority on LGBTQ+ legal rights — their country-level data could power the legal context layer.' },
            { name: 'ONE Archives at USC', desc: 'Largest repository of LGBTQ+ materials in the world. A potential archival partnership.' },
            { name: 'Rainbow Railroad', desc: 'Helps LGBTQ+ people escape state-sponsored violence. Deep alignment on mission.' },
            { name: 'OutRight Action International', desc: 'Human rights documentation. Potential co-research on the archive as evidence.' },
            { name: 'Equaldex', desc: 'Crowdsourced LGBTQ+ rights database. Potential data integration for the legal layer.' },
          ].map((org) => (
            <div key={org.name} style={{
              padding: '1rem',
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-gold)',
                letterSpacing: '0.05em',
                marginBottom: '0.3rem',
              }}>
                {org.name}
              </p>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 300,
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}>
                {org.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 — Press & Media */}
      <section style={{
        padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 6vw, 4rem)',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Press & Media</p>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 300,
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
          }}>
            For press inquiries, please use the{' '}
            <Link to="/contact" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>
              contact form
            </Link>{' '}
            and select "Press" as the subject.
          </p>
        </div>
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
