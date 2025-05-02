
import { useState } from 'react';
import { Train, Bus, Car, Calendar, AlertCircle, Info, MapPin, ArrowRight } from 'lucide-react';

const Transportation = () => {
  const [activeTab, setActiveTab] = useState('train');
  
  // Mock data for trains
  const trains = [
    {
      id: 'T001',
      name: 'Mumbai - Pune Intercity Express',
      from: 'Mumbai CST',
      to: 'Pune Junction',
      departure: '06:40 AM',
      arrival: '09:50 AM',
      duration: '3h 10m',
      classes: ['SL', '3A', '2A'],
      fare: 'From ₹120'
    },
    {
      id: 'T002',
      name: 'Deccan Queen',
      from: 'Mumbai CST',
      to: 'Pune Junction',
      departure: '07:15 AM',
      arrival: '10:25 AM',
      duration: '3h 10m',
      classes: ['CC', '2S'],
      fare: 'From ₹210'
    },
    {
      id: 'T003',
      name: 'Koyna Express',
      from: 'Mumbai CST',
      to: 'Pune Junction',
      departure: '08:40 AM',
      arrival: '12:10 PM',
      duration: '3h 30m',
      classes: ['SL', '3A', '2A', '1A'],
      fare: 'From ₹120'
    },
    {
      id: 'T004',
      name: 'Sahyadri Express',
      from: 'Mumbai CST',
      to: 'Kolhapur',
      departure: '09:15 PM',
      arrival: '06:20 AM',
      duration: '9h 05m',
      classes: ['SL', '3A', '2A'],
      fare: 'From ₹255'
    },
    {
      id: 'T005',
      name: 'Mumbai - Nagpur Duronto Express',
      from: 'Mumbai CST',
      to: 'Nagpur',
      departure: '08:10 PM',
      arrival: '08:55 AM',
      duration: '12h 45m',
      classes: ['SL', '3A', '2A', '1A'],
      fare: 'From ₹435'
    }
  ];

  // Common travel tips
  const travelTips = [
    {
      title: 'Book in Advance',
      description: 'Train tickets can be booked 120 days in advance. For popular routes, book early.',
      icon: <Calendar />
    },
    {
      title: 'Monsoon Travel',
      description: 'During monsoon (June-Sept), expect delays in trains, especially in the Konkan route.',
      icon: <AlertCircle />
    },
    {
      title: 'Local Transport',
      description: 'Major cities have reliable local transport. Mumbai has extensive local train network.',
      icon: <Info />
    }
  ];
  
  // Popular routes
  const popularRoutes = [
    {
      from: 'Mumbai',
      to: 'Pune',
      distance: '150 km',
      trainTime: '~3 hours',
      busTime: '~3.5 hours',
      carTime: '~2.5 hours',
      image: 'https://images.unsplash.com/photo-1573019606806-3bec9f424b76?auto=format&fit=crop&w=800&q=80'
    },
    {
      from: 'Mumbai',
      to: 'Aurangabad',
      distance: '365 km',
      trainTime: '~7 hours',
      busTime: '~8 hours',
      carTime: '~6 hours',
      image: 'https://images.unsplash.com/photo-1590095888206-413b6d7f7e76?auto=format&fit=crop&w=800&q=80'
    },
    {
      from: 'Pune',
      to: 'Mahabaleshwar',
      distance: '120 km',
      trainTime: 'No direct train',
      busTime: '~3 hours',
      carTime: '~2.5 hours',
      image: 'https://images.unsplash.com/photo-1586075555530-79233c8edf45?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=80')]">
        <div className="hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Transportation in Maharashtra</h1>
          <p className="text-xl mb-8">Find the best ways to travel across the state</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        {/* Travel Options Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-10">
          <div className="flex border-b">
            <button 
              className={`flex items-center px-6 py-4 border-b-2 font-medium ${
                activeTab === 'train' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('train')}
            >
              <Train size={18} className="mr-2" />
              Train
            </button>
            <button 
              className={`flex items-center px-6 py-4 border-b-2 font-medium ${
                activeTab === 'bus' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('bus')}
            >
              <Bus size={18} className="mr-2" />
              Bus
            </button>
            <button 
              className={`flex items-center px-6 py-4 border-b-2 font-medium ${
                activeTab === 'car' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('car')}
            >
              <Car size={18} className="mr-2" />
              Car Rental
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'train' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Train Travel in Maharashtra</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Maharashtra has an extensive railway network connecting major cities and tourist destinations. 
                      The Central and Western Railways operate numerous train services daily, making it convenient 
                      to travel across the state.
                    </p>
                    <p className="text-gray-700">
                      Trains are often the most economical and comfortable way to travel long distances in Maharashtra. 
                      You can book tickets through the IRCTC website or app.
                    </p>

                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
                      <h3 className="font-medium text-amber-800 mb-2 flex items-center">
                        <AlertCircle size={18} className="mr-2" /> Important Note
                      </h3>
                      <p className="text-amber-700">
                        For train travel during peak tourist season (October-January) or during holidays, 
                        it is recommended to book tickets at least 30-45 days in advance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-md">
                    <h3 className="font-medium text-lg mb-4">Popular Train Routes</h3>
                    <div className="space-y-3">
                      {trains.slice(0, 3).map((train) => (
                        <div key={train.id} className="flex justify-between pb-3 border-b">
                          <div>
                            <p className="font-medium">{train.from} - {train.to}</p>
                            <p className="text-sm text-gray-500">{train.name}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{train.fare}</p>
                            <p className="text-sm text-gray-500">{train.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Search Trains</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Nagpur</option>
                        <option>Aurangabad</option>
                        <option>Kolhapur</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Pune</option>
                        <option>Mumbai</option>
                        <option>Nagpur</option>
                        <option>Aurangabad</option>
                        <option>Kolhapur</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="bg-primary hover:bg-primary-600 text-white py-2 px-6 rounded-md font-medium transition-colors">
                      Search Trains
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Available Trains</h3>
                  <div className="bg-white rounded-md shadow border">
                    <div className="grid grid-cols-6 bg-gray-50 p-3 border-b font-medium">
                      <div className="col-span-2">Train</div>
                      <div>Departure</div>
                      <div>Arrival</div>
                      <div>Duration</div>
                      <div>Fare</div>
                    </div>
                    {trains.map((train) => (
                      <div key={train.id} className="grid grid-cols-6 p-4 border-b items-center">
                        <div className="col-span-2">
                          <p className="font-medium">{train.name}</p>
                          <p className="text-sm text-gray-500">{train.id}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {train.classes.map((cls) => (
                              <span key={cls} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">
                                {cls}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">{train.departure}</p>
                          <p className="text-sm text-gray-500">{train.from}</p>
                        </div>
                        <div>
                          <p className="font-medium">{train.arrival}</p>
                          <p className="text-sm text-gray-500">{train.to}</p>
                        </div>
                        <div className="font-medium">{train.duration}</div>
                        <div className="font-medium">{train.fare}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bus' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Bus Travel in Maharashtra</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Maharashtra State Road Transport Corporation (MSRTC) operates extensive bus services connecting 
                      all major cities, towns and rural areas. Private operators also run luxury and semi-luxury 
                      buses on popular routes.
                    </p>
                    <p className="text-gray-700">
                      Buses are often the best way to reach locations not connected by railways, especially hill stations 
                      like Mahabaleshwar, Panchgani, and Matheran.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-md">
                    <h3 className="font-medium text-lg mb-4">Types of Buses Available</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="mt-0.5 bg-primary-100 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Ordinary/Express</p>
                          <p className="text-sm text-gray-600">Most economical option with frequent stops</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="mt-0.5 bg-primary-100 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Semi-Luxury (Asiad)</p>
                          <p className="text-sm text-gray-600">Slightly more comfortable with fewer stops</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="mt-0.5 bg-primary-100 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Luxury (Shivneri)</p>
                          <p className="text-sm text-gray-600">AC buses with comfortable seating and minimal stops</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="mt-0.5 bg-primary-100 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Sleeper Buses</p>
                          <p className="text-sm text-gray-600">Available for overnight journeys on long routes</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Search Bus Routes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Nagpur</option>
                        <option>Aurangabad</option>
                        <option>Kolhapur</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Mahabaleshwar</option>
                        <option>Lonavala</option>
                        <option>Alibaug</option>
                        <option>Nashik</option>
                        <option>Shirdi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="bg-primary hover:bg-primary-600 text-white py-2 px-6 rounded-md font-medium transition-colors">
                      Search Buses
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'car' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Car Rental in Maharashtra</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Renting a car gives you the flexibility to explore Maharashtra at your own pace. 
                      Several car rental services operate in major cities, offering both self-drive and 
                      chauffeur-driven options.
                    </p>
                    <p className="text-gray-700">
                      The state has well-maintained highways connecting major tourist destinations, 
                      making road trips a popular choice for travelers.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-md">
                    <h3 className="font-medium text-lg mb-4">Car Rental Options</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="mt-0.5 bg-primary-100 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Self-Drive Rentals</p>
                          <p className="text-sm text-gray-600">Available from companies like Zoomcar and Revv</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="mt-0.5 bg-primary-100 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Chauffeur-Driven Cars</p>
                          <p className="text-sm text-gray-600">Available for daily or multi-day hire</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="mt-0.5 bg-primary-100 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Taxi Services</p>
                          <p className="text-sm text-gray-600">Ola, Uber and local taxi services available in cities</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="mt-0.5 bg-primary-100 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Custom Road Trips</p>
                          <p className="text-sm text-gray-600">Packages available for multi-city exploration</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Find Car Rentals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Nagpur</option>
                        <option>Aurangabad</option>
                        <option>Kolhapur</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Car Type</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Economy</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Luxury</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="bg-primary hover:bg-primary-600 text-white py-2 px-6 rounded-md font-medium transition-colors">
                      Search Cars
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Popular Routes Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 font-heading">Popular Travel Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={`${route.from} to ${route.to}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{route.from} to {route.to}</h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin size={16} className="mr-1" />
                    <span>{route.distance}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <Train size={16} className="mr-2 text-primary" />
                      <span>{route.trainTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Bus size={16} className="mr-2 text-primary" />
                      <span>{route.busTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Car size={16} className="mr-2 text-primary" />
                      <span>{route.carTime}</span>
                    </div>
                  </div>
                  <button className="text-primary font-medium flex items-center hover:text-primary-700">
                    View Route Details <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Travel Tips for Maharashtra</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;
