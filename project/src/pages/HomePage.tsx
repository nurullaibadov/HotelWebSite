import React from 'react';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { RoomList } from '../components/RoomList';

export const HomePage: React.FC = () => {
  const initialFilters = {
    checkIn: null,
    checkOut: null,
    guests: 1,
    priceRange: [0, 1000],
  };

  return (
    <div>
      <Hero />
      <SearchBar filters={initialFilters} onSearch={() => {}} />
      <RoomList />
    </div>
  );
};