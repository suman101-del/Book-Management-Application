import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { SearchFilters } from '../types';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    genre: '',
    author: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={filters.query}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={filters.genre}
            onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
          >
            <option value="">All Genres</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="science">Science</option>
            <option value="fantasy">Fantasy</option>
          </select>
          <button
            type="submit"
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            <Search className="h-5 w-5" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}