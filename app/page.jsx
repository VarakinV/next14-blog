import H1 from "@/components/H1";
import { getPosts } from "@/lib/posts";
import Link from "next/link";


export default async function Home() {
  const { posts } = await getPosts({
    newest: true,
    limit: 3
  })
  return (
    <>
      <section className="mb-8">
        <H1>Welcome to my page</H1>
        <p>Hey there! My name is Volodymyr, and I am a web developer.</p>
      </section>
      <section>
        <h2 className="text-lg mb-8">Latest Blogs</h2>
        <ul className="font-mono">
          {posts.map(post => <li key={post.slug}>
            <span className="text-gray-400">
              {post.frontmatter.date}&nbsp;
            </span>
            <Link href={`/blog/${post.slug}`} className="underline">
              {post.frontmatter.title}
            </Link>

          </li>)}
        </ul>
      </section>
    </>
  );
}
