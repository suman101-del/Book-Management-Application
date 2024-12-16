import React from 'react';
import { BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">BookShelf</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Add Book
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}