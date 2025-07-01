import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '../../components/Layout';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.mdx', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join('posts', `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);
  return {
    props: { frontMatter: data, mdxSource },
  };
}

export default function PostPage({ frontMatter, mdxSource }) {
  return (
    <Layout>
      <article className="prose mx-auto py-8">
        <h1>{frontMatter.title}</h1>
        <p className="text-sm text-gray-400">{frontMatter.date}</p>
        <MDXRemote {...mdxSource} />
      </article>
    </Layout>
  );
}
