import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true;
  });
  return rss({
    title: "Peter Cheng",
    description: "Peter Cheng's website",
    site: "https://inquisitive-gelato-e04f0f.netlify.app/",
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
