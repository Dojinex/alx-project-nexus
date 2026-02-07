import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">
          MovieNexus
        </Link>

        <div className="space-x-6">
          <Link href="/" className="hover:text-red-400">
            Home
          </Link>
          <Link href="/favorites" className="hover:text-red-400">
            Favorites
          </Link>
        </div>
      </nav>
    </header>
  )
}
