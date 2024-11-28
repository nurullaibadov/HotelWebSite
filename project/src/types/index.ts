export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  imageUrl: string;
}

export interface Booking {
  id: string;
  checkIn: Date;
  checkOut: Date;
  roomId: string;
  guestName: string;
  guestEmail: string;
}

export interface SearchFilters {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  priceRange: [number, number];
}