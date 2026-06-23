import { Play, UtensilsCrossed, Heart, ShoppingCart, Clapperboard } from "lucide-react";

const steps = [
  { icon: <Play size={20} fill="#fff" color="#fff" className="ml-0.5" />, label: "Assista", circle: true },
  { icon: <UtensilsCrossed size={28} color="#FFC107" />, label: "Escolha", circle: false },
  { icon: <Heart size={28} color="#E33935" />, label: "Sinta vontade", circle: false },
  { icon: <ShoppingCart size={28} color="#FFC107" />, label: "Peça", circle: false },
];

export default function CardapioBanner() {
  return (
    <section className="w-full border-y border-white/10 bg-[#1a1a1a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-6 md:flex-row md:gap-8 md:py-0 md:min-h-[88px]">
        {/* Logo + headline */}
        <div className="flex shrink-0 items-center gap-4">
          <div className="flex items-center justify-center rounded-md border-2 border-white/30 px-2.5 py-1.5">
            <Clapperboard size={28} className="text-white/70" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-white">Seu cardápio.</p>
            <p className="text-sm font-bold tracking-wide text-accent-2">O show começa aqui.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden h-12 w-px shrink-0 bg-white/20 md:block" />

        {/* Steps */}
        <div className="flex flex-1 flex-wrap items-center justify-center gap-8 sm:gap-10">
          {steps.map(({ icon, label, circle }) => (
            <div key={label} className="flex cursor-pointer flex-col items-center gap-2">
              <div
                className={`flex h-11 w-11 items-center justify-center ${
                  circle ? "rounded-full bg-accent" : ""
                }`}
              >
                {icon}
              </div>
              <span className="whitespace-nowrap text-[11px] font-semibold tracking-widest text-white">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
