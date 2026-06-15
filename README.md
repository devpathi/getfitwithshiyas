# Get Fit With Shiyas — website

A fast, modern website for personal trainer **Shiyas Cheradiyil** (Bengaluru). Built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), with a visual content
editor ([Decap CMS](https://decapcms.org)) so the site can be updated **without writing code**.

> 📖 If you just want to update content (blog posts, prices, testimonials, contact details),
> read **[ADMIN-GUIDE.md](./ADMIN-GUIDE.md)** — you don't need anything in this file.

## What's in here

| Page | Path |
|------|------|
| Home | `/` |
| About | `/about` |
| Programs | `/programs` |
| Pricing | `/pricing` |
| Results / Testimonials | `/results` |
| Book a free trial (Calendly) | `/book` |
| Blog | `/blog` |
| Free tools (BMI / calorie / macro calculators) | `/tools` |
| Contact (form + WhatsApp + map) | `/contact` |
| Visual content editor | `/admin` |

## Run it locally

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # production build into /dist
npm run preview  # preview the production build
```

Requires Node 20+ (Netlify uses Node 22 — see `netlify.toml`).

## Project structure

```
src/
  data/site.json        # contact info, social links, hero numbers (edited in /admin → Site Settings)
  content/              # blog/, testimonials/, programs/, pricing/  (markdown, edited in /admin)
  components/           # reusable UI (Header, Footer, cards, calculators, WhatsApp button)
  layouts/Base.astro    # shared page shell + <head>/SEO
  pages/                # one file per route
  styles/global.css     # design tokens (brand colours & fonts) + shared classes
public/
  admin/                # Decap CMS (the /admin editor)
  images/               # photos — drop real images here
```

## Brand / design

All brand colours and fonts live in **`src/styles/global.css`** under `@theme` — change them in one
place (e.g. `--color-accent`). The current scheme is **Black + Crimson** (crimson accent on near-black).

## Deploying (Netlify)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git**, pick the repo. Build settings come from
   `netlify.toml` automatically (`npm run build`, publish `dist`).
3. **Forms:** the contact form works automatically (Netlify Forms detects it). Submissions appear
   in **Netlify → Forms**; add a notification email there.
4. **Enable the `/admin` editor:** Netlify → **Identity** → Enable Identity → under
   **Services → Git Gateway** click *Enable*. Then **Identity → Invite users** and invite Shiyas's
   email. He clicks the invite, sets a password, and can log in at `yoursite/admin`.
5. **Booking:** create a free [Calendly](https://calendly.com) "Free Consultation" event, copy its
   link, and paste it into `calendlyUrl` in **/admin → Site Settings** (or `src/data/site.json`).
6. **Custom domain:** Netlify → **Domain settings** → add `getfitwithshiyas.in` and follow the DNS
   steps. Do this last, once the new site is approved, so the live site isn't disrupted.

## Things to replace before launch

Search the project for `[[REPLACE` and `[[SETUP` — these mark placeholders:

- Real photos of Shiyas + before/after images (`public/images/`)
- Real client testimonials (names + quotes) — `/admin → Testimonials`
- Final prices — `/admin → Pricing`
- **Confirmed email** — current site shows `shyaas@gmail.com` (looks like a typo)
- Real certifications/credentials — `src/pages/about.astro`
- Calendly link — see step 5 above
