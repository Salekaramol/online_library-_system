import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (

    <>

        <div className="">
          
          <a
            href="https://github.com/Salekaramol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black px-4 py-2 rounded hover:text-indigo-600 text-lg"
          >
            GitHub
          </a>
        </div>
      {/* </nav> */}




    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowseBooksPage />} />
            <Route path="/books/:category" element={<BrowseBooksPage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/add-book" element={<AddBookPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
    </>
  );
}

export default App;