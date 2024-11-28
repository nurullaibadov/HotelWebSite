import React from 'react';
import { format } from 'date-fns';
import { useBooking } from '../context/BookingContext';
import { rooms } from '../data/rooms';

export const BookingsPage: React.FC = () => {
  const { bookings } = useBooking();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Bookings</h1>
      
      <div className="space-y-6">
        {bookings.map((booking) => {
          const room = rooms.find((r) => r.id === booking.roomId);
          if (!room) return null;

          return (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-gray-600">
                      Check-in: {format(booking.checkIn, 'PPP')}
                    </p>
                    <p className="text-gray-600">
                      Check-out: {format(booking.checkOut, 'PPP')}
                    </p>
                    <p className="text-gray-600">
                      Guest: {booking.guestName}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-blue-600">
                    ${room.price}
                  </span>
                  <p className="text-gray-600">per night</p>
                </div>
              </div>
            </div>
          );
        })}

        {bookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No bookings found</p>
          </div>
        )}
      </div>
    </div>
  );
};