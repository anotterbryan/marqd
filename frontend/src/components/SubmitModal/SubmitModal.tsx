// Full 5-step submission flow built in Phase 1.
// For founding site: renders "coming soon" state only.

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubmitModal({ isOpen, onClose }: SubmitModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(7, 9, 15, 0.88)',
          backdropFilter: 'blur(4px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
        aria-modal="true"
        role="dialog"
        aria-label="Coming soon"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-visible)',
            borderRadius: '4px',
            padding: '2.5rem',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            λ λ λ
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '1.4rem',
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
            lineHeight: 1.3,
          }}>
            Story submission<br />is coming in Phase 1.
          </h2>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 300,
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '1.75rem',
          }}>
            The full submission flow — including voice recordings and photos — is currently in development.
            The archive will open for contributions soon.
          </p>
          <button onClick={onClose} className="btn-ghost" style={{ width: '100%' }}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
