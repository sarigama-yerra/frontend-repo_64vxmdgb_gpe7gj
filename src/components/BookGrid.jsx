const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 14.99,
    rating: 4.7,
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1280&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    price: 18.5,
    rating: 4.6,
    cover:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1280&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 16.0,
    rating: 4.8,
    cover:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1280&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    price: 13.75,
    rating: 4.7,
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1280&auto=format&fit=crop",
  },
];

function BookCard({ book }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{book.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-1">{book.author}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-900 font-semibold">${book.price.toFixed(2)}</span>
          <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-medium">
            {book.rating}★
          </span>
        </div>
        <button className="mt-4 w-full px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function BookGrid() {
  return (
    <section id="bestsellers" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Bestsellers</h2>
            <p className="text-gray-600">Fan-favorite picks readers can’t put down</p>
          </div>
          <a href="#" className="text-sm text-indigo-700 hover:text-indigo-800 font-medium">
            See all
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
