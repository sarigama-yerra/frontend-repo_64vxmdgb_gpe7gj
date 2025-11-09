import { BookOpen, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-600 text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="font-semibold text-gray-900 text-lg">Leaf & Lore</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#bestsellers" className="hover:text-gray-900">Bestsellers</a>
            <a href="#genres" className="hover:text-gray-900">Genres</a>
            <a href="#new" className="hover:text-gray-900">New Arrivals</a>
            <a href="#about" className="hover:text-gray-900">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search books, authors..."
                className="w-48 outline-none text-sm placeholder:text-gray-400"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
