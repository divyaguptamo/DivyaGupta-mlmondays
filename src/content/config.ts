import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      author: z.string(),
      date: z.string(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
  }),
};


