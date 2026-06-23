'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export default function RevealX({
  children,
  index = 0,
  from = 'left',
  className,
}: {
  children: ReactNode;
  index?: number;
  from?: 'left' | 'right';
  className?: string;
}) {
  const offset = from === 'left' ? -60 : 60;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  );
}
