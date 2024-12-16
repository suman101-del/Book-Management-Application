import React from 'react';
import type { Book } from '../types';
import { Edit2, Trash2, Eye } from 'lucide-react';

interface BookGridProps {
  books: Book[];
  onView: (book: Book) => void;
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
}

export function BookGrid({ books, onView, onEdit, onDelete }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={book.coverUrl || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3'}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-sm text-gray-500">{book.genre}</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => onView(book)}
                className="p-2 text-gray-600 hover:text-indigo-600"
              >
                <Eye className="h-5 w-5" />
              </button>
              <button
                onClick={() => onEdit(book)}
                className="p-2 text-gray-600 hover:text-green-600"
              >
                <Edit2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => onDelete(book)}
                className="p-2 text-gray-600 hover:text-red-600"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}