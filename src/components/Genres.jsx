const genres = [
  {
    name: "Fiction",
    color: "from-pink-100 to-rose-50",
    emoji: "📖",
  },
  {
    name: "Mystery",
    color: "from-indigo-100 to-blue-50",
    emoji: "🕵️‍♂️",
  },
  {
    name: "Fantasy",
    color: "from-violet-100 to-fuchsia-50",
    emoji: "🐉",
  },
  {
    name: "Sci‑Fi",
    color: "from-cyan-100 to-emerald-50",
    emoji: "🚀",
  },
  {
    name: "Romance",
    color: "from-rose-100 to-pink-50",
    emoji: "💌",
  },
  {
    name: "Non‑fiction",
    color: "from-amber-100 to-yellow-50",
    emoji: "📚",
  },
];

export default function Genres() {
  return (
    <section id="genres" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Genre</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((g) => (
            <a
              key={g.name}
              href="#"
              className={`group rounded-xl p-4 bg-gradient-to-br ${g.color} ring-1 ring-black/5 hover:shadow-md transition`}
            >
              <div className="text-2xl">{g.emoji}</div>
              <p className="mt-2 font-medium text-gray-900">{g.name}</p>
              <p className="text-xs text-gray-600 group-hover:underline">Explore</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
