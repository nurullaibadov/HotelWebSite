import React from 'react';
import { Link } from 'react-router-dom';
import { RoomCard } from './RoomCard';
import { rooms } from '../data/rooms';

export const RoomList: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Available Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <Link key={room.id} to={`/rooms/${room.id}`}>
            <RoomCard room={room} />
          </Link>
        ))}
      </div>
    </main>
  );
};