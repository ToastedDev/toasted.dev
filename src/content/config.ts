import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      createdAt: z.date(),
      image: z.string().optional(),
    }),
  }),
};
