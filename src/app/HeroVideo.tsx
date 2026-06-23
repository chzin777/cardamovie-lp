'use client';

import { useEffect, useRef, useState } from 'react';

const SRC = '/videos/hero-web.mp4';
const START = 0;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const seekStart = () => {
      try {
        v.currentTime = START;
      } catch {}
    };
    const forcePlay = () => {
      v.muted = true;
      const p = v.play();
      if (p) p.catch(() => {});
    };
    const onLoaded = () => {
      seekStart();
      forcePlay();
    };
    const onEnded = () => {
      seekStart();
      forcePlay();
    };
    const onPlaying = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onVisibility = () => {
      if (document.visibilityState === 'visible') forcePlay();
    };

    v.addEventListener('loadedmetadata', onLoaded);
    v.addEventListener('ended', onEnded);
    v.addEventListener('playing', onPlaying);
    v.addEventListener('pause', onPause);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('focus', onVisibility);

    if (v.readyState >= 1) onLoaded();

    return () => {
      v.removeEventListener('loadedmetadata', onLoaded);
      v.removeEventListener('ended', onEnded);
      v.removeEventListener('playing', onPlaying);
      v.removeEventListener('pause', onPause);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('focus', onVisibility);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="pointer-events-none absolute right-[-6vw] top-1/2 h-full w-auto min-w-full -translate-y-1/2 object-cover"
        src={SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      {/* cobre o vídeo até ele tocar de fato (sem flash) */}
      <div
        className={`pointer-events-none absolute inset-0 bg-[#121212] transition-opacity duration-500 ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
