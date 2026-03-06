import { useEffect, useRef } from 'react';
import type { MarqLocation } from '../../types';
import './globe.css';

interface GlobeProps {
  marqs: MarqLocation[];
  onLocationClick: (location: MarqLocation) => void;
}

export default function Globe({ marqs, onLocationClick }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let globe: any = null;
    let animFrame: number;
    let angle = 0;
    let mounted = true;

    const init = async () => {
      if (!containerRef.current || !mounted) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const GlobeModule = await import('globe.gl') as any;
      const GlobeGL = GlobeModule.default || GlobeModule;
      if (!containerRef.current || !mounted) return;

      globe = new GlobeGL({ element: containerRef.current });

      globe
        .backgroundColor('#07090f')
        .showAtmosphere(true)
        .atmosphereColor('#4ecdc4')
        .atmosphereAltitude(0.12)
        .globeImageUrl(
          'https://unpkg.com/three-globe@2.31.0/example/img/earth-night.jpg'
        )
        .pointsData(marqs)
        .pointLat((d: MarqLocation) => d.lat)
        .pointLng((d: MarqLocation) => d.lng)
        .pointAltitude((d: MarqLocation) => Math.min((d.count / 20) * 0.06 + 0.005, 0.08))
        .pointRadius((d: MarqLocation) => Math.min((d.count / 15) * 0.4 + 0.2, 0.7))
        .pointColor(() => '#4ecdc4')
        .pointLabel((d: MarqLocation) => {
          return `<div style="
            background: rgba(14,17,24,0.92);
            border: 1px solid rgba(255,255,255,0.14);
            border-radius: 2px;
            padding: 0.4rem 0.7rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.7rem;
            color: #f0ece4;
            pointer-events: none;
            white-space: nowrap;
          ">
            <span style="color: #e8c97a;">${d.city}</span>, ${d.country}
            <br/>
            <span style="color: #7a7d8a;">${d.count} record${d.count !== 1 ? 's' : ''}</span>
          </div>`;
        })
        .onPointClick((point: MarqLocation) => {
          onLocationClick(point);
        })
        .pointResolution(12)
        .width(containerRef.current.clientWidth)
        .height(containerRef.current.clientHeight);

      // Resize handler
      const handleResize = () => {
        if (containerRef.current && globe) {
          globe.width(containerRef.current.clientWidth);
          globe.height(containerRef.current.clientHeight);
        }
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      // Auto-rotation
      if (!prefersReducedMotion) {
        const rotate = () => {
          if (globe) {
            angle += 0.12;
            globe.pointOfView({ lat: 15, lng: angle }, 0);
          }
          animFrame = requestAnimationFrame(rotate);
        };
        rotate();

        // Pause rotation on user interaction
        containerRef.current?.addEventListener('pointerdown', () => {
          cancelAnimationFrame(animFrame);
        });
      }

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animFrame);
      };
    };

    const cleanupPromise = init();

    return () => {
      mounted = false;
      cancelAnimationFrame(animFrame);
      cleanupPromise.then((fn) => fn?.());
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} className="globe-container" aria-label="Interactive globe showing Marq'd archive locations" role="img" />;
}
