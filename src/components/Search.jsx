import Fuse from "fuse.js";
import { useState } from "react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["data.title", "data.keywords", "data.tags"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.3,
  useExtendedSearch: true,
};

function Search({ searchList }) {
  // User's input
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchList, options);

  let posts = [];

  if (query.length < 2) {
    posts = searchList;
  } else {
    posts = fuse
      .search(query)
      .map((result) => result.item)
      .slice(0, 5);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-3/4 p-4 text-sm text-neutral-950 border border-neutral-400 rounded-lg"
          placeholder="Search my notes" />
      </div>
      <div>
        {/* {query.length > 1 && (
          <p>
            Found {posts.length} {posts.length === 1 ? "result" : "results"} for '{query}'
          </p>
        )} */}
        <ul className="block list-disc my-4 pl-10">
          {
            posts &&
            posts.map((post) => (
              <li key={post.data.title}>
                <a href={`/posts/${post.slug}`} className="text-base text-penn-red hover:underline" title={post.data.title}>
                  {post.data.title}
                </a>
                {
                  post.data.tags.map((tag) => (
                    <span key={tag} className="inline-block text-neutral-400 text-xs px-1">
                      <a href={`/tags/${tag}`} className="hover:underline">
                        #{tag}
                      </a>
                    </span>
                  ))
                }
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default Search;
