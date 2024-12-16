import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { BookGrid } from './components/BookGrid';
import type { Book, SearchFilters } from './types';

const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    pages: 180,
    publishedDate: '1925-04-10',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    pages: 281,
    publishedDate: '1960-07-11',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3'
  },
  {
    id: '3',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Science',
    pages: 256,
    publishedDate: '1988-03-01',
    coverUrl: 'https://images.unsplash.com/photo-1629196914168-3a2652305f37?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3'
  },
];

function App() {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks);

  const handleSearch = (filters: SearchFilters) => {
    let results = [...books];
    
    if (filters.query) {
      results = results.filter(book => 
        book.title.toLowerCase().includes(filters.query!.toLowerCase()) ||
        book.author.toLowerCase().includes(filters.query!.toLowerCase())
      );
    }
    
    if (filters.genre) {
      results = results.filter(book => 
        book.genre.toLowerCase() === filters.genre!.toLowerCase()
      );
    }
    
    setFilteredBooks(results);
  };

  const handleView = (book: Book) => {
    console.log('Viewing book:', book);
  };

  const handleEdit = (book: Book) => {
    console.log('Editing book:', book);
  };

  const handleDelete = (book: Book) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      const updatedBooks = books.filter(b => b.id !== book.id);
      setBooks(updatedBooks);
      setFilteredBooks(updatedBooks);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book Management System</h1>
        <div className="space-y-8">
          <SearchBar onSearch={handleSearch} />
          <BookGrid
            books={filteredBooks}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
}

export default App;