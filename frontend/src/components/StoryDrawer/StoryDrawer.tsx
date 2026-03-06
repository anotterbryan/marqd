import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { MarqLocation } from '../../types';
import { mockEntries } from '../../data/seedMarqs';
import ArchiveEntry from '../ArchiveEntry/ArchiveEntry';

interface StoryDrawerProps {
  location: MarqLocation | null;
  onClose: () => void;
}

export default function StoryDrawer({ location, onClose }: StoryDrawerProps) {
  const isOpen = location !== null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  // Use mock entries with city/country overridden to match the clicked location
  const entries = mockEntries.slice(0, Math.min(location.count, 3)).map((e) => ({
    ...e,
    city: location.city,
    country: location.country,
    recordNumber: `MQ-${String(Math.floor(Math.random() * 90000) + 10000).padStart(6, '0')}`,
  }));

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(7, 9, 15, 0.7)',
          backdropFilter: 'blur(4px)',
          zIndex: 200,
          animation: 'fadeIn var(--duration-slow) var(--ease-out) forwards',
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        style={{
          position: 'fixed',
          zIndex: 201,
          background: 'var(--bg-surface)',
          overflowY: 'auto',
          // Desktop: right panel
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(440px, 100vw)',
          borderLeft: '1px solid var(--border-subtle)',
          animation: 'slideInRight var(--duration-slow) var(--ease-out) forwards',
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`Archive entries for ${location.city}, ${location.country}`}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.25rem 1rem',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'sticky',
          top: 0,
          background: 'var(--bg-surface)',
          zIndex: 1,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.4,
                marginTop: '2px',
              }}>λ</span>
              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--accent-gold)',
                  lineHeight: 1.3,
                }}>
                  {location.city}, {location.country}
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  marginTop: '0.2rem',
                }}>
                  {location.count} record{location.count !== 1 ? 's' : ''} · Since 2024
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '0.2rem',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Close drawer"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile close handle hint (visual only) */}
        <div style={{
          position: 'absolute',
          top: '0.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '36px',
          height: '3px',
          background: 'var(--border-visible)',
          borderRadius: '2px',
          display: 'none', // shown via CSS media query
        }} className="drawer-handle" />

        {/* Entries */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.25rem',
          }}>
            Field Records — {location.city}
          </p>

          {entries.map((entry) => (
            <ArchiveEntry key={entry.recordNumber} entry={entry} />
          ))}

          {location.count > 3 && (
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              padding: '0.5rem 0',
              letterSpacing: '0.05em',
            }}>
              +{location.count - 3} more records · Full archive coming in Phase 1
            </p>
          )}
        </div>
      </aside>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes slideInRight { from { transform: none; } }
          @keyframes fadeIn { from { opacity: 1; } }
        }
      `}</style>
    </>
  );
}
