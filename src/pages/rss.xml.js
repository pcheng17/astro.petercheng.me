import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config.ts";

export async function get() {
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true;
  });
  const sortedPosts = allPosts.sort((a, b) => {
    return a.data.pubDate < b.data.pubDate ? 1 : -1;
  });
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: "https://inquisitive-gelato-e04f0f.netlify.app/",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    // stylesheet: "/rss/styles.xsl",
    customData: `<language>en-us</language>`,
  });
}
