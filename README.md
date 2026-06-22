<div align="center">

# 🎬 Carda Movie

### Seu cardápio que dá água na boca antes do pedido

Landing page do **Carda Movie** — o cardápio digital em vídeo. Cada prato ganha um vídeo curto, o cliente escaneia um QR Code na mesa e assiste ao prato ganhar vida antes de pedir. Sem app, sem comissão, sem gráfica.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## ✨ Destaques

- **Hero 3D animado** — mockup de celular flutuante com vídeo de prato em perspectiva.
- **Fundo generativo** — `Grainient` (shader OGL) com ruído e warp animados em tempo real.
- **Cards com tilt 3D** — efeito de inclinação no hover (desktop), desligado automaticamente no mobile pra manter o texto nítido.
- **Stepper auto-avançável** — "Monte, publique, venda" em 3 passos com transição de slide.
- **FAQ animado** — expand/collapse com altura fluida via Motion.
- **CTA pulsante** — botão com glow laranja chamando a ação.
- **100% responsivo** — ajustes finos de layout e padding pensados pro mobile.

## 🧱 Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Estilo | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animação | [Motion](https://motion.dev/) · [GSAP](https://gsap.com/) · [Lenis](https://lenis.darkroom.engineering/) |
| Gráficos | [OGL](https://github.com/oframe/ogl) (WebGL) |

## 🚀 Começando

Requisitos: **Node.js 18+** e npm.

```bash
# instala dependências
npm install

# sobe o servidor de desenvolvimento (porta padrão 3000)
npm run dev

# ou em outra porta
npx next dev -p 3005
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📜 Scripts

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com Turbopack |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | Roda o ESLint |

## 📁 Estrutura

```
src/app/
├── page.tsx           # Landing page (hero, recursos, stepper, FAQ, CTA)
├── layout.tsx         # Layout raiz + metadados
├── globals.css        # Estilos globais e keyframes (float, pulse-cta…)
├── Grainient.tsx      # Fundo generativo WebGL
├── TiltCard.tsx       # Card com tilt 3D (desktop only)
├── GlowCard.tsx       # Card com borda/glow
├── Stepper.tsx        # Passo a passo animado
├── FaqItem.tsx        # Item de FAQ expansível
├── ScrollFloat.tsx    # Texto que sobe no scroll
├── SplitText.tsx      # Animação caractere a caractere
└── MobileNav.tsx      # Navegação mobile
```

## 🌐 Deploy

Otimizado pra [Vercel](https://vercel.com/). Conecte o repositório e o deploy é automático a cada push.

```bash
# ou via CLI
vercel deploy        # preview
vercel deploy --prod # produção
```

---

<div align="center">

Feito com 🧡 para restaurantes que querem vender mais.

**Carda Movie** — vídeo, atualização na hora e zero gráfica.

</div>
