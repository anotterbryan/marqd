import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-surface)',
      padding: '3rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '2rem',
          marginBottom: '2.5rem',
        }}>
          <div>
            <Link to="/" className="wordmark" style={{ fontSize: '1.25rem', display: 'block', marginBottom: '0.5rem' }}>
              Marq<span className="apostrophe">'</span>d
            </Link>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              maxWidth: '260px',
              lineHeight: 1.6,
            }}>
              A living archive of queer existence.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
              <li><FooterLink to="/support">Support</FooterLink></li>
            </ul>
          </nav>

          <Link to="/support" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--accent-gold)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
            alignSelf: 'flex-start',
          }}>
            Keep the archive alive →
          </Link>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}>
            © {year} Marq'd — All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={legalLinkStyle}>Privacy</a>
            <a href="#" style={legalLinkStyle}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} style={{
      fontFamily: 'var(--font-ui)',
      fontSize: '0.875rem',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'color var(--duration-fast)',
    }}>
      {children}
    </Link>
  );
}

const legalLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.7rem',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  letterSpacing: '0.05em',
};
