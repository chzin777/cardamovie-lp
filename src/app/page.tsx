import Image from "next/image";
import PlasmaBackground from "./PlasmaBackground";
import HeroVideo from "./HeroVideo";
import CardapioBanner from "./CardapioBanner";
import GlowCard from "./GlowCard";
import TiltCard from "./TiltCard";
import MobileNav from "./MobileNav";
import ChefMascot from "./ChefMascot";
import RevealCard from "./RevealCard";
import RevealX from "./RevealX";
import RevealZoom from "./RevealZoom";
import RevealDesktop from "./RevealDesktop";
import HeaderShell from "./HeaderShell";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
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

// Ícones do footer (SVG inline)
type IcProps = { size?: number; className?: string };
const svgBase = (size: number, className: string) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.8,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className,
});
const IcInstagram = ({ size = 18, className = "" }: IcProps) => (
  <svg {...svgBase(size, className)}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const IcFacebook = ({ size = 18, className = "" }: IcProps) => (
  <svg {...svgBase(size, className)}><path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const IcWhatsApp = ({ size = 18, className = "" }: IcProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.79 12.79 0 2.254.59 4.457 1.71 6.4L3.2 28.8l6.57-1.713a12.74 12.74 0 0 0 6.23 1.587h.005c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.633-3.75-9.05a12.7 12.7 0 0 0-9.04-3.634zm0 23.32h-.004a10.6 10.6 0 0 1-5.4-1.48l-.387-.23-4.003 1.05 1.07-3.9-.252-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.65-10.64 2.844 0 5.517 1.11 7.527 3.122a10.57 10.57 0 0 1 3.117 7.526c0 5.87-4.78 10.64-10.65 10.64zm5.84-7.97c-.32-.16-1.894-.935-2.188-1.04-.293-.108-.507-.16-.72.16-.214.32-.826 1.04-1.013 1.254-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.592-1.894-1.78-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.214.054-.4-.027-.56-.08-.16-.72-1.737-.987-2.378-.26-.624-.524-.54-.72-.55l-.613-.01c-.214 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.67 0 1.574 1.147 3.096 1.307 3.31.16.213 2.255 3.443 5.464 4.828.764.33 1.36.527 1.824.674.766.244 1.464.21 2.015.127.615-.092 1.894-.774 2.16-1.522.267-.747.267-1.388.187-1.522-.08-.133-.293-.213-.613-.373z" />
  </svg>
);
const IcPhone = ({ size = 16, className = "" }: IcProps) => (
  <svg {...svgBase(size, className)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const IcMail = ({ size = 16, className = "" }: IcProps) => (
  <svg {...svgBase(size, className)}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>
);
const IcArrowUp = ({ size = 14, className = "" }: IcProps) => (
  <svg {...svgBase(size, className)}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
);

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
  {
    name: "Valentina",
    tag: "Cantina italiana",
    dishes: 42,
    emoji: "🍝",
    logo: "https://storage.googleapis.com/prod-cardapio-web/uploads/company/logo/36810/2d985dadLOGO_VALENTINA_.jpeg",
    href: "https://cardamovie.com/r/valentina",
  },
  {
    name: "Trattoria Vivo",
    tag: "Cozinha italiana",
    dishes: 38,
    emoji: "🍕",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0cEb-dOOZnbIvLY6bYCti7y09jeTXV39PsigYmerM_CTT76jkA34mGI&s=10",
    href: "https://cardamovie.com/r/trattoria-vivo",
  },
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
      <HeaderShell>
        <nav className="flex w-full items-center justify-between gap-4 px-6 py-4 lg:pl-12">
          {/* logo à esquerda */}
          <a href="#" className="shrink-0">
            <Image
              src="/images/logo-principal.png"
              alt="CardaMovie"
              width={2172}
              height={724}
              priority
              className="h-11 w-auto sm:h-16"
            />
          </a>

          {/* links desktop (centro) */}
          <div className="hidden items-center gap-6 text-sm font-medium text-white/70 lg:flex">
            <a href="#chef" className="transition-colors hover:text-white">Chef</a>
            <a href="#recursos" className="transition-colors hover:text-white">Recursos</a>
            <a href="#comparativo" className="transition-colors hover:text-white">Comparativo</a>
            <a href="#cardapios" className="transition-colors hover:text-white">Cardápios</a>
            <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
            <a href="#contato" className="transition-colors hover:text-white">Contato</a>
          </div>

          {/* CTA + menu mobile (extremo direito) */}
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="inline-flex shrink-0 rounded-full bg-accent px-4 py-1.5 text-sm text-white transition-opacity hover:opacity-90 lg:px-5 lg:py-2"
            >
              Começar
            </a>
            <MobileNav />
          </div>
        </nav>
      </HeaderShell>

      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        {/* vídeo de fundo (cobre todo o hero) */}
        <HeroVideo />
        {/* fade da esquerda (escuro) p/ legibilidade do texto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#121212] from-20% via-[#121212]/85 via-55% to-transparent" />
        {/* leve escurecedor geral (mais forte no mobile p/ legibilidade) */}
        <div className="pointer-events-none absolute inset-0 bg-black/45 sm:bg-black/25" />
        {/* fade escuro no topo (atrás do header) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

        <div className="relative z-[1] mr-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 pb-20 pt-28 text-left sm:py-32 lg:pl-12">
          {/* logo grande (somente mobile) */}
          <Image
            src="/images/logo-principal.png"
            alt="CardaMovie"
            width={2172}
            height={724}
            priority
            className="-mb-2 h-24 w-auto self-center sm:hidden"
          />

          {/* A: badge + título */}
          <RevealZoom index={0} className="flex max-w-3xl flex-col items-start">
            <span className="mb-6 rounded-full border border-accent-2/50 px-4 py-1 text-sm font-medium text-accent-2">
              O primeiro cardápio digital em vídeo do Brasil.
            </span>
            <h1 className="max-w-none pb-1 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Vídeos que <span className="text-accent">abrem o apetite</span> e aumentam suas <span className="text-accent-2">vendas</span>
            </h1>
          </RevealZoom>

          {/* B: highlights (ícone + texto, lado a lado) */}
          <RevealZoom index={1} className="hidden w-full grid-cols-2 gap-x-4 gap-y-6 sm:grid sm:w-auto lg:flex lg:flex-wrap lg:gap-x-10">
            {heroHighlights.map((h) => (
              <div key={h.title} className="flex flex-col items-center gap-3 text-center lg:max-w-[160px]">
                <svg {...iconBase} className="h-8 w-8 text-accent">{h.path}</svg>
                <span className="text-sm font-medium leading-tight text-white/90">{h.title}</span>
              </div>
            ))}
          </RevealZoom>

          {/* C: botões */}
          <RevealZoom index={2} className="flex w-full flex-col items-start sm:w-auto">
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="#contato"
                className="animate-pulse-cta w-full rounded-full bg-accent px-8 py-3 text-center text-base font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                Criar meu cardápio
              </a>
              <a
                href="https://cardamovie.com/r/valentina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-white/20 px-8 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Ver cardápio de exemplo
              </a>
            </div>
          </RevealZoom>
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
      <section id="chef" className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-20 pb-10 lg:grid-cols-2 lg:py-28">
          {/* Mascote */}
          <div className="relative order-1 hidden justify-center lg:order-none lg:flex">
            <ChefMascot
              imgClassName="relative block w-[96%] max-w-md sm:w-[78%] sm:max-w-sm lg:max-w-md"
              balloonClassName="absolute left-[13px] top-[-38px] rounded-2xl rounded-br-none border border-accent-2/40 bg-[#1c1c1c] px-4 py-2 text-sm font-bold text-accent-2 shadow-xl sm:left-[37px] lg:left-[5px]"
              initial={{ opacity: 0, y: 40, scale: 1.25 }}
              animate={{ opacity: 1, y: 0, scale: 1.3 }}
            />
          </div>

          {/* fade na base da section */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-28 bg-gradient-to-b from-transparent to-[#121212]" />

          {/* Texto */}
          <div className="flex flex-col items-start self-center text-left">
            <span className="mb-5 rounded-full border border-accent/40 px-4 py-1 text-sm font-medium text-accent">
              Conheça nosso chef
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Pratos que <span className="text-accent">dão show</span> e fazem o cliente <span className="text-accent-2">pedir mais</span>
            </h2>
            <p className="mt-5 hidden max-w-md text-base text-white/70 sm:block">
              A CardaMovie te dá as ferramentas pra mostrar cada prato do jeito certo:
              vídeo apetitoso, fotos e descrições organizadas num cardápio que abre o
              apetite antes do primeiro pedido. Simples de montar e fácil de atualizar.
            </p>
            {/* chef + balão (somente mobile) */}
            <div className="relative mt-[57px] flex w-full justify-center lg:hidden">
              <ChefMascot
                imgClassName="relative block w-[70%] max-w-[260px]"
                balloonClassName="absolute left-[2%] top-[-52px] rounded-2xl rounded-br-none border border-accent-2/40 bg-[#1c1c1c] px-4 py-2 text-sm font-bold text-accent-2 shadow-xl"
                initial={{ opacity: 0, x: 65, y: 41, scale: 1.5 }}
                animate={{ opacity: 1, x: 65, y: 1, scale: 1.6 }}
              />
            </div>

            <div className="relative z-[3] mt-16 flex w-full flex-col gap-4 sm:mt-8 sm:w-auto sm:flex-row">
              <a
                href="#contato"
                className="animate-pulse-cta w-full rounded-full bg-accent px-8 py-3 text-center text-base font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                Quero esse show no meu cardápio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="relative w-full px-6 py-20 pb-10 sm:pb-20">
        {/* imagem translúcida de fundo */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url('/images/background%201.png')" }}
        />
        {/* fade na base p/ transição suave */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#121212]" />
        <div className="relative z-[1] mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo que o seu restaurante precisa
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Pensado para vender mais sem depender de marketplaces.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <RevealCard key={f.title} index={i} className={i >= 4 ? "hidden sm:block" : undefined}>
            <TiltCard>
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
            </RevealCard>
          ))}
        </div>
        </div>
      </section>

      {/* Comparativo */}
      <section id="comparativo" className="relative w-full px-6 py-20 pt-10 sm:pt-20">
        {/* imagem translúcida sobre o background animado */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url('/images/background%202.png')" }}
        />
        {/* fade no topo p/ transição suave vinda da section anterior */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#121212] to-transparent" />
        <div className="relative z-[1] mx-auto w-full max-w-4xl">
        <div className="mb-12 text-center">
          <BlurText
            as="h2"
            text="CARDAMOVIE vs. cardápio impresso"
            animateBy="words"
            direction="top"
            className="justify-center text-3xl font-bold tracking-tight sm:text-4xl"
          />
          <BlurText
            as="p"
            text="Vídeo, atualização na hora e zero gráfica. Seu cardápio sempre certo."
            animateBy="words"
            direction="top"
            delay={70}
            className="mx-auto mt-4 max-w-xl justify-center text-white/60"
          />
        </div>

        <RevealCard>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]/40 backdrop-blur-md">
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
        </RevealCard>
        </div>
      </section>

      {/* Galeria de cardápios reais */}
      <section id="cardapios" className="mx-auto w-full max-w-6xl px-6 py-20">
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
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-20px_rgba(227,57,53,0.6)]"
            >
              {/* preview com gradiente + ícone de play */}
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/25 via-[#1c1c1c] to-accent-2/15">
                {m.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.logo}
                    alt={`Logo ${m.name}`}
                    className="h-24 w-24 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">{m.emoji}</span>
                )}
                {/* badge AO VIVO */}
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  AO VIVO
                </span>
                {/* botão play */}
                <span className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-white/15 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-white"><path d="M8 5v14l11-7z" /></svg>
                </span>
              </div>

              {/* corpo */}
              <div className="flex items-center justify-between gap-3 p-5">
                <div className="min-w-0">
                  <div className="truncate text-lg font-semibold">{m.name}</div>
                  <div className="mt-0.5 text-sm text-white/50">{m.tag}</div>
                  <div className="mt-1 text-xs font-medium text-accent-2">{m.dishes} pratos em vídeo</div>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity group-hover:opacity-90">
                  Ver
                  <svg {...iconBase} className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-white/10">
        <div className="relative z-[1] mx-auto w-full max-w-3xl px-6 py-20">
          <div className="mb-12 text-center">
            <BlurText
              as="h2"
              text="Perguntas frequentes"
              animateBy="words"
              direction="top"
              className="justify-center text-3xl font-bold tracking-tight sm:text-4xl"
            />
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <RevealX key={f.q} index={i} from={i % 2 === 0 ? "left" : "right"}>
                <FaqItem question={f.q} answer={f.a} />
              </RevealX>
            ))}
          </div>
        </div>
      </section>

      {/* Contato / CTA */}
      <section id="contato" className="mx-auto w-full max-w-3xl px-6 py-24">
        <div className="text-center">
          <SplitText
            tag="h2"
            text="Pronto para digitalizar seu cardápio?"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            splitType="chars"
            delay={30}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Preencha os dados abaixo. Nossa equipe entra em contato e configura sua conta.
          </p>
        </div>

        {/* chef mobile acima do formulário */}
        <div className="mt-8 flex justify-center lg:hidden">
          <Image
            src="/images/chef.png"
            alt="Chef CardaMovie"
            width={1122}
            height={1402}
            className="w-[180px] max-w-[60%] translate-y-[27px] scale-125"
          />
        </div>

        <div className="mt-10 flex justify-center">
         <div className="relative w-full max-w-xl">
          {/* chef encostado no formulário (fora do fluxo, não empurra o form) */}
          <Image
            src="/images/chef 3.png"
            alt="Chef CardaMovie"
            width={1122}
            height={1402}
            className="absolute bottom-0 right-full hidden w-[255px] translate-x-[94px] lg:block xl:w-[295px] xl:translate-x-[110px]"
          />
        <RevealDesktop className="relative z-[1] w-full max-w-xl">
        <form className="w-full rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-xl backdrop-blur sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nome" className="text-xs font-medium text-white/60">Seu nome *</label>
              <input
                id="nome"
                type="text"
                required
                placeholder="Ex: João Silva"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="restaurante" className="text-xs font-medium text-white/60">Nome do restaurante *</label>
              <input
                id="restaurante"
                type="text"
                required
                placeholder="Ex: Cantina Valentina"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="whatsapp" className="text-xs font-medium text-white/60">WhatsApp *</label>
              <input
                id="whatsapp"
                type="tel"
                required
                placeholder="(62) 9 9999-9999"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-white/60">E-mail *</label>
              <input
                id="email"
                type="email"
                required
                placeholder="voce@restaurante.com"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tipo" className="text-xs font-medium text-white/60">Tipo de estabelecimento</label>
              <select
                id="tipo"
                defaultValue=""
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent"
              >
                <option value="" disabled className="bg-[#1c1c1c]">Selecione</option>
                <option className="bg-[#1c1c1c]">Restaurante</option>
                <option className="bg-[#1c1c1c]">Pizzaria</option>
                <option className="bg-[#1c1c1c]">Hamburgueria</option>
                <option className="bg-[#1c1c1c]">Cafeteria / Padaria</option>
                <option className="bg-[#1c1c1c]">Bar / Pub</option>
                <option className="bg-[#1c1c1c]">Outro</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="pratos" className="text-xs font-medium text-white/60">Pratos no cardápio (aprox.)</label>
              <input
                id="pratos"
                type="number"
                min={1}
                placeholder="Ex: 40"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="animate-pulse-cta mt-6 w-full rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Quero meu cardápio
          </button>
          <p className="mt-3 text-center text-xs text-white/40">
            Sem compromisso. Seus dados ficam seguros e não são compartilhados.
          </p>
        </form>
        </RevealDesktop>
         </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-[#161616]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
            {/* Marca */}
            <div>
              <Image
                src="/images/logo-principal.png"
                alt="CardaMovie"
                width={2172}
                height={724}
                className="h-14 w-auto"
              />
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
                O primeiro cardápio digital em vídeo do Brasil. Mostre seus pratos do jeito
                certo e venda mais, sem app e sem comissão.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.instagram.com/cardamovie"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <IcInstagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/cardamovie"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <IcFacebook size={18} />
                </a>
                <a
                  href="https://wa.me/5562981766658"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <IcWhatsApp size={18} />
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="text-sm font-bold tracking-wide text-white">Navegação</h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/55">
                <li><a href="#chef" className="transition-colors hover:text-white">Chef</a></li>
                <li><a href="#recursos" className="transition-colors hover:text-white">Recursos</a></li>
                <li><a href="#comparativo" className="transition-colors hover:text-white">Comparativo</a></li>
                <li><a href="#cardapios" className="transition-colors hover:text-white">Cardápios</a></li>
                <li><a href="#faq" className="transition-colors hover:text-white">FAQ</a></li>
              </ul>
            </div>

            {/* Institucional */}
            <div>
              <h4 className="text-sm font-bold tracking-wide text-white">Institucional</h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/55">
                <li><a href="#" className="transition-colors hover:text-white">Sobre nós</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Política de privacidade</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Termos de uso</a></li>
                <li><a href="#faq" className="transition-colors hover:text-white">Central de ajuda</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-sm font-bold tracking-wide text-white">Fale com a gente</h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-white/55">
                <li>
                  <a href="https://wa.me/5562981766658" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <IcPhone size={16} className="text-accent" /> (62) 98176-6658
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@cardamovie.com" className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <IcMail size={16} className="text-accent" /> contato@cardamovie.com
                  </a>
                </li>
              </ul>
              <a
                href="#contato"
                className="mt-5 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Quero meu cardápio
              </a>
            </div>
          </div>

          {/* Barra inferior */}
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
            <span>© {new Date().getFullYear()} CardaMovie. Todos os direitos reservados.</span>
            <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-white">
              Voltar ao topo <IcArrowUp size={14} />
            </a>
          </div>
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
