import type { ArchiveEntryData } from '../../types';
import CiteButton from './CiteButton';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

interface ArchiveEntryProps {
  entry: ArchiveEntryData;
}

export default function ArchiveEntry({ entry }: ArchiveEntryProps) {
  const { recordNumber, city, country, date, setting, mood, excerpt, tags, audioPlaceholder, photoCount, readTime, reactions } = entry;

  return (
    <article style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      {/* Eyebrow */}
      <div style={{
        padding: '0.75rem 1rem',
        borderBottom: '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span>Field Record</span>
        <span>#{recordNumber}</span>
      </div>

      {/* Location + metadata */}
      <div style={{ padding: '1rem 1rem 0' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '1.15rem',
          color: 'var(--accent-gold)',
          marginBottom: '0.35rem',
          lineHeight: 1.3,
        }}>
          {city}, {country}
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.04em',
          marginBottom: '1rem',
        }}>
          {date} · {setting} · {mood}
        </p>

        {/* Excerpt */}
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            color: 'var(--accent-gold)',
            lineHeight: 0.6,
            float: 'left',
            marginRight: '0.2rem',
            marginTop: '0.5rem',
            opacity: 0.8,
          }}>"</span>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 300,
            fontSize: '0.9rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)',
            overflow: 'hidden',
          }}>
            {excerpt}
          </p>
        </div>

        {/* Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          marginBottom: '0.75rem',
        }}>
          {tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.05em',
            }}>
              [{tag}]
            </span>
          ))}
        </div>
      </div>

      {/* Audio / photo / read time row */}
      <div style={{
        padding: '0.6rem 1rem',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        {audioPlaceholder && <AudioPlayer />}
        {photoCount > 0 && (
          <span
            title="Photo records — coming in Phase 1"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              cursor: 'default',
              opacity: 0.6,
            }}
          >
            📷 {photoCount} photo{photoCount !== 1 ? 's' : ''}
          </span>
        )}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          marginLeft: 'auto',
        }}>
          {readTime}
        </span>
      </div>

      {/* Reactions */}
      <div style={{
        padding: '0.6rem 1rem',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        gap: '1.25rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
      }}>
        <span aria-label={`${reactions.fire} fire reactions`}>🔥 {reactions.fire}</span>
        <span aria-label={`${reactions.eyes} eyes reactions`}>👀 {reactions.eyes}</span>
        <span aria-label={`${reactions.comment} comments`}>💬 {reactions.comment}</span>
        <span aria-label={`${reactions.lips} lips reactions`}>🫦 {reactions.lips}</span>
      </div>

      {/* Cite */}
      <div style={{ padding: '0.6rem 1rem' }}>
        <CiteButton
          recordNumber={recordNumber}
          city={city}
          country={country}
          date={date}
        />
      </div>
    </article>
  );
}
