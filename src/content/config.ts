import { defineCollection, z } from "astro:content";

// Blog posts — edited visually in /admin (Decap CMS) or as markdown files.
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    author: z.string().default("Shiyas"),
    draft: z.boolean().default(false),
  }),
});

// Client testimonials / transformation results.
const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    result: z.string(), // e.g. "Lost 12 kg in 5 months"
    photo: z.string().optional(),
    youtube: z.string().optional(), // optional video testimonial id/url
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

// Programs / services offered.
const programs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    mode: z.enum(["In-person", "Online", "In-person & Online"]),
    icon: z.string().default("dumbbell"),
    bestFor: z.string().optional(),
    order: z.number().default(0),
  }),
});

// Pricing packages.
const pricing = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    price: z.string(), // kept as string so admin can write "₹X,XXX / month"
    period: z.string().default(""),
    mode: z.string().default(""),
    features: z.array(z.string()),
    highlighted: z.boolean().default(false),
    cta: z.string().default("Book a free trial"),
    order: z.number().default(0),
  }),
});

export const collections = { blog, testimonials, programs, pricing };
