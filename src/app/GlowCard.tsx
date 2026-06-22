'use client';

import { useEffect, useState, type ReactNode } from 'react';
import BorderGlow from './BorderGlow';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

// Desktop: BorderGlow animado. Mobile: card estático leve (sem rAF/blend) p/ performance.
export default function GlowCard({ children, className = '' }: GlowCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Antes do mount e no mobile: card estático (zero animação, zero blend).
  if (!mounted || isMobile) {
    return (
      <div
        className={`h-full rounded-[28px] border border-white/15 bg-[#171211] ${className}`.trim()}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      <BorderGlow
        edgeSensitivity={30}
        glowColor="24 87 55"
        backgroundColor="#171211"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={['#F07928', '#F07928', '#F07928']}
        className="h-full"
      >
        {children}
      </BorderGlow>
    </div>
  );
}
