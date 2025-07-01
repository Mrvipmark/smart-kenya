import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import "../styles/globals.css"; // Ensure you have global styles


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Smart Kenya - Learn. Grow. Earn.</title>
        <meta name="monetag" content="b077c7db1cc69dfdcaa70a6eb9e499fe"></meta>
        <meta
          name="description"
          content="Smart Kenya is your source for online earning, tech tips and digital opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Smart Kenya - Learn. Grow. Earn." />
        <meta
          property="og:description"
          content="Online earning tips, tech guides, and digital side hustles for Kenyans."
        />
        <meta property="og:image" content="/smart-kenya-thumbnail.jpg" />
        <meta property="og:url" content="https://your-site.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-center py-12 md:py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Welcome to Smart Kenya 🇰🇪
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Discover online income tips, digital side hustles, and smart ways to level up your life — made for everyday Kenyans.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
          aria-label="Explore blog articles on Smart Kenya"
        >
          Explore the Blog
        </Link>
      </section>
    </Layout>
  );
}

