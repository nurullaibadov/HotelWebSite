import React from 'react';
import { Room } from '../types';
import { Users, Wifi, Coffee, Bath } from 'lucide-react';

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={room.imageUrl}
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
        <p className="text-gray-600 mt-2">{room.description}</p>
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Up to {room.capacity} guests</span>
          </div>
          <div className="flex space-x-2">
            {room.amenities.includes('Wifi') && <Wifi className="h-4 w-4 text-gray-400" />}
            {room.amenities.includes('Room Service') && <Coffee className="h-4 w-4 text-gray-400" />}
            {room.amenities.includes('Private Pool') && <Bath className="h-4 w-4 text-gray-400" />}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${room.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};