'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const MotionImage = motion.create(Image);

type Vals = Record<string, number>;

export default function ChefMascot({
  imgClassName,
  balloonClassName,
  initial,
  animate,
}: {
  imgClassName: string;
  balloonClassName: string;
  initial: Vals;
  animate: Vals;
}) {
  return (
    <>
      {/* glow atrás */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[90px]" />

      <MotionImage
        src="/images/chef 2.png"
        alt="Chef CardaMovie"
        width={1303}
        height={1207}
        className={imgClassName}
        initial={initial}
        whileInView={animate}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />

      {/* balão de fala */}
      <motion.div
        className={balloonClassName}
        initial={{ opacity: 0, scale: 0, rotate: 3 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.55 }}
      >
        Bora vender mais? 🔥
      </motion.div>
    </>
  );
}
