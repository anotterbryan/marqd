import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '1.25rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: `border-bottom 250ms var(--ease-out), background 250ms var(--ease-out)`,
    borderBottom: scrolled || !isHome ? '1px solid var(--border-subtle)' : '1px solid transparent',
    background: scrolled || !isHome ? 'var(--bg-overlay)' : 'transparent',
    backdropFilter: scrolled || !isHome ? 'blur(8px)' : 'none',
  };

  return (
    <nav style={navStyle} aria-label="Main navigation">
      <Link to="/" className="wordmark" style={{ fontSize: '1.35rem' }}>
        Marq<span className="apostrophe">'</span>d
      </Link>

      {/* Desktop nav */}
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        alignItems: 'center',
      }} className="hidden md:flex">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/support">Support</NavLink></li>
        <li>
          <Link to="/contact" className="btn-ghost" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
            Get Involved
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          padding: '0.25rem',
        }}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.5rem',
          zIndex: 99,
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li><NavLink to="/" mobile>Home</NavLink></li>
            <li><NavLink to="/about" mobile>About</NavLink></li>
            <li><NavLink to="/support" mobile>Support</NavLink></li>
            <li>
              <Link
                to="/contact"
                className="btn-ghost"
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, mobile }: { to: string; children: React.ReactNode; mobile?: boolean }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      style={{
        fontFamily: 'var(--font-ui)',
        fontSize: mobile ? '1rem' : '0.875rem',
        fontWeight: 400,
        color: active ? 'var(--accent-gold)' : 'var(--text-secondary)',
        textDecoration: 'none',
        transition: 'color var(--duration-fast) var(--ease-out)',
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </Link>
  );
}
