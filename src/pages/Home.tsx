import { Link } from "react-router-dom";
import { ArrowRight, Map, Star, Hotel, Train, Shield } from "lucide-react";

const Home = () => {
  const destinations = [
    {
      id: 1,
      name: "Gateway of India, Mumbai",
      description: "The iconic arch monument built during the 20th century.",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Ajanta Caves, Aurangabad",
      description: "Buddhist cave monuments dating from the 2nd century BCE.",
      image:
        "https://images.livemint.com/img/2023/03/10/original/Ajanta_Cave_19_monks_1678456229221.jpg",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Mahabaleshwar",
      description:
        "A hill station located in the Western Ghats with panoramic views.",
      image:
        "https://lp-cms-production.imgix.net/2019-06/GettyImages-470586360_super.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
      rating: 4.7,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-[url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1920&q=80')]">
        <div className="hero-content">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
            Discover Maharashtra
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore the beauty, culture and heritage of Maharashtra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="bg-primary hover:bg-primary-600 text-white py-3 px-8 rounded-md font-semibold transition-colors"
            >
              Explore Now
            </Link>
            <Link
              to="/about"
              className="bg-white hover:bg-gray-100 text-secondary py-3 px-8 rounded-md font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 -mt-24 relative z-10 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Find Your Perfect Maharashtra Trip
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2 invisible">
                  Search
                </label>
                <button className="w-full bg-primary hover:bg-primary-600 text-white py-2 px-4 rounded-md font-medium transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-3">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the top destinations in Maharashtra that tourists love to
            visit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <div className="flex items-center text-accent">
                    <Star size={18} fill="currentColor" />
                    <span className="ml-1">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Link
                  to={`/explore/${destination.id}`}
                  className="text-primary font-medium flex items-center hover:text-primary-700"
                >
                  Explore more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/explore"
            className="bg-secondary hover:bg-secondary-600 text-white py-3 px-8 rounded-md font-semibold inline-block transition-colors"
          >
            View All Destinations
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-3">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Making your Maharashtra travel experience seamless and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Curated Destinations
              </h3>
              <p className="text-gray-600">
                Handpicked locations to ensure you experience the best of
                Maharashtra.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hotel className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Quality Accommodations
              </h3>
              <p className="text-gray-600">
                Partnered with top-rated hotels for comfortable stays in every
                budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Easy Transportation
              </h3>
              <p className="text-gray-600">
                Get detailed information about travel options to plan your
                journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Travels</h3>
              <p className="text-gray-600">
                Updated safety information and guidelines for all destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Explore Maharashtra?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Start planning your trip today and discover the wonders of this
            beautiful state.
          </p>
          <Link
            to="/explore"
            className="bg-white text-primary hover:bg-gray-100 py-3 px-8 rounded-md font-semibold inline-block transition-colors"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
