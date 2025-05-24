import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().nullable(),
    description: z.string().nullable(),
    lang: z.string(),               // ← schema 裡一定要加 lang
    image: z.string().nullable(),
    date: z.coerce.date().nullable(),
  }),
  // 不要 pattern！
});

export const collections = { articles };
