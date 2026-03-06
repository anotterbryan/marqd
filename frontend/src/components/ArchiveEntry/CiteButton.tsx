import { useState } from 'react';

interface CiteButtonProps {
  recordNumber: string;
  city: string;
  country: string;
  date: string;
}

export default function CiteButton({ recordNumber, city, country, date }: CiteButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCite = async () => {
    const citation = `Marq'd Archive. Field Record #${recordNumber}. ${city}, ${country}. ${date}.\nRetrieved from https://marqd.org/archive/${recordNumber}`;

    try {
      await navigator.clipboard.writeText(citation);
    } catch {
      // Fallback for environments without clipboard API
      const ta = document.createElement('textarea');
      ta.value = citation;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCite}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: copied ? 'var(--accent-gold)' : 'var(--text-muted)',
        letterSpacing: '0.05em',
        padding: 0,
        transition: 'color var(--duration-base) var(--ease-out)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
      }}
      aria-label="Copy citation for this archive entry"
    >
      {copied ? 'Copied to clipboard ✓' : 'Cite this entry →'}
    </button>
  );
}
