import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">Smart Kenya</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
