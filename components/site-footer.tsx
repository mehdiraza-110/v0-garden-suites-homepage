import Link from "next/link"
import { Mail, MapPin, Phone, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-border bg-muted/40">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            LG
          </span>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            Lumen Garden Suites designs, fabricates, and installs premium modular homes that elevate properties and
            bring families closer.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://instagram.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://twitter.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">Quick links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="#features" className="transition hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link href="#models" className="transition hover:text-foreground">
                Models
              </Link>
            </li>
            <li>
              <Link href="#projects" className="transition hover:text-foreground">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#stories" className="transition hover:text-foreground">
                Stories
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-primary" />
              <span>120 Mason Avenue, Toronto, Ontario</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 text-primary" />
              <a href="tel:+14165551234" className="transition hover:text-foreground">
                +1 (416) 555-1234
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 text-primary" />
              <a href="mailto:hello@lumensuites.ca" className="transition hover:text-foreground">
                hello@lumensuites.ca
              </a>
            </li>
          </ul>
          <form className="space-y-2">
            <label htmlFor="newsletter" className="text-sm font-semibold text-foreground">
              Join the design dispatch
            </label>
            <div className="flex gap-2">
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm outline-none transition focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 bg-muted/20 py-6">
        <div className="container flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Lumen Garden Suites. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="transition hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-foreground">
              Accessibility
            </Link>
            <Link href="#" className="transition hover:text-foreground">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
