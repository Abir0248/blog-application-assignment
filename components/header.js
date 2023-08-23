import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-burlywood text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="font-bold text-3xl">Blog Application</h1>

        <nav className="hidden md:flex space-x-4 text-xl">
          <Link href="/">
            <span className="cursor-pointer hover:text-sienna">Home</span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer hover:text-sienna">About</span>
          </Link>
          <Link href="/blog">
            <span className="cursor-pointer hover:text-sienna">Blog</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer hover:text-sienna">Contact</span>
          </Link>
        </nav>

        <button className="md:hidden">🍔</button>
      </div>
    </header>
  );
}
