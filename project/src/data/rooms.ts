import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Luxury Ocean Suite',
    description: 'Spacious suite with panoramic ocean views, private balcony, and premium amenities.',
    price: 450,
    capacity: 2,
    amenities: ['Ocean View', 'King Bed', 'Private Balcony', 'Mini Bar', 'Room Service'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Family Garden Villa',
    description: 'Perfect for families, featuring a private garden and multiple bedrooms.',
    price: 650,
    capacity: 4,
    amenities: ['Garden View', 'Multiple Rooms', 'Kitchen', 'Private Pool', 'BBQ Area'],
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Penthouse Suite',
    description: 'Luxurious top-floor suite with city views and exclusive amenities.',
    price: 850,
    capacity: 2,
    amenities: ['City View', 'Private Terrace', 'Jacuzzi', 'Butler Service', 'Private Bar'],
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
  },
];