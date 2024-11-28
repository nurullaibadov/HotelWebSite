import React from 'react';
import { Star, Award, Shield, Coffee } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Luxury Accommodations',
      description: 'Experience world-class comfort in our meticulously designed rooms and suites.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Award-Winning Service',
      description: 'Our dedicated staff provides personalized attention to exceed your expectations.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safe & Secure',
      description: 'Your safety and comfort are our top priorities with 24/7 security.',
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Premium Amenities',
      description: 'Enjoy our extensive range of facilities and services during your stay.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'General Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Experience Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About LuxStay</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover the perfect blend of luxury, comfort, and exceptional service
              at one of the world's most prestigious hotel chains.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LuxStay</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing an unforgettable experience with world-class
              amenities and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals works tirelessly to ensure your stay
              exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};