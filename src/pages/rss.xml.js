import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config.ts";

export async function get() {
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true;
  });
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: "https://inquisitive-gelato-e04f0f.netlify.app/",
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    stylesheet: "/rss/styles.xsl",
    customData: `<language>en-us</language>`,
  });
}
