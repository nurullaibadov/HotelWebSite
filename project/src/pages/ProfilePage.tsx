import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';
import { rooms } from '../data/rooms';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { User, Mail, Phone, MapPin, Bell, Mail as MailIcon } from 'lucide-react';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  preferences: z.object({
    newsletter: z.boolean(),
    notifications: z.boolean(),
  }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const ProfilePage: React.FC = () => {
  const { user, login } = useAuth();
  const { bookings } = useBooking();

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      preferences: {
        newsletter: user?.preferences?.newsletter || false,
        notifications: user?.preferences?.notifications || false,
      },
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    // Simulate API call
    setTimeout(() => {
      login({
        ...user!,
        ...data,
      });
      toast.success('Profile updated successfully!');
    }, 1000);
  };

  const userBookings = bookings.map(booking => ({
    ...booking,
    room: rooms.find(room => room.id === booking.roomId),
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1 relative">
                    <input
                      {...register('name')}
                      type="text"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    <User className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 relative">
                    <input
                      {...register('email')}
                      type="email"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <div className="mt-1 relative">
                    <input
                      {...register('phone')}
                      type="tel"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <div className="mt-1 relative">
                    <input
                      {...register('address')}
                      type="text"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Preferences</h3>
                  
                  <div className="flex items-center space-x-3">
                    <input
                      {...register('preferences.newsletter')}
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div className="flex items-center space-x-2">
                      <MailIcon className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-700">Receive newsletter updates</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      {...register('preferences.notifications')}
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-700">Enable notifications</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Recent Bookings */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Bookings</h2>
              <div className="space-y-6">
                {userBookings.map(({ id, room, checkIn, checkOut }) => (
                  room && (
                    <div key={id} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex items-center space-x-4">
                        <img
                          src={room.imageUrl}
                          alt={room.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{room.name}</h3>
                          <p className="text-sm text-gray-500">
                            {format(checkIn, 'MMM d, yyyy')} - {format(checkOut, 'MMM d, yyyy')}
                          </p>
                          <p className="text-sm font-medium text-blue-600">${room.price}/night</p>
                        </div>
                      </div>
                    </div>
                  )
                ))}

                {userBookings.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No recent bookings</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};