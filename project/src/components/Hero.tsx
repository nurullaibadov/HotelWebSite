import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Luxury Like Never Before
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover our handpicked collection of luxury rooms and suites,
            designed for the perfect getaway
          </p>
        </div>
      </div>
    </div>
  );
};