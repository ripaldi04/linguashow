export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">LinguaShow</a>
          <nav className="hidden md:flex space-x-8">
            <a href="/why-lingua-show" className="text-gray-700 hover:text-indigo-600 transition-colors">Why Lingua Show</a>
            <a href="/guidelines" className="text-gray-700 hover:text-indigo-600 transition-colors">Guidelines</a>
            <a href="/topics" className="text-gray-700 hover:text-indigo-600 transition-colors">Topics</a>
            <a href="/posts" className="text-gray-700 hover:text-indigo-600 transition-colors">Posts</a>
          </nav>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors">Login</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  )
}
