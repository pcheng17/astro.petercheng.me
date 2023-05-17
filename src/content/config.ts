import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().nullish(),
    tags: z.array(z.string()),
    draft: z.boolean(),
    pubDate: z.date(),
    lastMod: z.date().nullish(),
  }),
});

export const collections = {
  posts: postsCollection,
};
