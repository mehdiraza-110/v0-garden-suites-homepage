import Image from "next/image"
import { Compass, Hammer, Mouse as House } from "lucide-react"

const steps = [
  {
    icon: Compass,
    title: "Consult & design",
    description: "We evaluate your property, navigate zoning, and deliver concept renderings aligned with your goals.",
  },
  {
    icon: Hammer,
    title: "Fabricate & finish",
    description:
      "Precision manufacturing in our local facility ensures flawless craftsmanship and rigorous quality checkpoints.",
  },
  {
    icon: House,
    title: "Deliver & delight",
    description:
      "White-glove installation, commissioning, and final styling put the keys in your hand without the stress.",
  },
]

export function ExperienceSection() {
  return (
    <section id="process" className="container">
      <div className="grid items-center gap-12 rounded-[var(--radius-xl)] border border-border bg-card/90 p-10 shadow-xl md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">From vision to stay</p>
          <h2 className="text-pretty font-serif text-3xl leading-tight sm:text-4xl">
            A seamless journey from first sketch to final styling.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Our team orchestrates every milestone—site studies, permitting, fabrication, delivery—so you experience an
            effortless path to move-in day.
          </p>

          <div className="mt-8 grid gap-5">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-[var(--radius-md)] border border-border/60 bg-background/70 p-5 shadow-sm transition hover:shadow-lg"
              >
                <step.icon className="mt-1 h-9 w-9 rounded-full border border-border bg-card p-2 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border shadow-2xl">
            <Image
              src="/modular-home-construction.jpg"
              alt="Craftspeople assembling a modular garden suite"
              width={960}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
