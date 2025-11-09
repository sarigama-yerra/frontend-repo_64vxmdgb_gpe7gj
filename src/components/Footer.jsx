export default function Footer() {
  return (
    <footer id="about" className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <p className="text-lg font-semibold text-gray-900">Leaf & Lore</p>
            <p className="mt-2 text-gray-600 max-w-md">
              An independent online bookstore dedicated to stories that move, inspire, and
              spark curiosity. We ship worldwide with eco‑friendly packaging.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Support</p>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Company</p>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About us</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Leaf & Lore. All rights reserved.</p>
          <p>Designed with ❤️ for readers</p>
        </div>
      </div>
    </footer>
  );
}
