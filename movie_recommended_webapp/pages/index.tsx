export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="p-8 rounded-lg bg-white text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Tailwind is Working 🎉
        </h1>
        <p className="text-gray-600">
          If you see this styled card, TailwindCSS is installed correctly.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Test Button
        </button>
      </div>
    </div>
  )
}
