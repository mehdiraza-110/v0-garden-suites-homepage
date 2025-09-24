"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function ExplainerVideo() {
  const [open, setOpen] = useState(false)

  return (
    <section id="video" className="container">
      <div className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-primary text-primary-foreground shadow-2xl">
        <div className="grid gap-10 px-8 py-16 sm:px-16 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em]">Watch the process</p>
            <h2 className="text-pretty font-serif text-3xl leading-tight sm:text-4xl">
              Step inside our fabrication studio and see how each suite comes to life.
            </h2>
            <p className="text-base leading-relaxed opacity-80">
              Follow a project from raw materials to finished suite in this 3-minute walkthrough featuring our craft
              teams, sustainability practices, and installation day reveal.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/20"
            >
              <Play className="h-4 w-4 fill-primary-foreground text-primary-foreground" /> Play explainer
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen(true)}
              className="group relative block overflow-hidden rounded-[var(--radius-lg)] border border-primary-foreground/20 bg-background/90 p-1 shadow-xl transition hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden rounded-[calc(var(--radius-lg)-0.75rem)]">
                <div className="absolute inset-0 rounded-[calc(var(--radius-lg)-0.75rem)] bg-gradient-to-br from-primary-foreground/15 to-primary-foreground/5" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/80 text-primary transition group-hover:scale-105">
                    <Play className="ml-1 h-6 w-6 fill-primary text-primary" />
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="aspect-video max-w-3xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-background p-0">
          <iframe
            src="https://player.vimeo.com/video/76979871?h=7d5b2b7fec"
            title="Lumen fabrication walkthrough"
            className="h-full w-full rounded-[var(--radius-xl)]"
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </DialogContent>
      </Dialog>
    </section>
  )
}
