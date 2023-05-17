import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const blogPosts = await getCollection('posts');
  return rss({
    title: "Peter Cheng",
    description: "Peter Cheng's website",
    site: "https://inquisitive-gelato-e04f0f.netlify.app/",
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
