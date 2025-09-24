"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "Forest Edge Residence",
    location: "North Vancouver, BC",
    hero: "/forest-garden-suite.jpg",
    gallery: ["/forest-suite-interior.jpg", "/forest-suite-bathroom.jpg"],
  },
  {
    name: "Courtyard Atelier",
    location: "Toronto, ON",
    hero: "/urban-backyard-studio.jpg",
    gallery: ["/urban-suite-kitchen.jpg", "/urban-suite-living.jpg"],
  },
  {
    name: "Lakeside Loft",
    location: "Kelowna, BC",
    hero: "/lakeside-modular-home.jpg",
    gallery: ["/lakeside-suite-deck.jpg", "/lakeside-suite-bedroom.jpg"],
  },
]

export function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container">
      <div className="mb-10 flex flex-col gap-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Completed works</span>
        <h2 className="text-balance font-serif text-3xl sm:text-4xl">Recent garden suites crafted across Canada.</h2>
        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          Tap any project to explore full galleries, stories from homeowners, and performance stats post occupancy.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <Dialog
            key={project.name}
            open={selectedProject === index}
            onOpenChange={(open) => setSelectedProject(open ? index : null)}
          >
            <button
              onClick={() => setSelectedProject(index)}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card text-left shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.hero || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 px-6 py-6">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open gallery <span aria-hidden="true">↗</span>
                </span>
              </div>
            </button>

            <DialogContent className="max-w-3xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-background">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">{project.name}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">{project.location}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                {[project.hero, ...project.gallery].map((image, imageIndex) => (
                  <div
                    key={`${project.name}-${imageIndex}`}
                    className={cn(
                      "relative overflow-hidden rounded-[var(--radius-lg)] border border-border",
                      imageIndex === 0 && "mt-2",
                    )}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.name} view ${imageIndex + 1}`}
                      width={960}
                      height={640}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}
