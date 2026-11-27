import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const softwareSchema = z.object({
  order: z.number(),
  title: z.string(),
  tagline: z.string(),
  lede: z.string(),
  category: z.enum(['productivity', 'utilities', 'security', 'media']),
  version: z.string(),
  released: z.string(),
  size: z.string(),
  downloadUrl: z.string().url(),
  docsUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  screenshots: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
  features: z.array(z.object({ title: z.string(), description: z.string() })),
  changelog: z.array(
    z.object({
      version: z.string(),
      date: z.string(),
      title: z.string(),
      downloadUrl: z.string().url().optional(),
      added: z.array(z.string()).default([]),
      improved: z.array(z.string()).default([]),
      fixed: z.array(z.string()).default([]),
    })
  ),
});

type SoftwareInput = z.input<typeof softwareSchema>;

export function defineSoftware(data: SoftwareInput) {
  return data;
}

const software = defineCollection({
  loader: glob({ pattern: '**/*.ts', base: './src/content/software' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      tagline: z.string(),
      lede: z.string(),
      category: z.enum(['productivity', 'utilities', 'security', 'media']),
      version: z.string(),
      released: z.coerce.date(),
      size: z.string(),
      downloadUrl: z.string().url(),
      docsUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      screenshots: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          })
        )
        .default([]),
      features: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
      changelog: z.array(
        z.object({
          version: z.string(),
          date: z.coerce.date(),
          title: z.string(),
          downloadUrl: z.string().url().optional(),
          added: z.array(z.string()).default([]),
          improved: z.array(z.string()).default([]),
          fixed: z.array(z.string()).default([]),
        })
      ),
    }),
});

export const collections = { software };