'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const links = [
  { label: 'Chef', href: '#chef' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Comparativo', href: '#comparativo' },
  { label: 'Cardápios', href: '#cardapios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => setMounted(true), []);

  const drawer = (
    <>
      {/* backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* drawer (lateral esquerda) */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-72 max-w-[82%] flex-col border-r border-white/10 bg-background p-6 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-heading text-lg tracking-tight">
            CARDA<span className="text-accent">MOVIE</span>
          </span>
          <button
            onClick={close}
            aria-label="Fechar menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="rounded-lg px-4 py-3 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          onClick={close}
          className="mt-4 rounded-full bg-accent px-4 py-3 text-center text-base text-white"
        >
          Começar
        </a>
      </aside>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}
