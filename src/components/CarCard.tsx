import React from 'react';
import { MapPin, Clock, MessageCircle } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

interface Car {
  id: number;
  price: string;
  title: string;
  location: string;
  posted: string;
  year: number;
  kms: number;
  fuel: string;
  transmission: string;
  make: string;
  model: string;
  condition: string;
  bodyType: string;
  color: string;
  seats: number;
  images: string[];
}

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(`I am interested in ${car.title}`);
    window.open(`https://wa.me/923423330020?text=${message}`, '_blank');
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <ImageCarousel images={car.images} title={car.title} />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{car.title}</h3>
          <span className="text-2xl font-bold text-blue-600 ml-4 flex-shrink-0">{car.price}</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
            <span className="line-clamp-1">{car.location}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
            <span>{car.posted}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Year:</span>
            <span className="font-medium">{car.year}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">KMs:</span>
            <span className="font-medium">{car.kms.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Fuel:</span>
            <span className="font-medium">{car.fuel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Transmission:</span>
            <span className="font-medium">{car.transmission}</span>
          </div>
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Buy via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default CarCard;