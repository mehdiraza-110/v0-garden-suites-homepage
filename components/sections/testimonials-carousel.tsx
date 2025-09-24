"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Harper & Jude Martin",
    quote:
      "The suite feels like a boutique hotel. Lumen guided us through permitting, financing, and installation without a single surprise.",
    rating: 5,
    role: "Homeowners • Toronto",
    image: "/smiling-couple.png",
  },
  {
    name: "Sofia Alvarez",
    quote:
      "Energy bills dropped immediately thanks to the tight building envelope and heat pump. Guests rave about the finishes.",
    rating: 5,
    role: "Host • Vancouver",
    image: "/homeowner-portrait.png",
  },
  {
    name: "Malik Chen",
    quote:
      "Lumen’s process was crystal clear, from site survey to move-in. The suite now houses my parents comfortably on our property.",
    rating: 5,
    role: "Multi-generational family • Calgary",
    image: "/smiling-homeowner.png",
  },
]

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5500)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="stories" className="container">
      <div className="mb-10 flex flex-col gap-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Customer stories
        </span>
        <h2 className="text-pretty font-serif text-3xl sm:text-4xl">Loved by homeowners & welcomed by families.</h2>
      </div>

      <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-card shadow-xl">
        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex w-full flex-col items-center gap-6 px-8 py-16 text-center sm:px-16"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <blockquote className="max-w-2xl text-pretty text-lg leading-relaxed font-medium text-foreground">
                “{testimonial.quote}”
              </blockquote>
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">{testimonial.role}</p>
              <p className="text-sm font-semibold">{testimonial.name}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-2 pb-6">
          {testimonials.map((_, dotIndex) => (
            <span
              key={`dot-${dotIndex}`}
              className={`h-2.5 w-2.5 rounded-full transition ${index === dotIndex ? "bg-primary" : "bg-muted"}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
