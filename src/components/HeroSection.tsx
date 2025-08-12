import React from 'react';
import { Phone, Facebook, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-blue-200">Shehroz MotorHub</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Your trusted destination for premium pre-owned vehicles. We offer quality cars with transparent pricing and excellent customer service.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-lg">Quality Assured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-lg">Best Prices</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-lg">Trusted Service</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="tel:+923423330020"
              className="flex items-center space-x-3 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
              <span>Call: +92 342 333 0020</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Facebook className="h-5 w-5" />
              <span>Follow us on Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;