
import { useState } from 'react';
import { Search, Star, MapPin, Check, Coffee, Wifi, Tv, Users } from 'lucide-react';

const Hotels = () => {
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [activeRating, setActiveRating] = useState(0);
  
  const hotels = [
    {
      id: 1,
      name: 'The Taj Mahal Palace',
      location: 'Mumbai',
      price: 8500,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
      description: 'Luxury hotel with sea views and world-class amenities.',
      amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Fitness Center']
    },
    {
      id: 2,
      name: 'Hilltop Resort',
      location: 'Mahabaleshwar',
      price: 4500,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1586075555530-79233c8edf45?auto=format&fit=crop&w=800&q=80',
      description: 'Scenic resort with panoramic views of the valley.',
      amenities: ['Free WiFi', 'Restaurant', 'Parking', 'Room Service']
    },
    {
      id: 3,
      name: 'Ajanta Hotel',
      location: 'Aurangabad',
      price: 3500,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1590095888206-413b6d7f7e76?auto=format&fit=crop&w=800&q=80',
      description: 'Comfortable stay near the famous Ajanta Caves.',
      amenities: ['Free WiFi', 'Restaurant', 'Tour Desk', 'Parking']
    },
    {
      id: 4,
      name: 'Beachside Resort',
      location: 'Alibaug',
      price: 6500,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      description: 'Relaxing beach resort with private access to the shore.',
      amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Beach Access']
    },
    {
      id: 5,
      name: 'Mountain View Hotel',
      location: 'Lonavala',
      price: 3000,
      rating: 3,
      image: 'https://images.unsplash.com/photo-1629297777596-9ddc36d87e8d?auto=format&fit=crop&w=800&q=80',
      description: 'Cozy accommodation with beautiful mountain views.',
      amenities: ['Free WiFi', 'Restaurant', 'Parking']
    },
    {
      id: 6,
      name: 'Heritage Palace Hotel',
      location: 'Kolhapur',
      price: 5500,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80',
      description: 'Historic palace converted into a luxury hotel.',
      amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Spa']
    }
  ];

  const filteredHotels = hotels.filter(hotel => {
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    const matchesRating = activeRating === 0 || hotel.rating >= activeRating;
    return matchesPrice && matchesRating;
  });

  const renderStarRating = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  const getAmenityIcon = (amenity) => {
    const lowerAmenity = amenity.toLowerCase();
    if (lowerAmenity.includes('wifi')) return <Wifi size={16} />;
    if (lowerAmenity.includes('restaurant') || lowerAmenity.includes('breakfast')) return <Coffee size={16} />;
    if (lowerAmenity.includes('tv')) return <Tv size={16} />;
    if (lowerAmenity.includes('room')) return <Users size={16} />;
    return <Check size={16} />;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')]">
        <div className="hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Find Perfect Accommodations</h1>
          <p className="text-xl mb-8">Best hotels and resorts across Maharashtra</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 -mt-16 relative z-10">
            <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="bg-primary hover:bg-primary-600 text-white py-2 px-8 rounded-md font-medium transition-colors">
                  Search Hotels
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Listing */}
      <section className="section-container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Filters</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range (₹)</h4>
                <div className="flex items-center justify-between mb-2">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="10000" 
                  step="500" 
                  className="w-full accent-primary cursor-pointer" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                />
                <input 
                  type="range" 
                  min="1000" 
                  max="10000" 
                  step="500" 
                  className="w-full accent-primary cursor-pointer" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                />
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Rating</h4>
                <div className="space-y-2">
                  {[0, 3, 4, 5].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="radio"
                        id={`rating-${rating}`}
                        name="rating"
                        checked={activeRating === rating}
                        onChange={() => setActiveRating(rating)}
                        className="mr-2 accent-primary h-4 w-4"
                      />
                      <label htmlFor={`rating-${rating}`} className="flex items-center text-gray-700">
                        {rating === 0 ? (
                          'All Ratings'
                        ) : (
                          <div className="flex items-center">
                            {renderStarRating(rating)} 
                            <span className="ml-1">& Above</span>
                          </div>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Property Type</h4>
                <div className="space-y-2">
                  {['Hotel', 'Resort', 'Homestay', 'Villa'].map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`type-${type}`}
                        className="mr-2 accent-primary h-4 w-4"
                      />
                      <label htmlFor={`type-${type}`} className="text-gray-700">{type}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hotels Grid */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-6">
              {filteredHotels.length} accommodations found
            </h2>

            <div className="space-y-6">
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{hotel.name}</h3>
                      <div className="flex">
                        {renderStarRating(hotel.rating)}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin size={16} className="mr-1" />
                      <span>{hotel.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 flex-grow">{hotel.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity) => (
                        <div 
                          key={amenity} 
                          className="flex items-center bg-gray-100 text-gray-700 py-1 px-3 rounded-full text-sm"
                        >
                          {getAmenityIcon(amenity)}
                          <span className="ml-1">{amenity}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">₹{hotel.price}</span>
                        <span className="text-gray-500 text-sm ml-1">per night</span>
                      </div>
                      <button className="bg-secondary hover:bg-secondary-600 text-white py-2 px-6 rounded-md font-medium transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
