import { Play, UtensilsCrossed, Heart, ShoppingCart, Clapperboard, ChevronRight } from "lucide-react";

const steps = [
  { icon: <Play size={24} fill="#fff" color="#fff" className="ml-0.5" />, label: "Assista", accent: "bg-accent border-accent" },
  { icon: <UtensilsCrossed size={24} color="#FFC107" />, label: "Escolha", accent: "border-accent-2/40 bg-accent-2/10" },
  { icon: <Heart size={24} color="#E33935" />, label: "Sinta vontade", accent: "border-accent/40 bg-accent/10" },
  { icon: <ShoppingCart size={24} color="#FFC107" />, label: "Peça", accent: "border-accent-2/40 bg-accent-2/10" },
];

export default function CardapioBanner() {
  return (
    <section className="w-full border-y border-white/10 bg-gradient-to-r from-[#1a1a1a] via-[#181818] to-[#1a1a1a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-10 md:flex-row md:gap-10 md:py-12">
        {/* Logo + headline */}
        <div className="flex shrink-0 items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-accent/40 bg-accent/10">
            <Clapperboard size={30} className="text-accent" />
          </div>
          <div className="leading-tight">
            <p className="text-base font-bold tracking-wide text-white sm:text-lg">Seu cardápio.</p>
            <p className="text-base font-bold tracking-wide text-accent-2 sm:text-lg">O show começa aqui.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden h-16 w-px shrink-0 bg-white/15 md:block" />

        {/* Steps */}
        <div className="flex flex-1 flex-wrap items-center justify-center gap-4 sm:gap-6">
          {steps.map(({ icon, label, accent }, i) => (
            <div key={label} className="flex items-center gap-4 sm:gap-6">
              <div className="group flex flex-col items-center gap-2.5">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full border transition-transform duration-200 group-hover:scale-110 ${accent}`}
                >
                  {icon}
                </div>
                <span className="whitespace-nowrap text-xs font-semibold tracking-widest text-white">
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight size={22} className="hidden shrink-0 text-white/25 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
