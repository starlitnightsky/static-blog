import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostProps {
  frontmatter: {
    title: string;
    date: string;
  };
  content: string;
}

export default function Post({ frontmatter, content }: PostProps) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-gray-500 mb-4">{frontmatter.date}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", `${slug}.md`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
