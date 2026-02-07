export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 text-center py-4 text-sm text-gray-400">
      © {new Date().getFullYear()} MovieNexus. Built with Next.js
    </footer>
  )
}
