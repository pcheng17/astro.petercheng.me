import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().nullish(),
    keywords: z.array(z.string()).nullish(),
    tags: z.array(z.string()).nullish(),
    draft: z.boolean(),
    pubDate: z.date(),
    lastMod: z.date().nullish(),
  }),
});

export const collections = {
  posts: posts,
};
