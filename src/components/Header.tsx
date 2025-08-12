import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Phone, Facebook } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Shehroz MotorHub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/cars" 
              className={`text-lg font-medium transition-colors ${
                location.pathname === '/cars' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              All Cars
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+923423330020"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">+92 342 333 0020</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex space-x-4">
          <Link 
            to="/" 
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              location.pathname === '/' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/cars" 
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              location.pathname === '/cars' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Cars
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;