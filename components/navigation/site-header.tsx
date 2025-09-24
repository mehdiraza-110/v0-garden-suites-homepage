"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#models", label: "Models" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#stories", label: "Stories" },
]

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const storedTheme = window.localStorage.getItem("lumen-theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark

    root.classList.toggle("dark", shouldUseDark)
    setIsDark(shouldUseDark)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      const root = document.documentElement
      root.classList.toggle("dark", next)
      window.localStorage.setItem("lumen-theme", next ? "dark" : "light")
      return next
    })
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-4 z-50 mx-auto w-[min(1120px,90%)] transition-all duration-500",
        isScrolled ? "scale-[0.98]" : "scale-100",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between rounded-[var(--radius-lg)] border border-border/60 bg-background/80 px-6 py-3 shadow-lg backdrop-blur-xl transition-all duration-300",
          isScrolled && "py-2",
        )}
      >
        <Link href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            LG
          </span>
          <span className="text-sm font-semibold tracking-wide uppercase">Lumen Garden Suites</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href="#consultation"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-lg md:inline-flex"
          >
            Get Started
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
