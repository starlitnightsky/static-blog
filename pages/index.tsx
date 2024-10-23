import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Post {
  frontmatter: {
    title: string;
    date: string;
  };
  slug: string;
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Static Blog Site</h1>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link
              href={`/posts/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      frontmatter,
      slug: filename.replace(".md", ""),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
