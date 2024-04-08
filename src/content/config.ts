import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        createdAt: z.date(),
        image: image().optional(),
        ogImage: z.string().optional(),
      }),
  }),
};
