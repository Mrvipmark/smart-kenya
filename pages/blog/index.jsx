import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/Layout';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '');
    const file = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(file);
    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });

  return {
    props: { posts },
  };
}

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="prose max-w-2xl mx-auto">
        <h1>Blog Posts</h1>
        <ul>
          {posts.map(({ slug, title, date }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a className="text-blue-600 hover:underline">{title}</a>
              </Link>
              <div className="text-sm text-gray-500">{date}</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
