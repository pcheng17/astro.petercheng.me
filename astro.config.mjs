import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    preact(),
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
