"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollReveal from "./components/ScrollReveal"

const tiers = [
  {
    tier: "Tier 1",
    name: "Basic",
    price: "$19",
    period: "/mo",
    tag: "Essential Care",
    desc: "Everything you need to start healing right — the non-negotiable foundation.",
    features: [
      "Tattoo & piercing cleansing spray",
      "Fragrance-free healing balm",
      "Aftercare instruction card",
      "Monthly delivery",
    ],
    cta: "Start Basic",
    highlight: false,
  },
  {
    tier: "Tier 2",
    name: "Advanced",
    price: "$39",
    period: "/mo",
    tag: "Full System",
    desc: "A complete aftercare ritual for clients who take their healing seriously.",
    features: [
      "Everything in Basic",
      "Vitamin E repair serum",
      "Antimicrobial foam cleanser",
      "Hypoallergenic aftercare wipes",
      "Priority healing support",
    ],
    cta: "Start Advanced",
    highlight: true,
  },
  {
    tier: "Tier 3",
    name: "VIP",
    price: "$69",
    period: "/mo",
    tag: "Luxury Experience",
    desc: "The full Mantra experience — curated, exclusive, and unlike anything else.",
    features: [
      "Everything in Advanced",
      "Luxury recovery oil blend",
      "Exclusive members-only products",
      "Early access to new jewelry drops",
      "Dedicated aftercare concierge",
    ],
    cta: "Start VIP",
    highlight: false,
  },
]

const steps = [
  { num: "01", title: "Visit the Studio", body: "Get tattooed or pierced at Mantra Tattoo in Arizona." },
  { num: "02", title: "Sign Your Release Form", body: "Your release form includes a direct link to subscribe." },
  { num: "03", title: "Choose Your Tier", body: "Pick the aftercare plan that fits your healing goals." },
  { num: "04", title: "Heal Beautifully", body: "Your kit arrives at your door. Follow along, heal right." },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const tagRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.fromTo(tagRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(titleRef.current, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 1 }, "-=0.4")
      .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
  }, [])

  return (
    <div className="flex flex-col min-h-full">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0c0c0c]/90 backdrop-blur-sm border-b border-[#c9a84c]/10">
        <Image
          src="/images/mantra-logo.svg"
          alt="Mantra Body Jewelry"
          width={549}
          height={114}
          className="h-8 w-auto"
          priority
        />
        <div className="hidden sm:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/60">
          <a href="#subscriptions" className="hover:text-[#c9a84c] transition-colors">Subscriptions</a>
          <a href="#how-it-works" className="hover:text-[#c9a84c] transition-colors">How It Works</a>
          <a href="#jewelry" className="hover:text-[#c9a84c] transition-colors">Jewelry</a>
          <a
            href="https://mantratattoo.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9a84c] transition-colors"
          >
            The Studio ↗
          </a>
        </div>
        <a
          href="#subscriptions"
          className="btn-shimmer-loop text-xs tracking-[0.2em] uppercase border border-[#c9a84c] text-[#c9a84c] px-5 py-2 hover:bg-[#c9a84c] hover:text-[#0c0c0c] transition-all"
        >
          Subscribe
        </a>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a84c0d_0%,_transparent_70%)]" />
        <p ref={tagRef} className="opacity-0 text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
          Aftercare Subscriptions · Body Jewelry
        </p>
        <h1 ref={titleRef} className="opacity-0 font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight max-w-4xl">
          <span className="shimmer-gold">Heal Better.</span>
          <br />
          <span className="text-[#f5f0e8]">Stay Beautiful.</span>
        </h1>
        <p ref={subRef} className="opacity-0 mt-8 max-w-md text-base leading-7 text-[#f5f0e8]/50">
          Premium aftercare for tattoos and piercings — delivered monthly. From the team behind Mantra Tattoo.
        </p>
        <div ref={ctaRef} className="opacity-0 mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#subscriptions"
            className="btn-shimmer-loop px-10 py-4 bg-[#c9a84c] text-[#0c0c0c] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#e0be6a] transition-colors"
          >
            Choose Your Plan
          </a>
          <a
            href="https://mantratattoo.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-[#f5f0e8]/20 text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/60 hover:border-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-all"
          >
            Visit the Studio ↗
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f5f0e8]/20">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
        </div>
      </section>

      {/* Subscriptions */}
      <section id="subscriptions" className="px-6 py-28 max-w-6xl mx-auto w-full">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Aftercare Plans</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl text-[#f5f0e8]">
            Choose Your Tier
          </h2>
          <p className="mt-4 text-sm text-[#f5f0e8]/40 max-w-md mx-auto leading-6">
            Every tier ships monthly with products curated by our studio team. Cancel anytime.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <div
                className={[
                  "relative flex flex-col h-full p-8",
                  i === 1 ? "advanced-glow" : "",
                  [
                    "bg-[#1b1811] border border-[#c9a84c]/20",  // Basic  — dark gold
                    "bg-[#28220e] border border-[#c9a84c]/50",  // Advanced — medium gold
                    "bg-[#3e3519] border border-[#c9a84c]/35",  // VIP — bright gold
                  ][i],
                ].join(" ")}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Badge inside card so overflow:hidden doesn't clip it */}
                  <div className="h-6 mb-4 flex items-center justify-center">
                    {t.highlight && (
                      <span className="bg-[#c9a84c] text-[#0c0c0c] text-[10px] tracking-[0.2em] uppercase font-bold px-4 py-1">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="mb-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]/80">{t.tier} · {t.tag}</span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#f5f0e8] mt-1">{t.name}</h3>
                    <div className="flex items-end gap-1 mt-3">
                      <span className="text-4xl font-light text-[#f5f0e8]">{t.price}</span>
                      <span className="text-sm text-[#f5f0e8]/40 mb-1">{t.period}</span>
                    </div>
                    <p className="text-sm text-[#f5f0e8]/40 leading-6 mt-3">{t.desc}</p>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#f5f0e8]/60">
                        <span className="text-[#c9a84c] mt-0.5 shrink-0">–</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`${i === 1 ? "btn-shimmer-loop" : "btn-shimmer"} block text-center text-xs tracking-[0.2em] uppercase py-4 font-semibold transition-all ${
                      t.highlight
                        ? "bg-[#c9a84c] text-[#0c0c0c] hover:bg-[#e0be6a]"
                        : "border border-[#c9a84c]/50 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0c0c0c]"
                    }`}
                  >
                    {t.cta}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-y border-[#f5f0e8]/5 bg-[#0e0e0e]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">The Funnel</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl text-[#f5f0e8]">
              From Studio to Doorstep
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-[family-name:var(--font-playfair)] text-5xl text-[#c9a84c]/20">{s.num}</span>
                  <div className="w-8 h-px bg-[#c9a84c]/40 mx-auto my-4" />
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[#f5f0e8] mb-2">{s.title}</h4>
                  <p className="text-sm text-[#f5f0e8]/40 leading-6">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio backlink banner */}
      <ScrollReveal>
        <a
          href="https://mantratattoo.us/"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b border-[#c9a84c]/10 bg-[#0c0c0c] hover:bg-[#111] transition-colors group"
        >
          <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#c9a84c] mb-1">Part of the Mantra Family</p>
              <p className="text-base text-[#f5f0e8]/60 group-hover:text-[#f5f0e8] transition-colors">
                Mantra Tattoo — Lakewood, Colorado. In business for 20+ years →
              </p>
            </div>
            <span className="hidden sm:block text-[#c9a84c]/40 group-hover:text-[#c9a84c] text-2xl transition-colors">↗</span>
          </div>
        </a>
      </ScrollReveal>

      {/* Jewelry */}
      <section id="jewelry" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Curated For You</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl text-[#f5f0e8]">
            Body Jewelry
          </h2>
          <p className="mt-4 text-sm text-[#f5f0e8]/40 max-w-sm mx-auto leading-6">
            Implant-grade, body-safe pieces to complement your healed work.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: "Rings", desc: "Stacking rings, statement bands, and delicate midi styles.", tag: "New Arrivals" },
            { name: "Body Chains", desc: "Draped silhouettes and layered harnesses that move with the body.", tag: "Bestsellers" },
            { name: "Earrings", desc: "From minimalist hoops to sculptural drops.", tag: "Curated Edit" },
          ].map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.1}>
              <div className="group relative flex flex-col justify-end p-8 min-h-[320px] bg-[#161616] border border-[#f5f0e8]/5 hover:border-[#c9a84c]/30 transition-all cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/80 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] border border-[#c9a84c]/40 px-3 py-1">
                    {item.tag}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#f5f0e8] mb-2">{item.name}</h3>
                  <p className="text-sm text-[#f5f0e8]/40 leading-6 mb-4">{item.desc}</p>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] group-hover:underline">
                    Shop {item.name} →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-[#f5f0e8]/5 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { title: "Studio Formulated", body: "Every product in our kits is tested and approved by our studio team." },
            { title: "Body-Safe Only", body: "Implant-grade titanium, solid gold, and surgical steel — nothing less." },
            { title: "Cancel Anytime", body: "No lock-ins, no fine print. Pause or cancel your subscription any time." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-5" />
              <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[#f5f0e8] mb-2">{v.title}</h4>
              <p className="text-sm text-[#f5f0e8]/40 leading-6">{v.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0c0c0c] border-t border-[#f5f0e8]/5">
        <ScrollReveal className="max-w-xl mx-auto px-6 py-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Stay Close</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#f5f0e8] mb-4">
            Join the Inner Circle
          </h2>
          <p className="text-sm text-[#f5f0e8]/40 leading-6 mb-10">
            Early access to drops, aftercare guides, and studio news.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-[#f5f0e8]/15 px-5 py-3 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/25 focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
            <button
              type="submit"
              className="btn-shimmer px-8 py-3 bg-[#c9a84c] text-[#0c0c0c] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#e0be6a] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f5f0e8]/5 px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src="/images/mantra-logo.svg"
              alt="Mantra Body Jewelry"
              width={549}
              height={114}
              className="h-6 w-auto"
            />
            <span className="hidden sm:block text-[#f5f0e8]/10">|</span>
            <a
              href="https://mantratattoo.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-[#f5f0e8]/30 hover:text-[#c9a84c] transition-colors"
            >
              mantratattoo.us ↗
            </a>
          </div>
          <p className="text-xs text-[#f5f0e8]/20 tracking-wide">
            © {new Date().getFullYear()} Mantra Body Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-[0.15em] uppercase text-[#f5f0e8]/30">
            <a href="https://www.instagram.com/mantratattoo" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">Instagram</a>
            <a href="https://www.facebook.com/mantratattoo13/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
