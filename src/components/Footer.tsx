
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold font-heading">ExploreMH</Link>
            <p className="text-gray-300">Discover the beauty and heritage of Maharashtra with our curated travel experiences.</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-accent"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/explore" className="text-gray-300 hover:text-accent transition-colors">Explore</Link></li>
              <li><Link to="/hotels" className="text-gray-300 hover:text-accent transition-colors">Hotels</Link></li>
              <li><Link to="/transportation" className="text-gray-300 hover:text-accent transition-colors">Transportation</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Mumbai</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Pune</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Aurangabad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Lonavala</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Mahabaleshwar</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Travel Lane, Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-gray-300">info@exploremh.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ExploreMH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
