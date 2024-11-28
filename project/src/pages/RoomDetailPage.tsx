import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, Users, Check } from 'lucide-react';
import { rooms } from '../data/rooms';
import { useBooking } from '../context/BookingContext';
import toast from 'react-hot-toast';

export const RoomDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useBooking();
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return <div>Room not found</div>;
  }

  const handleBooking = () => {
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      roomId: room.id,
      checkIn: new Date(),
      checkOut: new Date(Date.now() + 24 * 60 * 60 * 1000),
      guestName: 'John Doe',
      guestEmail: 'john@example.com',
    };

    addBooking(booking);
    toast.success('Booking confirmed!');
    navigate('/bookings');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={room.imageUrl}
            alt={room.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{room.name}</h1>
          <p className="text-gray-600 mb-6">{room.description}</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-2">
              <Users className="text-blue-600" />
              <span>Up to {room.capacity} guests</span>
            </div>
            {room.amenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-blue-600">${room.price}</span>
              <span className="text-gray-600">per night</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="text-gray-400" />
                <span>{format(new Date(), 'PPP')}</span>
              </div>
              <button
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};