import React from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchBarProps {
  filters: SearchFilters;
  onSearch: (filters: SearchFilters) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ filters, onSearch }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-10 relative z-10 mx-4 md:mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <Calendar className="text-gray-400" />
          <input
            type="date"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Check-in"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="text-gray-400" />
          <input
            type="date"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Check-out"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Users className="text-gray-400" />
          <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4+ Guests</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};