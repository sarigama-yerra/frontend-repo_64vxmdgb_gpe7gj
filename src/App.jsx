import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookGrid from "./components/BookGrid";
import Genres from "./components/Genres";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <BookGrid />
        <Genres />
      </main>
      <Footer />
    </div>
  );
}

export default App;
