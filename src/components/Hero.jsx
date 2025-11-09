import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
              <Star className="h-3 w-3" />
              Curated by book lovers
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Find your next favorite book
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Explore bestsellers, hidden gems, and new releases across every genre.
              Handpicked selections updated daily.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#bestsellers" className="px-5 py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 text-center">Browse Bestsellers</a>
              <a href="#genres" className="px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black/80 text-center">Shop by Genre</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-900">50k+</p>
                <p>Books listed</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">4.9/5</p>
                <p>Average rating</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">2-day</p>
                <p>Delivery</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-gradient-to-br from-indigo-100 via-white to-pink-100" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 ring-1 ring-black/5">
              <p className="text-sm font-medium text-gray-900">This week’s staff pick</p>
              <p className="text-sm text-gray-600">A sweeping tale of courage and friendship.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
