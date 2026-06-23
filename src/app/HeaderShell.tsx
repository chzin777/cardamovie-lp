'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export default function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-colors duration-300 lg:absolute lg:bg-transparent lg:backdrop-blur-none ${
        scrolled ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {children}
    </header>
  );
}
