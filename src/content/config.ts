import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    image: z.string(),
    keywords: z.array(z.string()).optional(), // List of tags (array of strings)
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(), // List of tags (array of strings)
    excerpt: z.string().optional(), // Short description or excerpt
    status: z.enum(['published', 'draft']), // Enum to limit to specific statuses
  }),
})

export const collections = { blog }
