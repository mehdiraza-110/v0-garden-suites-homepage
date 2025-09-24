import Image from "next/image"
import Link from "next/link"

const stats = [
  { label: "Average build timeline", value: "10 weeks" },
  { label: "Energy savings", value: "Up to 35%" },
  { label: "Homeowners served", value: "280+" },
]

export function Hero() {
  return (
    <section
      id="top"
      className="container relative overflow-hidden rounded-[var(--radius-xl)] border border-border/80 bg-muted"
    >
      <div className="absolute inset-0">
        <Image
          src="/modern-garden-suite-exterior.jpg"
          alt="Modern garden suite surrounded by lush greenery"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/95" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:px-10 sm:py-32">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Garden suites reimagined</p>
        <h1 className="mt-6 text-balance font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
          Crafted backyard homes with boutique-quality finishes.
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          Elevate your property value with climate-conscious suites designed, manufactured, and installed by Lumen’s
          award-winning architecture and fabrication teams.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#consultation"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:shadow-xl"
          >
            Book a consultation
          </Link>
          <Link
            href="#models"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-card"
          >
            View models
          </Link>
        </div>

        <form className="mt-12 flex w-full max-w-xl items-center gap-3 rounded-full border border-border/60 bg-background/90 p-3 text-left shadow-lg backdrop-blur">
          <label htmlFor="quick-search" className="sr-only">
            Search floor plans
          </label>
          <input
            id="quick-search"
            name="query"
            type="search"
            placeholder="Search by size, bedrooms, or style"
            className="flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-lg"
          >
            Explore
          </button>
        </form>

        <div className="mt-14 grid w-full gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[var(--radius-lg)] border border-border/70 bg-background/80 px-6 py-5 text-left shadow-md backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
