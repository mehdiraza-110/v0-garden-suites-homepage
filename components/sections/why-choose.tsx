import { BadgeCheck, Globe2, HeartHandshake, Recycle } from "lucide-react"

const reasons = [
  {
    icon: BadgeCheck,
    title: "Premium craftsmanship",
    description: "Interior finishes rival boutique hotels with meticulous detailing and custom millwork.",
  },
  {
    icon: Recycle,
    title: "Sustainable by design",
    description: "Low embodied carbon materials and on-site waste reduction lower lifetime impact.",
  },
  {
    icon: Globe2,
    title: "Climate-ready comfort",
    description: "Passive ventilation, radiant floors, and smart climate systems adapt to every season.",
  },
  {
    icon: HeartHandshake,
    title: "Concierge partnership",
    description: "Dedicated project guides provide weekly updates, documentation, and post-install support.",
  },
]

export function WhyChoose() {
  return (
    <section id="why" className="container">
      <div className="mb-10 flex flex-col gap-4 text-center md:mx-auto md:max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Why choose lumen
        </span>
        <h2 className="text-pretty font-serif text-3xl sm:text-4xl">
          Crafted with intention, delivered with integrity.
        </h2>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
          Every suite combines hospitality-grade finishes, resilient engineering, and a client experience designed to
          feel effortless.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-card/95 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <reason.icon className="h-10 w-10 rounded-full border border-border bg-background p-2 text-primary" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
