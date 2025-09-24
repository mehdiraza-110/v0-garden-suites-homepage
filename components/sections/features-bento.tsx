import { Leaf, ShieldCheck, Sparkles, Timer, Wallet, Wind } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "High-performance envelope",
    description: "Engineered panels deliver superior insulation, acoustic comfort, and all-season resilience.",
    icon: ShieldCheck,
    span: "md:col-span-3",
  },
  {
    title: "Sustainably sourced materials",
    description: "FSC-certified timber and recycled cladding ensure a light footprint with enduring strength.",
    icon: Leaf,
    span: "md:col-span-3",
  },
  {
    title: "Custom-crafted interiors",
    description: "Layered lighting, bespoke millwork, and spa-grade bathrooms ready for move-in day.",
    icon: Sparkles,
    span: "md:col-span-2",
  },
  {
    title: "Turnkey installation",
    description: "Prefabricated modules assemble on-site in days with minimal disruption to your property.",
    icon: Timer,
    span: "md:col-span-2",
  },
  {
    title: "Future-proof financing",
    description: "Flexible plans, rebates, and grants guided by our concierge financing specialists.",
    icon: Wallet,
    span: "md:col-span-2",
  },
  {
    title: "Net-zero ready systems",
    description: "Heat pump HVAC, ERV fresh-air cycles, and solar-ready roofs standard on every suite.",
    icon: Wind,
    span: "md:col-span-4",
  },
]

export function FeaturesBento() {
  return (
    <section id="features" className="container">
      <div className="mb-10 flex flex-col gap-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Intelligent living
        </span>
        <h2 className="text-balance font-serif text-3xl sm:text-4xl">An elevated standard in every signature suite.</h2>
        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          Our bento-inspired layout highlights the craft, technology, and concierge approach behind each modular home.
        </p>
      </div>

      <div className="grid auto-rows-fr gap-6 md:grid-cols-6">
        {features.map((feature) => (
          <article
            key={feature.title}
            className={cn(
              "group relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card p-8 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl",
              feature.span,
            )}
          >
            <div className="absolute inset-0 scale-95 rounded-[calc(var(--radius-lg)-0.75rem)] bg-primary/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col gap-6">
              <feature.icon className="h-10 w-10 rounded-full border border-border bg-background p-2 text-primary" />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
              <span className="mt-auto text-sm font-semibold text-primary">Discover more →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
