'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import BorderGlow from './BorderGlow';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

// Envolve BorderGlow. No mobile, dispara a animação ao entrar na viewport.
export default function GlowCard({ children, className = '' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <BorderGlow
        edgeSensitivity={30}
        glowColor="24 87 55"
        backgroundColor="#171211"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={animated}
        colors={['#F07928', '#F07928', '#F07928']}
        className="h-full"
      >
        {children}
      </BorderGlow>
    </div>
  );
}
