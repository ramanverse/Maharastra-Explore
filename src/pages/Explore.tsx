import { useState } from "react";
import { Search, Filter, MapPin, Star } from "lucide-react";

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "historical", name: "Historical" },
    { id: "beaches", name: "Beaches" },
    { id: "hill-stations", name: "Hill Stations" },
    { id: "religious", name: "Religious" },
    { id: "wildlife", name: "Wildlife" },
  ];

  const destinations = [
    {
      id: 1,
      name: "Gateway of India",
      location: "Mumbai",
      category: "historical",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80",
      description:
        "The iconic monument built during the 20th century overlooking the Arabian Sea.",
    },
    {
      id: 2,
      name: "Ajanta Caves",
      location: "Aurangabad",
      category: "historical",
      rating: 4.9,
      image:
        "https://images.livemint.com/img/2023/03/10/original/Ajanta_Cave_19_monks_1678456229221.jpg",
      description:
        "Ancient Buddhist rock-cut cave monuments dating from the 2nd century BCE.",
    },
    {
      id: 3,
      name: "Ellora Caves",
      location: "Aurangabad",
      category: "historical",
      rating: 4.7,
      image:
        "https://lp-cms-production.imgix.net/2019-06/GettyImages-470586360_super.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
      description:
        "A UNESCO World Heritage Site featuring Hindu, Buddhist and Jain monuments.",
    },
    {
      id: 4,
      name: "Mahabaleshwar",
      location: "Satara",
      category: "hill-stations",
      rating: 4.6,
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/Best-14-Things-To-Do-in-Mahabaleshwar5-hero?qlt=82&ts=1726668886303",
      description:
        "Popular hill station in the Western Ghats known for its strawberries and panoramic views.",
    },
    {
      id: 5,
      name: "Lonavala",
      location: "Pune",
      category: "hill-stations",
      rating: 4.5,
      image: "https://mistymeadows.in/images/attraction/Lohagad-Fort.jpg",
      description:
        "Popular hill station with beautiful waterfalls, lakes and forts.",
    },
    {
      id: 6,
      name: "Shirdi",
      location: "Ahmednagar",
      category: "religious",
      rating: 4.9,
      image:
        "https://rukminim3.flixcart.com/image/850/1000/k2arbm80/poster/7/j/a/medium-shirdi-sai-baba-wall-poster-wall-paper-wall-sticker-original-imafhnsp3gzq7emb.jpeg?q=90&crop=false",
      description:
        "Famous spiritual destination known as the home of Sai Baba.",
    },
    {
      id: 7,
      name: "Alibaug Beach",
      location: "Raigad",
      category: "beaches",
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description:
        "Sandy shore with historic forts and fresh seafood, popular with Mumbai weekenders.",
    },
    {
      id: 8,
      name: "Tadoba National Park",
      location: "Chandrapur",
      category: "wildlife",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=800&q=80",
      description:
        "Maharashtra's largest national park known for its tiger population.",
    },
  ];

  const filteredDestinations =
    activeFilter === "all"
      ? destinations
      : destinations.filter((dest) => dest.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-[url('https://images.unsplash.com/photo-1590095888206-413b6d7f7e76?auto=format&fit=crop&w=1920&q=80')]">
        <div className="hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Explore Maharashtra
          </h1>
          <p className="text-xl mb-8">
            Discover the diverse attractions across the state
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 -mt-16 relative z-10">
            <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full">
                  <Search
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search destinations, cities or attractions..."
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button className="bg-primary hover:bg-primary-600 text-white py-2 px-6 rounded-md font-medium transition-colors w-full md:w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Filter size={20} className="text-primary mr-2" />
            <h2 className="text-xl font-medium">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <div className="flex items-center text-accent">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1">{destination.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="bg-secondary hover:bg-secondary-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;
