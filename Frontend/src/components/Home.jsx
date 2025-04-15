import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-3xl bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">
          Welcome to BookStore 📚
        </h1>
        <p className="text-gray-600 text-xl mb-8">
          Discover a world of books. Add your favorites, browse our collection,
          and find your next great read.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/get"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-transform"
          >
            Browse Books
          </Link>
          <Link
            to="/add"
            className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-transform"
          >
            Add a Book
          </Link>
        </div>
      </div>
    </div>
  );
}
