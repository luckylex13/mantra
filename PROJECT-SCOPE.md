# Mantra Body Jewelry — Project Scope

## Overview
A high-end headless e-commerce site for **Mantra Body Jewelry**, the retail/online arm of **Mantra Tattoo** — a brick-and-mortar tattoo and piercing studio. The site's primary focus is selling aftercare subscription products, with body jewelry as a secondary offering.

**Live URL:** https://mantra-nine-mocha.vercel.app (temporary — pending DNS)
**Production domain:** mantrabodyjewelry.com (GoDaddy — DNS setup pending, partner access required)
**Parent studio site:** https://mantratattoo.us/
**GitHub repo:** https://github.com/luckylex13/mantra
**Vercel project:** luckylex13s-projects/mantra

---

## Business Model

### Primary: Aftercare Subscription (Launch Focus)
Recurring subscription boxes for tattoo and piercing aftercare. Designed to be sold as an upsell directly from the **Mantratattoo release form** — the intake/consent form clients sign every visit.

**Funnel:**
> Client gets tattooed/pierced at Mantra Tattoo → signs release form → form links to subscription purchase page → immediate upsell

#### Subscription Tiers
| Tier | Name | Focus |
|------|------|-------|
| Tier 1 | Basic | Essential aftercare staples |
| Tier 2 | Advanced | Full aftercare system + premium products |
| Tier 3 | VIP | Complete luxury care, exclusive items, priority support |

### Secondary: Body Jewelry
Individual jewelry products (rings, body chains, earrings). Shopify-powered catalog — integration pending plan upgrade.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.7 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | GSAP + ScrollTrigger, Lenis (smooth scroll) |
| Fonts | Playfair Display (headings), Geist Sans (body) |
| E-commerce | Shopify Storefront API (headless) — **pending Shopify plan upgrade** |
| Deployment | Vercel (luckylex13s-projects) |
| Repo | GitHub (luckylex13/mantra) |

### Design System
- **Background:** `#0c0c0c` (near-black)
- **Accent:** `#c9a84c` (warm gold)
- **Text:** `#f5f0e8` (warm cream)
- **Cards:** `#161616` / `#111`
- **Feel:** Dark editorial luxury — think high-end piercing studio meets skincare brand

---

## Shopify Integration (Pending)

**Status:** Blocked — requires Shopify paid plan (Basic, $39/mo) to create custom apps and access Storefront API.

**Once unblocked:**
1. Shopify admin → Settings → Apps → Develop apps → Create custom app
2. Configure Storefront API scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_collection_listings`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_read_product_inventory`
3. Install app → copy Storefront API access token
4. Add to Vercel env vars:
   - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` = `mantrabodyjewelry.myshopify.com`
   - `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` = `<token>`
5. Build product listing, product detail, cart, and checkout pages

---

## DNS Setup (Pending)

**Status:** Blocked — GoDaddy login requires partner (co-owner) access.

**When ready — add these records in GoDaddy:**
| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Both `mantrabodyjewelry.com` and `www.mantrabodyjewelry.com` are already added to the Vercel project — just needs DNS pointed.

---

## Site Structure (Planned)

```
/                        ← Landing page (subscription focus)
/subscriptions           ← Subscription tier detail + purchase
/products                ← Jewelry catalog (Shopify, pending)
/products/[handle]       ← Product detail page
/cart                    ← Cart (Shopify, pending)
/aftercare               ← Aftercare guides / blog (future)
```

---

## Immediate Priorities
1. ✅ Landing page (dark editorial design)
2. ✅ Deployed to Vercel
3. ⬜ Subscription tiers section on landing page
4. ⬜ `/subscriptions` purchase page (the upsell funnel target)
5. ⬜ DNS → mantrabodyjewelry.com
6. ⬜ Shopify plan upgrade + Storefront API integration
7. ⬜ Add subscription link to Mantratattoo release form

---

## Relationships
- **Mantra Tattoo** (mantratattoo.us) — parent brand, brick-and-mortar studio, primary traffic source via release form funnel
- **Mantra Body Jewelry** (mantrabodyjewelry.com) — this site, online retail + subscription
