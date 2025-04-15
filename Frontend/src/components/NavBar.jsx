import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="https://images-platform.99static.com//X1qlArSqZKzOCllam27j7U6AaHA=/67x1137:930x2000/fit-in/500x500/99designs-contests-attachments/150/150226/attachment_150226770" alt="BookStore Logo" className="h-10 mr-2" />
          BookStore
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/add" className="hover:text-gray-200">Add Book</Link>
          <Link to="/get" className="hover:text-gray-200">Get Books</Link>
          <Link to="/login" className="hover:text-gray-200">Login / Sign Up</Link>
        </div>
        
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-blue-700 p-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/add" className="hover:text-gray-200">Add Book</Link>
          <Link to="/get" className="hover:text-gray-200">Get Books</Link>
          <Link to="/login" className="hover:text-gray-200">Login / Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
