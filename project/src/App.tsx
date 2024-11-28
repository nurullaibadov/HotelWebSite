import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { BookingsPage } from './pages/BookingsPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AboutPage } from './pages/AboutPage';
import { ProfilePage } from './pages/ProfilePage';
import { BookingProvider } from './context/BookingContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rooms/:id" element={<RoomDetailPage />} />
              <Route path="/bookings" element={
                <ProtectedRoute>
                  <BookingsPage />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Toaster position="top-right" />

            <footer className="bg-gray-800 text-white py-12">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">About LuxStay</h3>
                    <p className="text-gray-400">
                      Experience luxury and comfort at its finest. Our carefully curated
                      rooms and exceptional service ensure an unforgettable stay.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Rooms</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Amenities</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-400">
                      123 Luxury Avenue<br />
                      Paradise City, PC 12345<br />
                      Phone: (555) 123-4567<br />
                      Email: info@luxstay.com
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;