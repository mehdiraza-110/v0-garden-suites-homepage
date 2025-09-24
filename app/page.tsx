import SiteHeader from "@/components/navigation/site-header"
import { Hero } from "@/components/sections/hero"
import { FeaturesBento } from "@/components/sections/features-bento"
import { ExperienceSection } from "@/components/sections/experience"
import { ModelsShowcase } from "@/components/sections/models-showcase"
import { ProjectsGallery } from "@/components/sections/projects-gallery"
import { WhyChoose } from "@/components/sections/why-choose"
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel"
import { ExplainerVideo } from "@/components/sections/explainer-video"
import { CtaBanner } from "@/components/sections/cta-banner"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex flex-col gap-24 pb-32 pt-24 sm:pt-32">
        <Hero />
        <FeaturesBento />
        <ExperienceSection />
        <ModelsShowcase />
        <CtaBanner
          id="consultation"
          title="Bring a garden suite to life in just 10 weeks."
          description="Book a consultation with our design team and discover a tailored plan for your property."
          ctaLabel="Book Consultation"
          href="#footer"
        />
        <ProjectsGallery />
        <WhyChoose />
        <TestimonialsCarousel />
        <ExplainerVideo />
        <CtaBanner
          tone="secondary"
          title="Ready to transform your outdoor space?"
          description="Secure your production slot and enjoy premium craftsmanship, transparent pricing, and concierge-level service."
          ctaLabel="Start Your Project"
          href="#top"
        />
      </main>
      <SiteFooter />
    </>
  )
}
