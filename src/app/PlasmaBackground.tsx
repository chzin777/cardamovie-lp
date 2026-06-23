'use client';

import { useEffect, useState } from 'react';
import Plasma from './Plasma';

// Fundo Plasma só no desktop e sem prefers-reduced-motion (shader é pesado).
export default function PlasmaBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!enabled) return null;

  return (
    <Plasma
      color="#E33935"
      speed={0.7}
      direction="forward"
      scale={1.4}
      opacity={1}
      mouseInteractive={false}
      resolutionScale={0.4}
      maxFps={30}
    />
  );
}
