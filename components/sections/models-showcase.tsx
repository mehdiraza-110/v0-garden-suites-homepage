import Image from "next/image"
import Link from "next/link"

const models = [
  {
    name: "Aurora 420",
    description: "Open-concept studio with vaulted ceilings and integrated decking.",
    image: "/compact-garden-suite.jpg",
  },
  {
    name: "Vale 560",
    description: "One-bedroom retreat featuring panoramic glazing and spa bathroom.",
    image: "/modern-backyard-suite.jpg",
  },
  {
    name: "Canopy 720",
    description: "Two-bedroom layout with flex workspace and full kitchen integration.",
    image: "/two-bedroom-garden-home.jpg",
  },
]

export function ModelsShowcase() {
  return (
    <section id="models" className="container">
      <div className="mb-10 flex flex-col gap-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Signature collections
        </span>
        <h2 className="text-balance font-serif text-3xl sm:text-4xl">Curated models tailored to your property.</h2>
        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          Select a starting point and customize finishes, configurations, or accessory spaces with our design studio.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {models.map((model) => (
          <article
            key={model.name}
            className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={model.image || "/placeholder.svg"}
                alt={model.name}
                fill
                className="rounded-b-none object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 px-6 py-8">
              <div>
                <h3 className="text-lg font-semibold">{model.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{model.description}</p>
              </div>
              <Link
                href="#consultation"
                className="mt-auto inline-flex items-center justify-between rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-card/70"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
