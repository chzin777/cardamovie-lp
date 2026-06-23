import Image from "next/image";
import PlasmaBackground from "./PlasmaBackground";
import HeroVideo from "./HeroVideo";
import CardapioBanner from "./CardapioBanner";
import GlowCard from "./GlowCard";
import TiltCard from "./TiltCard";
import MobileNav from "./MobileNav";
import FaqItem from "./FaqItem";

const heroHighlights = [
  {
    title: "Vídeos que vendem",
    path: <><rect x="2" y="4" width="14" height="16" rx="2" /><path d="M16 9l5-3v12l-5-3" /><path d="M7 9l4 3-4 3V9z" /></>,
  },
  {
    title: "Experiência que encanta",
    path: <path d="M12 2l2.4 5.6L20 9l-4.5 3.9L17 19l-5-3-5 3 1.5-6.1L4 9l5.6-1.4L12 2z" />,
  },
  {
    title: "Resultados simples que crescem",
    path: <><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></>,
  },
  {
    title: "Simples para você, incrível para seu cliente",
    path: <><circle cx="12" cy="12" r="9" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>,
  },
];

const iconBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const features = [
  {
    title: "Cardápio em vídeo",
    description: "Cada prato ganha um vídeo curto. O cliente vê o que vai pedir antes de pedir.",
    path: <><rect x="2" y="4" width="14" height="16" rx="2" /><path d="M16 9l5-3v12l-5-3" /><path d="M7 9l4 3-4 3V9z" /></>,
  },
  {
    title: "Categorias e tags",
    description: "Filtros de Entradas, Principais, Sobremesas e Bebidas. Tags vegetariano, picante e novidades.",
    path: <><path d="M3 7l8-4 8 4-8 4-8-4z" /><path d="M3 12l8 4 8-4" /><path d="M3 17l8 4 8-4" /></>,
  },
  {
    title: "Acesso por QR Code",
    description: "Um QR na mesa abre o cardápio no celular do cliente. Zero app para instalar.",
    path: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3M21 14v7M17 21h-3" /></>,
  },
  {
    title: "Destaques e estoque",
    description: "Marque pratos como destaque e sinalize “esgotado hoje” em tempo real.",
    path: <path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17.3 5.8 20.6l1.6-6.7L2.2 8.9l6.9-.6L12 2z" />,
  },
  {
    title: "Painel admin",
    description: "Atualize preços, itens e vídeos quando quiser pelo painel. Sem reimprimir cardápio.",
    path: <><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /><circle cx="9" cy="6" r="2" fill="currentColor" stroke="none" /><circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" /><circle cx="8" cy="18" r="2" fill="currentColor" stroke="none" /></>,
  },
  {
    title: "Sem comissão",
    description: "Mensalidade fixa. O que o cliente gasta é seu, não de um marketplace.",
    path: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 0 1 4.3-1M14.5 14.5a2.5 2.5 0 0 1-4.3 1M12 7v10" /></>,
  },
];

const comparison = [
  { label: "Pratos em vídeo", us: true, them: false },
  { label: "Atualizar preço e itens na hora", us: true, them: false },
  { label: "Custo a cada mudança", us: "R$ 0", them: "Reimpressão" },
  { label: "Sinalizar “esgotado hoje”", us: true, them: false },
  { label: "Acesso por QR Code", us: true, them: false },
];

const menus = [
  { name: "Valentina", tag: "Cantina italiana", href: "https://cardamovie.com/r/valentina" },
  { name: "Trattoria Vivo", tag: "Cozinha italiana", href: "https://cardamovie.com/r/trattoria-vivo" },
];

const faqs = [
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Não. O cliente abre o cardápio pelo navegador ao escanear o QR Code. Você gerencia tudo por um painel web.",
  },
  {
    q: "Vocês cobram comissão por pedido?",
    a: "Nunca. É uma mensalidade fixa. Todo o valor que o cliente gasta fica com o restaurante.",
  },
  {
    q: "Quem grava os vídeos dos pratos?",
    a: "Você pode subir vídeos gravados no próprio celular. Nossa equipe orienta o formato ideal para vender.",
  },
  {
    q: "Consigo atualizar preços e itens sozinho?",
    a: "Sim. Pelo painel admin você muda preços, fotos, vídeos e disponibilidade em tempo real, quando quiser.",
  },
  {
    q: "Existe fidelidade ou contrato longo?",
    a: "Sem amarras. Você pode cancelar quando quiser, sem multa.",
  },
];

// Célula do comparativo: bool vira ✓/✗, string vira texto.
function Cell({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  if (typeof value === "string") {
    return (
      <span className={highlight ? "font-semibold text-accent" : "text-white/60"}>{value}</span>
    );
  }
  return value ? (
    <svg {...iconBase} className={`h-5 w-5 ${highlight ? "text-accent" : "text-white/70"}`}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ) : (
    <svg {...iconBase} className="h-5 w-5 text-white/25">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-hidden text-foreground">
      {/* Background global (Plasma) — bem sutil, só desktop */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-20">
        <PlasmaBackground />
      </div>
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "rgba(18,18,18,0.7)" }}
      />

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-transparent backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <MobileNav />
            <a href="#" className="shrink-0">
              <Image
                src="/images/logo-principal.png"
                alt="CardaMovie"
                width={2172}
                height={724}
                priority
                className="h-12 w-auto sm:h-16"
              />
            </a>
          </div>

          {/* links desktop */}
          <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#recursos" className="transition-colors hover:text-white">Recursos</a>
            <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
            <a href="#contato" className="transition-colors hover:text-white">Contato</a>
          </div>

          <a
            href="#contato"
            className="hidden shrink-0 rounded-full bg-accent px-5 py-2 text-sm text-white transition-opacity hover:opacity-90 md:inline-flex"
          >
            Começar
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        {/* vídeo de fundo (cobre todo o hero) */}
        <HeroVideo />
        {/* fade da esquerda (escuro) p/ legibilidade do texto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#121212] from-20% via-[#121212]/85 via-55% to-transparent" />
        {/* leve escurecedor geral */}
        <div className="pointer-events-none absolute inset-0 bg-black/25" />
        {/* fade escuro no topo (atrás do header) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

        <div className="relative z-[1] mr-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 pb-24 pt-8 text-left sm:py-32 lg:pl-12">
          {/* A: badge + título */}
          <div className="flex max-w-3xl flex-col items-start">
            <span className="mb-6 rounded-full border border-accent-2/50 px-4 py-1 text-sm font-medium text-accent-2">
              O primeiro cardápio digital em vídeo do Brasil.
            </span>
            <h1 className="max-w-none pb-1 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Vídeos que <span className="text-accent">abrem o apetite</span> e aumentam suas <span className="text-accent-2">vendas</span>
            </h1>
          </div>

          {/* B: highlights (ícone + texto, lado a lado) */}
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {heroHighlights.map((h) => (
              <div key={h.title} className="flex max-w-[160px] flex-col items-center gap-3 text-center">
                <svg {...iconBase} className="h-8 w-8 text-accent">{h.path}</svg>
                <span className="text-sm font-medium leading-tight text-white/90">{h.title}</span>
              </div>
            ))}
          </div>

          {/* C: botões */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="animate-pulse-cta rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Criar meu cardápio
              </a>
              <a
                href="https://cardamovie.com/r/valentina"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/5"
              >
                Ver cardápio de exemplo
              </a>
            </div>
          </div>
        </div>

        {/* indicador de rolagem */}
        <a
          href="#recursos"
          aria-label="Rolar para baixo"
          className="absolute bottom-6 left-1/2 z-[1] flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <span className="text-xs font-medium tracking-wide">Role para baixo</span>
          <svg
            className="h-7 w-7 animate-bounce text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 8px rgba(227,57,53,0.9))" }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* Banner cardápio */}
      <CardapioBanner />

      {/* Chef mascote */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
          {/* Mascote */}
          <div className="relative order-1 flex justify-center lg:order-none">
            {/* glow atrás */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[90px]" />
            <Image
              src="/images/chef.png"
              alt="Chef CardaMovie"
              width={1708}
              height={1605}
              className="animate-float relative w-[78%] max-w-sm drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] lg:max-w-md"
            />
            {/* balão de fala */}
            <div className="absolute right-2 top-4 rotate-3 rounded-2xl rounded-br-none border border-accent-2/40 bg-[#1c1c1c] px-4 py-2 text-sm font-bold text-accent-2 shadow-xl sm:right-8 lg:right-0">
              Bora vender mais? 🔥
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col items-start text-left">
            <span className="mb-5 rounded-full border border-accent/40 px-4 py-1 text-sm font-medium text-accent">
              Conheça nosso chef
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Pratos que <span className="text-accent">dão show</span> e fazem o cliente <span className="text-accent-2">pedir mais</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-white/70">
              Nosso chef cuida pra que cada prato apareça do jeito certo: vídeo apetitoso,
              descrição na medida e aquele toque que abre o apetite antes do primeiro pedido.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="animate-pulse-cta rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Quero esse show no meu cardápio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="relative w-full px-6 py-20">
        {/* imagem translúcida de fundo */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url('/images/background%202.png')" }}
        />
        <div className="relative z-[1] mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo que o restaurante precisa
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Pensado para vender mais sem depender de marketplaces.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <TiltCard key={f.title} className={i >= 4 ? "hidden sm:block" : undefined}>
              <GlowCard>
                <div className="p-6">
                  {/* ícone como card à parte (mesmo efeito) */}
                  <TiltCard className="mb-5 w-fit" rotateAmplitude={18} scaleOnHover={1.08}>
                    <GlowCard>
                      <div className="flex h-14 w-14 items-center justify-center text-accent">
                        <svg {...iconBase} className="h-7 w-7">{f.path}</svg>
                      </div>
                    </GlowCard>
                  </TiltCard>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{f.description}</p>
                </div>
              </GlowCard>
            </TiltCard>
          ))}
        </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="relative w-full px-6 py-20">
        {/* imagem translúcida sobre o background animado */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url('/images/background%202.png')" }}
        />
        <div className="relative z-[1] mx-auto w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            CARDAMOVIE vs. cardápio impresso
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Vídeo, atualização na hora e zero gráfica. Seu cardápio sempre certo.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-[1.3fr_1fr_1fr] bg-white/[.03] text-xs font-semibold sm:text-sm">
            <div className="p-3 text-white/70 sm:p-4" />
            <div className="border-l border-white/10 p-3 text-center text-accent sm:p-4">CARDAMOVIE</div>
            <div className="border-l border-white/10 p-3 text-center text-white/60 sm:p-4">Impresso / PDF</div>
          </div>
          {comparison.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.3fr_1fr_1fr] border-t border-white/10 text-xs sm:text-sm"
            >
              <div className="p-3 text-white/80 sm:p-4">{row.label}</div>
              <div className="flex items-center justify-center border-l border-white/10 p-3 sm:p-4">
                <Cell value={row.us} highlight />
              </div>
              <div className="flex items-center justify-center border-l border-white/10 p-3 sm:p-4">
                <Cell value={row.them} />
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Galeria de cardápios reais */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Cardápios no ar agora
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Restaurantes que já vendem com a CARDAMOVIE.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {menus.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.03] p-6 transition-colors hover:border-accent/50"
            >
              <div>
                <div className="text-lg font-semibold">{m.name}</div>
                <div className="text-sm text-white/50">{m.tag}</div>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-accent">
                Ver cardápio
                <svg {...iconBase} className="h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-white/10">
        {/* imagem translúcida: deixa o background animado aparecer atrás */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url('/images/background%201.png')" }}
        />
        <div className="relative z-[1] mx-auto w-full max-w-3xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Perguntas frequentes
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <FaqItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contato / CTA */}
      <section id="contato" className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pronto para digitalizar seu cardápio?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">
          Deixe seu contato e nossa equipe configura sua conta.
        </p>
        <form className="mx-auto mt-10 flex max-w-md flex-col gap-4">
          <input
            type="text"
            placeholder="Nome do restaurante"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white placeholder-white/40 outline-none focus:border-accent"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white placeholder-white/40 outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="animate-pulse-cta rounded-xl bg-accent px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Quero meu cardápio
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/50 sm:flex-row">
          <span className="font-heading text-white">
            CARDA<span className="text-accent">MOVIE</span>
          </span>
          <span>© {new Date().getFullYear()} CardaMovie. Todos os direitos reservados.</span>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5562981766658"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-transform hover:scale-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-white"
          aria-hidden="true"
        >
          <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.79 12.79 0 2.254.59 4.457 1.71 6.4L3.2 28.8l6.57-1.713a12.74 12.74 0 0 0 6.23 1.587h.005c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.633-3.75-9.05a12.7 12.7 0 0 0-9.04-3.634zm0 23.32h-.004a10.6 10.6 0 0 1-5.4-1.48l-.387-.23-4.003 1.05 1.07-3.9-.252-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.65-10.64 2.844 0 5.517 1.11 7.527 3.122a10.57 10.57 0 0 1 3.117 7.526c0 5.87-4.78 10.64-10.65 10.64zm5.84-7.97c-.32-.16-1.894-.935-2.188-1.04-.293-.108-.507-.16-.72.16-.214.32-.826 1.04-1.013 1.254-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.592-1.894-1.78-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.214.054-.4-.027-.56-.08-.16-.72-1.737-.987-2.378-.26-.624-.524-.54-.72-.55l-.613-.01c-.214 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.67 0 1.574 1.147 3.096 1.307 3.31.16.213 2.255 3.443 5.464 4.828.764.33 1.36.527 1.824.674.766.244 1.464.21 2.015.127.615-.092 1.894-.774 2.16-1.522.267-.747.267-1.388.187-1.522-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </a>
    </div>
  );
}
