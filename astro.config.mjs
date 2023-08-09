import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
// import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    analytics: true
  }),
  integrations: [
    tailwind(),
  ],
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: [
      [
        "rehype-katex",
        {
          // Katex plugin options
        },
      ],
    ],
    shikiConfig: {
      theme: "min-light",
      wrap: true,
    },
  },
});
