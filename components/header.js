import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-burlywood text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Name on the Left */}
        <h1 className="font-bold text-3xl">Blog Application</h1>

        {/* Links on the Right */}
        <nav className="hidden md:flex space-x-4 text-xl">
          <Link href="/">
            <span className="cursor-pointer hover:text-blue-300">Home</span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer hover:text-blue-300">About</span>
          </Link>
          <Link href="/blog">
            <span className="cursor-pointer hover:text-blue-300">Blog</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer hover:text-blue-300">Contact</span>
          </Link>
        </nav>

        {/* Mobile Menu Button (Not yet functional, just a placeholder for now) */}
        <button className="md:hidden">🍔</button>
      </div>
    </header>
  );
}
