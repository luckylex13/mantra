export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0c0c0c]/90 backdrop-blur-sm border-b border-[#c9a84c]/10">
        <span className="font-[family-name:var(--font-playfair)] text-xl tracking-widest text-[#c9a84c] uppercase">
          Mantra
        </span>
        <div className="hidden sm:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/60">
          <a href="#collections" className="hover:text-[#c9a84c] transition-colors">Collections</a>
          <a href="#about" className="hover:text-[#c9a84c] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#c9a84c] transition-colors">Contact</a>
        </div>
        <a
          href="#collections"
          className="text-xs tracking-[0.2em] uppercase border border-[#c9a84c] text-[#c9a84c] px-5 py-2 hover:bg-[#c9a84c] hover:text-[#0c0c0c] transition-all"
        >
          Shop
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a84c0d_0%,_transparent_70%)]" />
        <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
          Handcrafted Body Adornment
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#f5f0e8] max-w-4xl">
          Adorn Your Story
        </h1>
        <p className="mt-8 max-w-md text-base leading-7 text-[#f5f0e8]/50">
          Jewelry that moves with you. Each piece is crafted to celebrate the body as a canvas — bold, intimate, and entirely yours.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#collections"
            className="px-10 py-4 bg-[#c9a84c] text-[#0c0c0c] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#e0be6a] transition-colors"
          >
            Explore Collections
          </a>
          <a
            href="#about"
            className="px-10 py-4 border border-[#f5f0e8]/20 text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/60 hover:border-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-all"
          >
            Our Story
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f5f0e8]/20">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Curated For You</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl text-[#f5f0e8]">
            Collections
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: "Rings", desc: "Stacking rings, statement bands, and delicate midi styles for every finger.", tag: "New Arrivals" },
            { name: "Body Chains", desc: "Draped silhouettes and layered harnesses that move with the body.", tag: "Bestsellers" },
            { name: "Earrings", desc: "From minimalist hoops to sculptural drops — always effortlessly wearable.", tag: "Curated Edit" },
          ].map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col justify-end p-8 min-h-[380px] bg-[#161616] border border-[#f5f0e8]/5 hover:border-[#c9a84c]/30 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/80 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] border border-[#c9a84c]/40 px-3 py-1">
                  {item.tag}
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#f5f0e8] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#f5f0e8]/40 leading-6 mb-5">{item.desc}</p>
                <span className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] group-hover:underline">
                  Shop {item.name} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values strip */}
      <section className="border-y border-[#f5f0e8]/5 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { title: "Handcrafted Quality", body: "Every piece shaped by hand from ethically sourced metals." },
            { title: "Body-Safe Materials", body: "Implant-grade titanium, solid gold, and surgical steel only." },
            { title: "Made to Last", body: "Jewelry designed for real life — water-resistant and tarnish-free." },
          ].map((v) => (
            <div key={v.title}>
              <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-5" />
              <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[#f5f0e8] mb-2">{v.title}</h4>
              <p className="text-sm text-[#f5f0e8]/40 leading-6">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-28 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">Our Ethos</p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl text-[#f5f0e8] mb-8 leading-tight">
          Jewelry as a Practice,<br />Not Just an Accessory
        </h2>
        <p className="text-base text-[#f5f0e8]/50 leading-8 max-w-2xl mx-auto">
          Mantra was born from a belief that what you wear against your skin should mean something. We create body jewelry for people who are intentional about self-expression — pieces that feel as meaningful as they look.
        </p>
      </section>

      {/* Newsletter */}
      <section id="contact" className="bg-[#111] border-t border-[#f5f0e8]/5">
        <div className="max-w-xl mx-auto px-6 py-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Stay Close</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#f5f0e8] mb-4">
            Join the Inner Circle
          </h2>
          <p className="text-sm text-[#f5f0e8]/40 leading-6 mb-10">
            Early access to drops, styling guides, and stories behind the pieces.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-[#f5f0e8]/15 px-5 py-3 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/25 focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#c9a84c] text-[#0c0c0c] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#e0be6a] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f5f0e8]/5 px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-playfair)] text-lg tracking-widest text-[#c9a84c] uppercase">
            Mantra
          </span>
          <p className="text-xs text-[#f5f0e8]/20 tracking-wide">
            © {new Date().getFullYear()} Mantra Body Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-[0.15em] uppercase text-[#f5f0e8]/30">
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">TikTok</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
