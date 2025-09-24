import Link from "next/link"
import { cn } from "@/lib/utils"

interface CtaBannerProps {
  id?: string
  title: string
  description: string
  ctaLabel: string
  href: string
  tone?: "primary" | "secondary"
}

export function CtaBanner({ id, title, description, ctaLabel, href, tone = "primary" }: CtaBannerProps) {
  return (
    <section id={id} className="container">
      <div
        className={cn(
          "overflow-hidden rounded-[var(--radius-xl)] border border-border px-8 py-12 shadow-2xl sm:px-16",
          tone === "primary" ? "text-primary-foreground" : "text-foreground",
        )}
        style={{
          backgroundImage:
            tone === "primary"
              ? "var(--cta-gradient)"
              : "linear-gradient(135deg, oklch(0.94 0.01 95) 0%, oklch(0.84 0.015 95) 100%)",
        }}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <h3 className="text-pretty font-serif text-2xl leading-tight sm:text-3xl">{title}</h3>
            <p
              className={cn(
                "text-sm leading-relaxed",
                tone === "primary" ? "text-primary-foreground/80" : "text-muted-foreground",
              )}
            >
              {description}
            </p>
          </div>
          <Link
            href={href}
            className={cn(
              "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
              tone === "primary"
                ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                : "bg-primary text-primary-foreground hover:shadow-lg",
            )}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
