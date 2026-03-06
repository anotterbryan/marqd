// Full audio player built in Phase 1 (ElevenLabs integration).
// For founding site: renders as a visual placeholder.

export default function AudioPlayer() {
  return (
    <div
      title="Audio records — coming in Phase 1"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--text-muted)',
        cursor: 'default',
        userSelect: 'none',
      }}
      aria-label="Audio player — coming in Phase 1"
    >
      <span style={{ opacity: 0.5 }}>▶</span>
      <span style={{ opacity: 0.3, letterSpacing: '0.02em' }}>━━━━━━━━━━━━</span>
      <span style={{ opacity: 0.5 }}>0:00 / 0:00</span>
    </div>
  );
}
