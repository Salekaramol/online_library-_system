import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Star } from 'lucide-react';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { books } = useSelector(state => state.books);

  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/browse" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Browse
      </Link>

      <div className="bg-white p-6 border rounded shadow">
        {/* Book Info */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
              {book.category}
            </span>
            {book.isPopular && (
              <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded">
                Popular
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-gray-600 text-lg">by {book.author}</p>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <Star size={20} className="text-yellow-400 fill-current" />
            <span className="text-xl font-bold">{book.rating}</span>
            <span className="text-gray-600">out of 5</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{book.description}</p>
        </div>

        {/* Details and Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Book Details */}
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold mb-2">Book Details</h3>
            <div className="space-y-1 text-sm">
              <div><strong>Category:</strong> {book.category}</div>
              <div><strong>Author:</strong> {book.author}</div>
              <div><strong>Rating:</strong> {book.rating}/5</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Link
              to="/browse"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded text-center hover:bg-blue-700"
            >
              Browse More Books
            </Link>
            <Link
              to={`/books/${book.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded text-center hover:bg-gray-300"
            >
              View Similar Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
