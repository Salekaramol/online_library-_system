import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A gripping tale of racial injustice and childhood innocence in the American South. Through the eyes of Scout Finch, we witness her father Atticus defend a black man falsely accused of rape.",
    rating: 4.8,
    isPopular: true
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "Set in the distant future amidst a feudal interstellar society, this epic science fiction novel tells the story of young Paul Atreides and his journey on the desert planet Arrakis.",
    rating: 4.6,
    isPopular: true
  },
  
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A brief history of humankind that explores how Homo sapiens came to dominate the world, covering the Cognitive, Agricultural, and Scientific Revolutions.",
    rating: 4.5,
    isPopular: true
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "A fantasy adventure novel that follows the journey of Bilbo Baggins, a hobbit who embarks on an unexpected adventure to help a group of dwarves reclaim their mountain home.",
    rating: 4.7,
    isPopular: true
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooks,
    categories: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy']
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Date.now(),
        isPopular: false
      };
      state.books.push(newBook);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;