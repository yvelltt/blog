import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    image: z.string().optional(),
    date: z.string().optional(),
  }),
  // 加 pattern，讓它收子資料夾
  pattern: '**/*.md',
});

export const collections = {
  articles,
};
