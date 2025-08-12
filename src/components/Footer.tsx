import React from 'react';
import { Car, Phone, MapPin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold">Shehroz MotorHub</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in finding the perfect vehicle. We offer a wide selection of quality cars with transparent pricing and excellent customer service.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <a href="tel:+923423330020" className="hover:text-blue-400 transition-colors">
                  +92 342 333 0020
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-blue-600" />
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block hover:text-blue-400 transition-colors">Home</a>
              <a href="/cars" className="block hover:text-blue-400 transition-colors">All Cars</a>
              <a href="tel:+923423330020" className="block hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Shehroz MotorHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;