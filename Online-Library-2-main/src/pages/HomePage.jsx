import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Star } from 'lucide-react';

const HomePage = () => {
  const { books, categories } = useSelector(state => state.books);
  const popularBooks = books.filter(book => book.isPopular).slice(0, 6);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Library</h1>
        <p className="text-gray-600 mb-6">Find your next favorite book!</p>
        <Link to="/browse" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Browse Books
        </Link>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="bg-white p-4 border rounded shadow hover:shadow-md text-center"
            >
              <h3 className="font-semibold">{category}</h3>
              <p className="text-sm text-gray-600">
                {books.filter(book => book.category === category).length} books
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Books */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularBooks.map((book) => (
            <div key={book.id} className="bg-white p-4 border rounded shadow">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {book.category}
                </span>
                <div className="flex items-center">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm ml-1">{book.rating}</span>
                </div>
              </div>
              <h3 className="font-bold mb-1">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
              <p className="text-gray-700 text-sm mb-3">
                {book.description.substring(0, 80)}...
              </p>
              <Link
                to={`/book/${book.id}`}
                className="text-blue-600 hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
